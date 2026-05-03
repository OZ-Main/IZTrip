import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const localesDir = join(root, 'src', 'i18n', 'locales')

function tripEn(slug, data) {
  return [slug, data]
}

const catalogEn = Object.fromEntries([
  tripEn('orheiul-vechi', {
    title: 'Orheiul Vechi & Râul Răut viewpoints',
    location: 'Butuceni, Orhei district',
    shortDescription:
      'Cliff-top monastery complex, scenic gorges, and village hospitality — Moldova’s signature cultural landscape in one relaxed day.',
    description:
      'Walk cobbled paths above the Răut River, visit the cliff monastery, and hear how centuries of monastic life shaped this region. We pace the day for photos, local food, and unhurried storytelling so you leave with context, not just snapshots.',
    highlight1: 'Guided cliff-edge viewpoints with safe pacing and clear meeting points',
    highlight2: 'Traditional lunch featuring seasonal Moldovan dishes',
    highlight3: 'Small-group storytelling focused on history, faith, and daily village life',
    highlight4: 'Comfortable transport with bottled water and rain backup plan',
    included1: 'Licensed local guide and curated route',
    included2: 'Round-trip transport from Chișinău meeting point',
    included3: 'Lunch at a trusted guesthouse or restaurant partner',
    included4: 'Museum and protected-area access fees where applicable',
    included5: 'IZ Trip coordination and day-of guest support',
    itineraryDay1Title: 'Chișinău → Orheiul Vechi loop',
    itineraryDay1Body:
      'Morning pickup, guided walk through the archaeological complex, lunch in Butuceni, optional cellar visit add-on when schedules allow, return by early evening.',
  }),
  tripEn('cricova-wine', {
    title: 'Cricova underground wine galleries',
    location: 'Cricova, Chișinău district',
    shortDescription:
      'Drive through limestone cellars on guided electric trains, taste sparkling and still wines, and learn why Moldova is an underrated wine destination.',
    description:
      'This adults-focused experience pairs geology with gastronomy: kilometers of underground roads, constant cool climate, and cellars lined with bottles from decades of craft. Your guide connects history, Soviet-era anecdotes, and modern boutique labels.',
    highlight1: 'Gallery train ride through limestone cellars with curated commentary',
    highlight2: 'Structured tasting flight with local cheeses and bread',
    highlight3: 'Photography-friendly stops in iconic “streets” named after grapes',
    highlight4: 'Optional upgrade: extended vintage tasting (on request, age 18+)',
    included1: 'Private IZ Trip host and winery gallery tickets',
    included2: 'Round-trip transport from central Chișinău',
    included3: 'Guided tasting with spittoons and pacing for comfort',
    included4: 'Still and sparkling pours selected with the cellar team',
    itineraryDay1Title: 'Cellars, tasting, and free time in the boutique shop',
    itineraryDay1Body:
      'Late-morning departure, underground tour, seated tasting, time to purchase bottles at cellar prices, return before dinner.',
  }),
  tripEn('soroca-fortress', {
    title: 'Soroca Fortress & Nistru viewpoint',
    location: 'Soroca, north Moldova',
    shortDescription:
      'A family-friendly day at Moldova’s circular fortress, with river stories, picnic energy, and room to roam the ramparts.',
    description:
      'Kids love the wide stairs and panoramic views; adults appreciate the layered history where trade routes met empires. We include breaks, snacks, and a guide who knows how to keep young travelers engaged.',
    highlight1: 'Kid-paced storytelling with scavenger-style prompts',
    highlight2: 'Photo stops along the Dniester/Nistru river panorama',
    highlight3: 'Picnic-style snack pack included (dietary notes on booking)',
    highlight4: 'Comfortable minibus with booster seats on request',
    included1: 'Family-oriented guide and fortress entry',
    included2: 'Transport from Chișinău with rest stops',
    included3: 'Snack pack and bottled water',
    included4: 'IZ Trip emergency contact for the travel day',
    itineraryDay1Title: 'Fortress walk, river lookout, relaxed return',
    itineraryDay1Body:
      'Morning departure, guided rampart loop, lunch break in Soroca town (meal not included unless selected add-on), riverside viewpoint, return by evening.',
  }),
  tripEn('chisinau-walking-tour', {
    title: 'Old Chișinău walking tour',
    location: 'Chișinău city center',
    shortDescription:
      'Architecture, parks, and neighborhood cafés — a friendly intro to the capital with a local guide and a flexible pace.',
    description:
      'Trace Art Nouveau fragments, Soviet modernism, and today’s creative corners. We keep groups small so you can ask about daily life, language, and where locals actually eat after the tour.',
    highlight1: 'Small groups with audio-friendly stops',
    highlight2: 'Coffee break recommendation map (digital handout)',
    highlight3: 'Architecture cards to spot motifs as you walk',
    highlight4: 'Rain-friendly indoor alternates pre-planned',
    included1: 'Licensed city guide',
    included2: 'Printed/digital route with translated glossary',
    included3: 'IZ Trip concierge tip sheet for dinner reservations',
    itineraryDay1Title: 'Central loop with park detours',
    itineraryDay1Body:
      'Meet at the Cathedral Park area, weave through historic streets, pause for stories, optional café stop, finish near independent restaurants.',
  }),
  tripEn('saharna-tipova', {
    title: 'Saharna & Țîpova monastery trail',
    location: 'Rezina district, Nistru cliffs',
    shortDescription:
      'Two days of forest trails, waterfall viewpoints, and cliff monasteries overlooking the river — balanced hiking with cozy overnight.',
    description:
      'Day one focuses on Saharna’s waterfall circuit; day two explores Țîpova’s rock-hewn cells. Evenings are unhurried: local dinner, early rest, and optional stargazing when skies cooperate.',
    highlight1: 'Graded hiking options for different fitness levels',
    highlight2: 'River cliff lookouts with safety briefings',
    highlight3: 'One night in a vetted guesthouse (twin rooms)',
    highlight4: 'Support vehicle for the longer transfer segments',
    included1: 'Mountain guide and monastery access coordination',
    included2: 'One breakfast, two lunches, one dinner (set menus)',
    included3: 'Overnight in partner guesthouse',
    included4: 'Park and protected-area fees',
    included5: 'Transport from Chișinău with trailhead drop-offs',
    itineraryDay1Title: 'Saharna waterfalls & forest loop',
    itineraryDay1Body:
      'Drive from Chișinău, hike the waterfall circuit, guesthouse check-in, hearty dinner.',
    itineraryDay2Title: 'Țîpova rock monastery & return',
    itineraryDay2Body:
      'Morning transfer, cliff trail with monastery visit, lunch, return to Chișinău by evening.',
  }),
  tripEn('weekend-nature-escape', {
    title: 'Weekend nature escape (Codrii forest)',
    location: 'Central Moldova hills',
    shortDescription:
      'A soft-adventure weekend with ridge views, foraging stories, farm visits, and slow evenings around the fire.',
    description:
      'Designed for families or small friend groups who want fresh air without extreme sport. Trails are moderate; guides carry first aid and adjust timing for kids.',
    highlight1: 'Ridge viewpoints with picnic lunch',
    highlight2: 'Farm visit with seasonal tasting (cheese, fruit, or honey)',
    highlight3: 'Optional easy kayak add-on when water levels allow',
    highlight4: 'One night glamping-style tents or cabins (partner site)',
    included1: 'Nature guide and weekend route plan',
    included2: 'Two lunches, one dinner, one breakfast',
    included3: 'Overnight accommodation (family rooms on request)',
    included4: 'Transport from Chișinău with trail snacks',
    included5: 'IZ Trip safety kit and backup weather routing',
    included6: 'Digital photo tips sheet for phone cameras',
    itineraryDay1Title: 'Into the hills & farm table',
    itineraryDay1Body:
      'Morning pickup, ridge hike, farm visit, settle into camp/cabins, dinner.',
    itineraryDay2Title: 'Forest loop & return',
    itineraryDay2Body:
      'Gentle morning loop, lunch, optional kayak, return to Chișinău.',
  }),
])

const uiEn = {
  brand: { name: 'IZ Trip' },
  common: { loadingApp: 'Preparing your trip workspace…', close: 'Close' },
  language: {
    switcherLabel: 'Language',
    codes: { en: 'EN', ro: 'RO', ru: 'RU' },
  },
  nav: {
    mainLabel: 'Primary',
    home: 'Home',
    trips: 'Trips',
    about: 'About',
    signIn: 'Sign in',
    register: 'Create account',
    signOut: 'Sign out',
    openMenu: 'Open menu',
  },
  auth: {
    signIn: 'Sign in',
    signInDescription: 'Access saved trips and secure booking requests.',
    registerTitle: 'Create your IZ Trip account',
    registerDescription: 'Save preferences and book curated Moldova experiences.',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    displayName: 'Full name',
    signingIn: 'Signing in…',
    registering: 'Creating account…',
    createAccount: 'Create account',
    signedIn: 'Welcome back!',
    registered: 'Account created — welcome to IZ Trip!',
    noAccount: 'New to IZ Trip?',
    createOne: 'Create an account',
    haveAccount: 'Already have an account?',
    signInInstead: 'Sign in instead',
    validation: {
      emailRequired: 'Email is required',
      emailInvalid: 'Enter a valid email address',
      passwordRequired: 'Password is required',
      passwordMin: 'Use at least 8 characters',
      displayNameRequired: 'Name is required',
      confirmPasswordRequired: 'Confirm your password',
      passwordsMismatch: 'Passwords do not match',
    },
    errors: {
      generic: 'Something went wrong. Please try again.',
      network: 'Network error. Check your connection and try again.',
      invalidEmail: 'That email address is not valid.',
      userDisabled: 'This account has been disabled.',
      invalidCredentials: 'Email or password is incorrect.',
      emailInUse: 'An account with this email already exists.',
      weakPassword: 'Password is too weak. Use at least 8 characters.',
      tooManyRequests: 'Too many attempts. Wait a moment and try again.',
    },
  },
  home: {
    hero: {
      eyebrow: 'Curated Moldova travel',
      title: 'Discover Moldova with calm, premium weekend planning',
      subtitle:
        'Handpicked routes for families, friends, and curious explorers — transparent pricing, local guides, and booking requests that stay organized.',
      primaryCta: 'Explore trips',
      secondaryCta: 'Create free account',
    },
    featured: {
      title: 'Featured Moldova experiences',
      description: 'Start with guest-loved routes — wineries, fortresses, gorges, and city walks.',
      viewAll: 'View all trips',
    },
    how: {
      title: 'How IZ Trip works',
      description: 'Three simple steps from inspiration to a confirmed request.',
      step1: {
        badge: '01',
        title: 'Browse curated trips',
        body: 'Filter by audience and style, compare transparent inclusions, and read honest day plans.',
      },
      step2: {
        badge: '02',
        title: 'Pick dates & details',
        body: 'Choose an available departure window and tell us who is traveling — we keep requests structured.',
      },
      step3: {
        badge: '03',
        title: 'Request & relax',
        body: 'Submit a secure booking request. We save it securely and notify our team by email.',
      },
    },
    categories: {
      title: 'Explore by travel style',
      description: 'Jump into the catalog with one tap — filters stay easy on mobile.',
    },
    trust: {
      title: 'Why travelers trust IZ Trip',
      description: 'We design for clarity, safety, and real Moldovan hospitality.',
      point1: 'Local partners vetted for quality, insurance readiness, and guest care',
      point2: 'Clear group sizes and pacing notes on every itinerary',
      point3: 'Secure accounts so your requests stay tied to you',
    },
    finalCta: {
      title: 'Ready to plan your next Moldova weekend?',
      description: 'Create an account to book, or explore trips first — no pressure.',
      primary: 'Browse trips',
      secondary: 'Sign in',
    },
  },
  trips: {
    page: {
      title: 'Curated trips',
      description: 'Filter by category and audience to match your travel style.',
    },
    backHome: 'Back to home',
    filters: {
      all: 'All',
      category: 'Category',
      audience: 'Audience',
      drawerTitle: 'Filter trips',
      drawerDescription: 'Choose category and audience. Results update when you close this panel.',
      openButton: 'Filters',
    },
    categories: {
      kids: 'Kids',
      family: 'Family',
      adults: 'Adults',
      nature: 'Nature',
      culture: 'Culture',
      weekend: 'Weekend',
      educational: 'Educational',
      custom: 'Custom',
    },
    audiences: {
      kids: 'Kids',
      family: 'Family',
      adults: 'Adults',
      mixed: 'Mixed',
      group: 'Group',
    },
    card: {
      durationLabel_one: '{{count}} day',
      durationLabel_other: '{{count}} days',
      nextDate: 'Next available',
      noUpcomingDates: 'Ask for new dates',
      from: 'From',
      viewDetails: 'View details',
    },
    empty: {
      title: 'No trips match these filters',
      description: 'Try widening your filters to see more curated experiences.',
      resetFilters: 'Reset filters',
    },
    catalog: catalogEn,
  },
  tripDetails: {
    backToTrips: 'Back to trips',
    priceFrom: 'Price from',
    groupSize: 'Group size: {{min}}–{{max}} guests',
    bookCta: 'Book / request trip',
    descriptionTitle: 'About this experience',
    highlightsTitle: 'Highlights',
    includedTitle: 'Included',
    itineraryTitle: 'Itinerary',
    availableDatesTitle: 'Available departure dates',
  },
  booking: {
    page: {
      title: 'Request this trip',
      description:
        'Submit a structured request — we save it in Firestore and send a notification email to our team.',
    },
    form: {
      fullName: 'Full name',
      email: 'Email',
      phone: 'Phone',
      preferredDate: 'Preferred date',
      peopleCount: 'Number of guests',
      message: 'Message (optional)',
      submit: 'Submit request',
      submitting: 'Sending…',
    },
    validation: {
      fullNameRequired: 'Full name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Enter a valid email',
      phoneRequired: 'Phone is required (at least 6 characters)',
      preferredDateRequired: 'Choose a date',
      preferredDateInvalid: 'Pick one of the listed departures',
      peopleCountInvalid: 'Enter a valid number of guests',
      peopleCountMin: 'At least one guest is required',
      peopleCountMax: 'Maximum {{max}} guests for this trip',
    },
    success: {
      title: 'Request received',
      description:
        'We saved your booking request and emailed our team. Someone will follow up with you soon.',
      viewTrip: 'Back to trip details',
      exploreMore: 'Explore more trips',
    },
    successWithWarning: {
      title: 'Request received',
      description:
        'Your booking request was saved. We could not send the notification email automatically, but our team can still see it in the system and will follow up.',
    },
    successFullToast: 'Booking saved and team notified by email.',
    emailWarningToast:
      'Booking saved. The notification email could not be sent — our team can still see your request.',
    submitError: 'Could not save your request. Check your connection and try again.',
  },
  about: {
    page: {
      title: 'About IZ Trip',
      lead: 'Moldova-first weekend and culture planning with a premium-but-friendly touch.',
    },
    mission: {
      title: 'Our mission',
      body: 'We help travelers experience Moldova safely, confidently, and without outdated stereotypes — through curated itineraries and transparent booking.',
    },
    local: {
      title: 'Local by design',
      body: 'Routes start from real guides, guesthouses, and cellars we know personally. We grow carefully so quality stays high.',
    },
    safety: {
      title: 'Families, kids, and groups',
      body: 'Pacing, rest stops, and clear communication matter. Every listing shows realistic group sizes and what to expect on the trail or in the city.',
    },
    cta: 'Browse curated trips',
  },
}

const catalogRo = {
  'orheiul-vechi': {
    title: 'Orheiul Vechi și panoramă peste Râul Răut',
    location: 'Butuceni, raionul Orhei',
    shortDescription:
      'Mănăstire pe stâncă, chei line, ospitalitate rurală — peisajul cultural emblematic al Moldovei într-o zi relaxată.',
    description:
      'Urci poteci de piatră deasupra Răutului, vizitezi mănăstirea suspendată și înțelegi cum secole de viață monahală au modelat regiunea. Ritmul zilei lasă loc pentru fotografii, bucate locale și povești fără grabă.',
    highlight1: 'Puncte de belvedere sigure, cu briefing și puncte de întâlnire clare',
    highlight2: 'Prânz tradițional cu preparate moldovenești de sezon',
    highlight3: 'Ghidare pentru grupuri mici: istorie, credință, viață de zi cu zi în sat',
    highlight4: 'Transport confortabil, apă îmbuteliată și plan alternativ la ploaie',
    included1: 'Ghid local autorizat și traseu curatoriat',
    included2: 'Transport dus-întors din punctul de întâlnire din Chișinău',
    included3: 'Prânz la partener verificat (pensiune sau restaurant)',
    included4: 'Taxe de acces la muzeu și arii protejate, unde e cazul',
    included5: 'Coordonare IZ Trip și suport în ziua excursiei',
    itineraryDay1Title: 'Circuit Chișinău → Orheiul Vechi',
    itineraryDay1Body:
      'Plecare dimineața, tur arheologic ghidat, prânz în Butuceni, opțional vizită la crame dacă permite orarul, întoarcere spre seară.',
  },
  'cricova-wine': {
    title: 'Galeriile subterane de vin Cricova',
    location: 'Cricova, raionul Chișinău',
    shortDescription:
      'Plimbare cu trenulețul electric prin galeriile de calcar, degustare de spumante și vinuri liniștite — Moldova ca destinație viticolă.',
    description:
      'Experiență pentru adulți: geologie, temperaturi constante și kilometri de „străzi” subterane. Ghidul leagă istoria, anecdote din epoca sovietică și etichete boutique actuale.',
    highlight1: 'Tur cu trenuleț prin galerii, cu explicații curatoriate',
    highlight2: 'Degustare structurată cu brânzeturi locale și pâine',
    highlight3: 'Opriri prietenoase pentru fotografii pe „străzi” numite după soiuri',
    highlight4: 'Upgrade opțional: degustare de vintage (la cerere, 18+)',
    included1: 'Host IZ Trip privat și bilete la galerii',
    included2: 'Transport dus-întors din Chișinău central',
    included3: 'Degustare ghidată, cu ritm confortabil',
    included4: 'Seleție de vinuri liniștite și spumante cu echipa cramei',
    itineraryDay1Title: 'Galerii, degustare, timp în shop',
    itineraryDay1Body:
      'Plecare spre prânz, tur subteran, degustare la masă, timp pentru cumpărături la preț de cramă, întoarcere înainte de cină.',
  },
  'soroca-fortress': {
    title: 'Cetatea Sorocii și panorama Nistrului',
    location: 'Soroca, nordul Moldovei',
    shortDescription:
      'Zi prietenoasă pentru familii la fortăreața circulară, cu povești despre râu, energie de picnic și loc pe metereze.',
    description:
      'Copiii iubesc treptele largi și panoramele; adulții apreciază istoriile rutelor comerciale. Includem pauze, gustări și un ghid care știe să țină ritmul pentru cei mici.',
    highlight1: 'Povești adaptate copiilor, cu „misiuni” de observare',
    highlight2: 'Opriri foto pe panorama Nistrului',
    highlight3: 'Pachet de gustări tip picnic (mențiuni dietetice la rezervare)',
    highlight4: 'Microbuz confortabil; scaune înălțătoare la cerere',
    included1: 'Ghid orientat spre familii și acces la cetate',
    included2: 'Transport din Chișinău cu pauze de odihnă',
    included3: 'Apă și pachet de gustări',
    included4: 'Contact de urgență IZ Trip în ziua excursiei',
    itineraryDay1Title: 'Cetate, belvedere, întoarcere relaxată',
    itineraryDay1Body:
      'Plecare dimineața, tur pe metereze, pauză de prânz în Soroca (masa nu e inclusă decât dacă alegi add-on), belvedere la râu, întoarcere seara.',
  },
  'chisinau-walking-tour': {
    title: 'Tur pietonal Chișinăul vechi',
    location: 'Centrul Chișinăului',
    shortDescription:
      'Arhitectură, parcuri și cafenele de cartier — intro prietenoasă în capitală, cu ghid local și ritm flexibil.',
    description:
      'Fragmente Art Nouveau, modernism sovietic și colțuri creative de azi. Grupuri mici ca să poți întreba despre viața de zi cu zi, limbă și restaurante după tur.',
    highlight1: 'Grupuri mici, opriri ușor de ascultat',
    highlight2: 'Hartă digitală cu recomandări pentru cafea',
    highlight3: 'Fișe cu detalii arhitecturale de recunoscut pe traseu',
    highlight4: 'Variante interioare la ploaie, planificate din timp',
    included1: 'Ghid autorizat al orașului',
    included2: 'Traseu tipărit/digital cu mini-glosar',
    included3: 'Fișă IZ Trip cu tips pentru rezervări la cină',
    itineraryDay1Title: 'Circuit central cu detour prin parcuri',
    itineraryDay1Body:
      'Întâlnire lângă Parcul Catedralei, străzi istorice, povești, opțional popas la cafea, final lângă restaurante independente.',
  },
  'saharna-tipova': {
    title: 'Saharna și Țîpova — traseu de mănăstiri',
    location: 'Rezina, versanți pe Nistru',
    shortDescription:
      'Două zile de poteci forestiere, cascade și mănăstiri rupestre deasupra râului — drumeție echilibrată cu noapte liniștită.',
    description:
      'Prima zi: circuitul cascadelor din Saharna. A doua zi: celulele săpate în stâncă la Țîpova. Seara fără grabă: cină locală, odihnă și stele, când cerul permite.',
    highlight1: 'Variante de drumeție pentru niveluri diferite de formă',
    highlight2: 'Belvedere pe versant, cu instrucțiuni de siguranță',
    highlight3: 'O noapte la pensiune verificată (camere twin)',
    highlight4: 'Mașină de sprijin pentru segmentele lungi de transfer',
    included1: 'Ghid montan și acces coordonat la mănăstiri',
    included2: 'Un mic dejun, două prânzuri, o cină (meniuri set)',
    included3: 'O noapte la pensiune parteneră',
    included4: 'Taxe pentru parcuri și arii protejate',
    included5: 'Transport din Chișinău cu transfer la punctele de start',
    itineraryDay1Title: 'Cascade Saharna și buclă forestieră',
    itineraryDay1Body: 'Deplasare din Chișinău, traseu cascadă, cazare, cină consistentă.',
    itineraryDay2Title: 'Mănăstirea rupestră Țîpova și întoarcere',
    itineraryDay2Body: 'Transfer dimineața, traseu pe stâncă, prânz, întoarcere spre seară la Chișinău.',
  },
  'weekend-nature-escape': {
    title: 'Weekend în natură (Codrii)',
    location: 'Dealurile Moldovei centrale',
    shortDescription:
      'Weekend soft-adventure: crestă, povești despre plante, fermă și seri lângă foc, fără sport extrem.',
    description:
      'Pentru familii sau grupuri mici de prieteni. Trasee moderate; ghizi au trusă de prim-ajutor și adaptează ritmul pentru copii.',
    highlight1: 'Belvedere pe creastă cu prânz picnic',
    highlight2: 'Vizită la fermă cu degustare sezonieră (brânză/fructe/miere)',
    highlight3: 'Add-on ușor cu caiac, când nivelul apei permite',
    highlight4: 'O noapte în corturi glamping sau cabane (loc partener)',
    included1: 'Ghid natură și plan de weekend',
    included2: 'Două prânzuri, o cină, un mic dejun',
    included3: 'Cazare o noapte (camere pentru familii la cerere)',
    included4: 'Transport din Chișinău cu gustări pe traseu',
    included5: 'Kit siguranță IZ Trip și rută alternativă la vreme rea',
    included6: 'Ghid scurt pentru fotografii cu telefonul',
    itineraryDay1Title: 'În dealuri și masă la fermă',
    itineraryDay1Body: 'Ridicare dimineața, drumeție pe creastă, fermă, cazare la tabără/cabană, cină.',
    itineraryDay2Title: 'Buclă forestieră și întoarcere',
    itineraryDay2Body: 'Dimineață ușoară, prânz, opțional caiac, întoarcere la Chișinău.',
  },
}

const catalogRu = {
  'orheiul-vechi': {
    title: 'Орхейский монастырь и виды на Реут',
    location: 'Бутучены, Орхейский район',
    shortDescription:
      'Монастырь на утёсе, живописные ущелья и гостеприимство деревни — знаковый культурный пейзаж Молдовы за один спокойный день.',
    description:
      'Прогулка по каменным тропам над Реутом, визит в скальный монастырь и истории о веках монашеской жизни. Темп дня — для фото, местной кухни и неспешных рассказов.',
    highlight1: 'Смотровые площадки с безопасным маршрутом и точками сбора',
    highlight2: 'Традиционный обед с сезонными молдавскими блюдами',
    highlight3: 'Малые группы: история, вера, быт села',
    highlight4: 'Комфортный транспорт, вода и запасной план при дожде',
    included1: 'Лицензированный гид и продуманный маршрут',
    included2: 'Трансфер туда-обратно из точки встречи в Кишинёве',
    included3: 'Обед в проверенном гест-хаусе или ресторане',
    included4: 'Входные билеты в музеи и охраняемые зоны по программе',
    included5: 'Координация IZ Trip и поддержка в день тура',
    itineraryDay1Title: 'Кишинёв — Орхей — возвращение',
    itineraryDay1Body:
      'Утром выезд, экскурсия по комплексу, обед в Бутученах, по желанию визит в погреб при графике, возвращение к вечеру.',
  },
  'cricova-wine': {
    title: 'Подземные галереи винных подвалов Крикова',
    location: 'Крикова, Кишинёвский район',
    shortDescription:
      'Поезд на электропоезде по известняковым галереям, дегустация игристых и тихих вин — Молдова как винная страна.',
    description:
      'Формат для взрослых: геология, стабильный микроклимат и километры подземных «улиц». Гид связывает историю, советские истории и современные малые винодельни.',
    highlight1: 'Поездка по галереям с комментариями',
    highlight2: 'Структурированная дегустация с сыром и хлебом',
    highlight3: 'Удобные остановки для фото на «улицах» сортов',
    highlight4: 'Опционально: расширенная дегустация винтажей (18+)',
    included1: 'Хост IZ Trip и билеты в галереи',
    included2: 'Трансфер из центра Кишинёва',
    included3: 'Гидированная дегустация в комфортном темпе',
    included4: 'Подбор тихих и игристых вин командой подвала',
    itineraryDay1Title: 'Галереи, дегустация, время в бутик-шопе',
    itineraryDay1Body:
      'Выезд ближе к полудню, подземный тур, дегустация за столом, время на покупки по ценам подвала, возвращение до ужина.',
  },
  'soroca-fortress': {
    title: 'Крепость Сороки и вид на Днестр',
    location: 'Сороки, север Молдовы',
    shortDescription:
      'Семейный день у круглой крепости: истории о реке, лёгкий пикник и простор на бастионах.',
    description:
      'Детям нравятся широкие ступени и панорамы; взрослым — слои истории торговых путей. Перерывы, снеки и гид, который умеет удерживать внимание детей.',
    highlight1: 'Рассказы в детском темпе с заданиями-наблюдениями',
    highlight2: 'Фото-остановки на панораме Днестра',
    highlight3: 'Набор снеков в стиле пикника (диета — при брони)',
    highlight4: 'Комфортный микроавтобус; бустеры по запросу',
    included1: 'Семейный гид и вход в крепость',
    included2: 'Трансфер из Кишинёва с остановками',
    included3: 'Снеки и вода',
    included4: 'Экстренный контакт IZ Trip в день тура',
    itineraryDay1Title: 'Крепость, смотровая, спокойный возврат',
    itineraryDay1Body:
      'Утром выезд, маршрут по бастионам, пауза на обед в Сороках (не включён без add-on), смотровая у реки, вечером возвращение.',
  },
  'chisinau-walking-tour': {
    title: 'Пешая прогулка по старому Кишинёву',
    location: 'Центр Кишинёва',
    shortDescription:
      'Архитектура, парки и кофейни квартала — дружелюбное знакомство с столицей с местным гидом.',
    description:
      'Фрагменты Art Nouveau, советский модернизм и современные детали. Маленькие группы, чтобы спросить о быте, языке и где ужинать после тура.',
    highlight1: 'Малые группы и удобные для слуха остановки',
    highlight2: 'Цифровая карта с рекомендациями кофеен',
    highlight3: 'Карточки с архитектурными мотивами',
    highlight4: 'Запасной маршрут в помещениях при дожде',
    included1: 'Лицензированный городской гид',
    included2: 'Маршрут и мини-глоссарий',
    included3: 'Подсказки IZ Trip для резервов на ужин',
    itineraryDay1Title: 'Центральная петля с заходом в парки',
    itineraryDay1Body:
      'Встреча у парка собора, исторические улицы, рассказы, опционально кофе, финиш у независимых ресторанов.',
  },
  'saharna-tipova': {
    title: 'Сахарна и Цыпова — монастырский маршрут',
    location: 'Резина, утёсы над Днестром',
    shortDescription:
      'Два дня лесных троп, водопадов и скальных монастырей — умеренный треккинг и уютная ночёвка.',
    description:
      'Первый день — кольцо водопадов Сахарны; второй — пещерные кельи Цыповы. Вечера без спешки: ужин, отдых и звёзды при ясном небе.',
    highlight1: 'Варианты маршрутов под разную подготовку',
    highlight2: 'Смотровые на склоне с инструктажем по безопасности',
    highlight3: 'Ночь в проверенном гест-хаусе (twin)',
    highlight4: 'Поддерживающий автомобиль на длинных трансферах',
    included1: 'Горный гид и согласованный доступ к монастырям',
    included2: 'Один завтрак, два обеда, один ужин (сет-меню)',
    included3: 'Ночёвка у партнёра',
    included4: 'Сборы за парки и охраняемые зоны',
    included5: 'Трансфер из Кишинёва к стартам троп',
    itineraryDay1Title: 'Водопады Сахарны и лесное кольцо',
    itineraryDay1Body: 'Выезд из Кишинёва, треккинг к водопадам, заселение, ужин.',
    itineraryDay2Title: 'Скальный монастырь Цыпова и возврат',
    itineraryDay2Body: 'Утренний трансфер, тропа по скале, обед, вечером Кишинёв.',
  },
  'weekend-nature-escape': {
    title: 'Уикенд на природе (Кодры)',
    location: 'Холмы центральной Молдовы',
    shortDescription:
      'Мягкий adventure-уикенд: гребни, истории о растениях, ферма и вечера у огня без экстрима.',
    description:
      'Для семей или небольших компаний. Умеренные тропы; у гидов аптечка и гибкий темп для детей.',
    highlight1: 'Смотровая на гребне с пикник-обедом',
    highlight2: 'Визит на ферму с сезонной дегустацией',
    highlight3: 'Опционально лёгкий каяк при уровне воды',
    highlight4: 'Ночь в глэмпинге или домиках партнёра',
    included1: 'Природный гид и план уикенда',
    included2: 'Два обеда, один ужин, один завтрак',
    included3: 'Ночёвка (семейные комнаты по запросу)',
    included4: 'Трансфер из Кишинёва со снеками',
    included5: 'Набор безопасности IZ Trip и запасной маршрут',
    included6: 'Короткая памятка по фото на телефон',
    itineraryDay1Title: 'В холмы и стол на ферме',
    itineraryDay1Body: 'Утро, хайк по гребню, ферма, ночёвка, ужин.',
    itineraryDay2Title: 'Лесное кольцо и возврат',
    itineraryDay2Body: 'Лёгкое утро, обед, опционально каяк, возвращение в Кишинёв.',
  },
}

const ro = structuredClone(uiEn)
ro.common.loadingApp = 'Se pregătește spațiul tău de călătorie…'
ro.common.close = 'Închide'
ro.language.switcherLabel = 'Limbă'
ro.nav.mainLabel = 'Principal'
ro.nav.home = 'Acasă'
ro.nav.trips = 'Excursii'
ro.nav.about = 'Despre'
ro.nav.signIn = 'Autentificare'
ro.nav.register = 'Creează cont'
ro.nav.signOut = 'Deconectare'
ro.nav.openMenu = 'Deschide meniul'
ro.auth.signIn = 'Autentificare'
ro.auth.signInDescription = 'Accesează excursiile salvate și solicitări de rezervare securizate.'
ro.auth.registerTitle = 'Creează contul IZ Trip'
ro.auth.registerDescription = 'Salvează preferințe și rezervă experiențe curatoriate în Moldova.'
ro.auth.email = 'E-mail'
ro.auth.password = 'Parolă'
ro.auth.confirmPassword = 'Confirmă parola'
ro.auth.displayName = 'Nume complet'
ro.auth.signingIn = 'Se conectează…'
ro.auth.registering = 'Se creează contul…'
ro.auth.createAccount = 'Creează cont'
ro.auth.signedIn = 'Bine ai revenit!'
ro.auth.registered = 'Cont creat — bine ai venit la IZ Trip!'
ro.auth.noAccount = 'Ești nou la IZ Trip?'
ro.auth.createOne = 'Creează un cont'
ro.auth.haveAccount = 'Ai deja cont?'
ro.auth.signInInstead = 'Autentifică-te'
ro.auth.validation.emailRequired = 'E-mailul este obligatoriu'
ro.auth.validation.emailInvalid = 'Introdu o adresă de e-mail validă'
ro.auth.validation.passwordRequired = 'Parola este obligatorie'
ro.auth.validation.passwordMin = 'Folosește cel puțin 8 caractere'
ro.auth.validation.displayNameRequired = 'Numele este obligatoriu'
ro.auth.validation.confirmPasswordRequired = 'Confirmă parola'
ro.auth.validation.passwordsMismatch = 'Parolele nu coincid'
ro.auth.errors.generic = 'A apărut o problemă. Încearcă din nou.'
ro.auth.errors.network = 'Eroare de rețea. Verifică conexiunea.'
ro.auth.errors.invalidEmail = 'Adresa de e-mail nu este validă.'
ro.auth.errors.userDisabled = 'Acest cont a fost dezactivat.'
ro.auth.errors.invalidCredentials = 'E-mail sau parolă incorectă.'
ro.auth.errors.emailInUse = 'Există deja un cont cu acest e-mail.'
ro.auth.errors.weakPassword = 'Parola este prea slabă. Folosește cel puțin 8 caractere.'
ro.auth.errors.tooManyRequests = 'Prea multe încercări. Așteaptă puțin.'
ro.home.hero.eyebrow = 'Călătorii curatoriate în Moldova'
ro.home.hero.title = 'Descoperă Moldova cu planificare calmă, de weekend, premium'
ro.home.hero.subtitle =
  'Rute alese pentru familii, prieteni și exploratori curioși — prețuri transparente, ghizi locali și solicitări de rezervare organizate.'
ro.home.hero.primaryCta = 'Vezi excursiile'
ro.home.hero.secondaryCta = 'Creează cont gratuit'
ro.home.featured.title = 'Experiențe recomandate în Moldova'
ro.home.featured.description = 'Începe cu rute iubite de oaspeți — crame, cetăți, chei și plimbări urbane.'
ro.home.featured.viewAll = 'Toate excursiile'
ro.home.how.title = 'Cum funcționează IZ Trip'
ro.home.how.description = 'Trei pași simpli de la inspirație la o solicitare confirmată.'
ro.home.how.step1.title = 'Răsfoiește excursii curatoriate'
ro.home.how.step1.body =
  'Filtrează după public și stil, compară ce e inclus și citește itinerare realiste.'
ro.home.how.step2.title = 'Alege date și detalii'
ro.home.how.step2.body =
  'Selectează o fereastră disponibilă și spune-ne cine călătorește — păstrăm solicitările structurate.'
ro.home.how.step3.title = 'Solicită și relaxează-te'
ro.home.how.step3.body =
  'Trimite o solicitare securizată. O salvăm și trimitem o notificare pe e-mail echipei ca să nu rămâi fără răspuns.'
ro.home.categories.title = 'Explorează după stil'
ro.home.categories.description = 'Intră în catalog dintr-o atingere — filtrele sunt simple pe mobil.'
ro.home.trust.title = 'De ce au încredere călătorii'
ro.home.trust.description = 'Proiectăm pentru claritate, siguranță și ospitalitate moldovenească autentică.'
ro.home.trust.point1 = 'Parteneri locali verificați pentru calitate și grijă față de oaspeți'
ro.home.trust.point2 = 'Dimensiuni de grup și ritm explicite în fiecare itinerar'
ro.home.trust.point3 = 'Conturi securizate ca solicitările să rămână legate de tine'
ro.home.finalCta.title = 'Pregătit pentru următorul weekend în Moldova?'
ro.home.finalCta.description = 'Creează cont pentru rezervare sau explorează excursiile — fără presiune.'
ro.home.finalCta.primary = 'Răsfoiește excursiile'
ro.home.finalCta.secondary = 'Autentificare'
ro.trips.page.title = 'Excursii curatoriate'
ro.trips.page.description = 'Filtrează după categorie și public ca să se potrivească stilului tău.'
ro.trips.backHome = 'Înapoi acasă'
ro.trips.filters.all = 'Toate'
ro.trips.filters.category = 'Categorie'
ro.trips.filters.audience = 'Public'
ro.trips.filters.drawerTitle = 'Filtrează excursiile'
ro.trips.filters.drawerDescription =
  'Alege categoria și publicul. Lista se actualizează când închizi acest panou.'
ro.trips.filters.openButton = 'Filtre'
ro.trips.categories.kids = 'Copii'
ro.trips.categories.family = 'Familie'
ro.trips.categories.adults = 'Adulți'
ro.trips.categories.nature = 'Natură'
ro.trips.categories.culture = 'Cultură'
ro.trips.categories.weekend = 'Weekend'
ro.trips.categories.educational = 'Educațional'
ro.trips.categories.custom = 'Personalizat'
ro.trips.audiences.kids = 'Copii'
ro.trips.audiences.family = 'Familie'
ro.trips.audiences.adults = 'Adulți'
ro.trips.audiences.mixed = 'Mixt'
ro.trips.audiences.group = 'Grup'
ro.trips.card.durationLabel_one = '{{count}} zi'
ro.trips.card.durationLabel_few = '{{count}} zile'
ro.trips.card.durationLabel_other = '{{count}} de zile'
ro.trips.card.nextDate = 'Următoarea dată'
ro.trips.card.noUpcomingDates = 'Solicită alte date'
ro.trips.card.from = 'De la'
ro.trips.card.viewDetails = 'Vezi detalii'
ro.trips.empty.title = 'Nicio excursie nu se potrivește filtrelor'
ro.trips.empty.description = 'Încearcă să lărgești filtrele pentru mai multe experiențe.'
ro.trips.empty.resetFilters = 'Resetează filtrele'
ro.trips.catalog = catalogRo
ro.tripDetails.backToTrips = 'Înapoi la excursii'
ro.tripDetails.priceFrom = 'Preț de la'
ro.tripDetails.groupSize = 'Grup: {{min}}–{{max}} persoane'
ro.tripDetails.bookCta = 'Rezervă / solicită excursia'
ro.tripDetails.descriptionTitle = 'Despre experiență'
ro.tripDetails.highlightsTitle = 'Puncte forte'
ro.tripDetails.includedTitle = 'Ce e inclus'
ro.tripDetails.itineraryTitle = 'Itinerar'
ro.tripDetails.availableDatesTitle = 'Date de plecare disponibile'
ro.booking.page.title = 'Solicită această excursie'
ro.booking.page.description =
  'Trimite o solicitare structurată — o salvăm în Firestore și trimitem un e-mail de notificare echipei.'
ro.booking.form.fullName = 'Nume complet'
ro.booking.form.email = 'E-mail'
ro.booking.form.phone = 'Telefon'
ro.booking.form.preferredDate = 'Data preferată'
ro.booking.form.peopleCount = 'Număr de persoane'
ro.booking.form.message = 'Mesaj (opțional)'
ro.booking.form.submit = 'Trimite solicitarea'
ro.booking.form.submitting = 'Se trimite…'
ro.booking.validation.fullNameRequired = 'Numele complet este obligatoriu'
ro.booking.validation.emailRequired = 'E-mailul este obligatoriu'
ro.booking.validation.emailInvalid = 'Introdu un e-mail valid'
ro.booking.validation.phoneRequired = 'Telefonul este obligatoriu (minim 6 caractere)'
ro.booking.validation.preferredDateRequired = 'Alege o dată'
ro.booking.validation.preferredDateInvalid = 'Alege una dintre datele listate'
ro.booking.validation.peopleCountInvalid = 'Introdu un număr valid de persoane'
ro.booking.validation.peopleCountMin = 'Cel puțin o persoană'
ro.booking.validation.peopleCountMax = 'Maximum {{max}} persoane pentru această excursie'
ro.booking.success.title = 'Solicitare primită'
ro.booking.success.description =
  'Am salvat solicitarea și am trimis un e-mail echipei. Cineva te va contacta în curând.'
ro.booking.success.viewTrip = 'Înapoi la detalii excursie'
ro.booking.success.exploreMore = 'Alte excursii'
ro.booking.successWithWarning.title = 'Solicitare primită'
ro.booking.successWithWarning.description =
  'Solicitarea ta a fost salvată. Nu am putut trimite automat e-mailul de notificare, dar echipa o poate vedea în sistem și te va contacta.'
ro.booking.successFullToast = 'Salvat și echipa a fost notificată pe e-mail.'
ro.booking.emailWarningToast =
  'Solicitare salvată. E-mailul de notificare nu a putut fi trimis — echipa poate vedea în continuare solicitarea.'
ro.booking.submitError = 'Nu am putut salva solicitarea. Verifică conexiunea și încearcă din nou.'
ro.about.page.title = 'Despre IZ Trip'
ro.about.page.lead = 'Planificare de weekend și cultură cu accent pe Moldova — premium, dar prietenos.'
ro.about.mission.title = 'Misiunea noastră'
ro.about.mission.body =
  'Ajutăm călătorii să descopere Moldova în siguranță și cu încredere — prin itinerare curatoriate și rezervări transparente.'
ro.about.local.title = 'Local prin design'
ro.about.local.body =
  'Rutele pornesc de la ghizi, pensiuni și crame pe care le cunoaștem personal. Creștem lent ca să păstrăm calitatea.'
ro.about.safety.title = 'Familii, copii și grupuri'
ro.about.safety.body =
  'Contează ritmul, pauzele și comunicarea clară. Fiecare listă arată mărimea realistă a grupului și ce să aștepți pe traseu sau în oraș.'
ro.about.cta = 'Răsfoiește excursiile'

const ru = structuredClone(uiEn)
ru.common.loadingApp = 'Готовим ваше рабочее пространство для путешествий…'
ru.common.close = 'Закрыть'
ru.language.switcherLabel = 'Язык'
ru.nav.mainLabel = 'Основное'
ru.nav.home = 'Главная'
ru.nav.trips = 'Туры'
ru.nav.about = 'О нас'
ru.nav.signIn = 'Войти'
ru.nav.register = 'Создать аккаунт'
ru.nav.signOut = 'Выйти'
ru.nav.openMenu = 'Открыть меню'
ru.auth.signIn = 'Вход'
ru.auth.signInDescription = 'Доступ к сохранённым турам и безопасным заявкам на бронирование.'
ru.auth.registerTitle = 'Создайте аккаунт IZ Trip'
ru.auth.registerDescription = 'Сохраняйте предпочтения и бронируйте кураторские поездки по Молдове.'
ru.auth.email = 'Эл. почта'
ru.auth.password = 'Пароль'
ru.auth.confirmPassword = 'Подтвердите пароль'
ru.auth.displayName = 'Полное имя'
ru.auth.signingIn = 'Входим…'
ru.auth.registering = 'Создаём аккаунт…'
ru.auth.createAccount = 'Создать аккаунт'
ru.auth.signedIn = 'С возвращением!'
ru.auth.registered = 'Аккаунт создан — добро пожаловать в IZ Trip!'
ru.auth.noAccount = 'Нет аккаунта IZ Trip?'
ru.auth.createOne = 'Создать аккаунт'
ru.auth.haveAccount = 'Уже есть аккаунт?'
ru.auth.signInInstead = 'Войти'
ru.auth.validation.emailRequired = 'Укажите эл. почту'
ru.auth.validation.emailInvalid = 'Введите корректный адрес'
ru.auth.validation.passwordRequired = 'Введите пароль'
ru.auth.validation.passwordMin = 'Не менее 8 символов'
ru.auth.validation.displayNameRequired = 'Укажите имя'
ru.auth.validation.confirmPasswordRequired = 'Подтвердите пароль'
ru.auth.validation.passwordsMismatch = 'Пароли не совпадают'
ru.auth.errors.generic = 'Что-то пошло не так. Попробуйте снова.'
ru.auth.errors.network = 'Ошибка сети. Проверьте подключение.'
ru.auth.errors.invalidEmail = 'Некорректный адрес эл. почты.'
ru.auth.errors.userDisabled = 'Аккаунт отключён.'
ru.auth.errors.invalidCredentials = 'Неверная почта или пароль.'
ru.auth.errors.emailInUse = 'Аккаунт с этой почтой уже существует.'
ru.auth.errors.weakPassword = 'Слабый пароль. Используйте не менее 8 символов.'
ru.auth.errors.tooManyRequests = 'Слишком много попыток. Подождите немного.'
ru.home.hero.eyebrow = 'Кураторские путешествия по Молдове'
ru.home.hero.title = 'Откройте Молдову со спокойным премиальным планированием выходных'
ru.home.hero.subtitle =
  'Маршруты для семей, друзей и любознательных путешественников — прозрачные цены, местные гиды и заявки без хаоса.'
ru.home.hero.primaryCta = 'Смотреть туры'
ru.home.hero.secondaryCta = 'Создать бесплатный аккаунт'
ru.home.featured.title = 'Избранные впечатления Молдовы'
ru.home.featured.description = 'Начните с любимых гостями маршрутов — винодельни, крепости, ущелья и городские прогулки.'
ru.home.featured.viewAll = 'Все туры'
ru.home.how.title = 'Как работает IZ Trip'
ru.home.how.description = 'Три простых шага от идеи до оформленной заявки.'
ru.home.how.step1.title = 'Выберите кураторский тур'
ru.home.how.step1.body =
  'Фильтруйте по аудитории и стилю, сравнивайте включённые услуги и читайте честные планы дня.'
ru.home.how.step2.title = 'Выберите даты и детали'
ru.home.how.step2.body =
  'Укажите доступное окно и состав группы — мы сохраняем заявку в структурированном виде.'
ru.home.how.step3.title = 'Отправьте заявку и расслабьтесь'
ru.home.how.step3.body =
  'Безопасная заявка: мы сохраняем её и отправляем команде уведомление по электронной почте, чтобы вы не остались без ответа.'
ru.home.categories.title = 'Исследуйте по стилю'
ru.home.categories.description = 'Перейдите в каталог одним нажатием — фильтры удобны на мобильном.'
ru.home.trust.title = 'Почему нам доверяют'
ru.home.trust.description = 'Мы проектируем ясность, безопасность и настоящее молдавское гостеприимство.'
ru.home.trust.point1 = 'Проверенные локальные партнёры и забота о гостях'
ru.home.trust.point2 = 'Реалистичный размер группы и темп в каждом маршруте'
ru.home.trust.point3 = 'Аккаунты, чтобы заявки оставались привязаны к вам'
ru.home.finalCta.title = 'Готовы спланировать следующие выходные в Молдове?'
ru.home.finalCta.description = 'Создайте аккаунт для брони или сначала изучите туры — без давления.'
ru.home.finalCta.primary = 'Смотреть туры'
ru.home.finalCta.secondary = 'Войти'
ru.trips.page.title = 'Кураторские туры'
ru.trips.page.description = 'Фильтруйте по категории и аудитории, чтобы совпало со стилем поездки.'
ru.trips.backHome = 'На главную'
ru.trips.filters.all = 'Все'
ru.trips.filters.category = 'Категория'
ru.trips.filters.audience = 'Аудитория'
ru.trips.filters.drawerTitle = 'Фильтр туров'
ru.trips.filters.drawerDescription =
  'Выберите категорию и аудиторию. Список обновится после закрытия панели.'
ru.trips.filters.openButton = 'Фильтры'
ru.trips.categories.kids = 'Дети'
ru.trips.categories.family = 'Семья'
ru.trips.categories.adults = 'Взрослые'
ru.trips.categories.nature = 'Природа'
ru.trips.categories.culture = 'Культура'
ru.trips.categories.weekend = 'Уикенд'
ru.trips.categories.educational = 'Образовательный'
ru.trips.categories.custom = 'Индивидуальный'
ru.trips.audiences.kids = 'Дети'
ru.trips.audiences.family = 'Семья'
ru.trips.audiences.adults = 'Взрослые'
ru.trips.audiences.mixed = 'Смешанная'
ru.trips.audiences.group = 'Группа'
ru.trips.card.durationLabel_one = '{{count}} день'
ru.trips.card.durationLabel_few = '{{count}} дня'
ru.trips.card.durationLabel_many = '{{count}} дней'
ru.trips.card.durationLabel_other = '{{count}} дней'
ru.trips.card.nextDate = 'Ближайшая дата'
ru.trips.card.noUpcomingDates = 'Запросить другие даты'
ru.trips.card.from = 'От'
ru.trips.card.viewDetails = 'Подробнее'
ru.trips.empty.title = 'Нет туров по этим фильтрам'
ru.trips.empty.description = 'Ослабьте фильтры, чтобы увидеть больше впечатлений.'
ru.trips.empty.resetFilters = 'Сбросить фильтры'
ru.trips.catalog = catalogRu
ru.tripDetails.backToTrips = 'Назад к турам'
ru.tripDetails.priceFrom = 'Цена от'
ru.tripDetails.groupSize = 'Размер группы: {{min}}–{{max}} гостей'
ru.tripDetails.bookCta = 'Забронировать / оставить заявку'
ru.tripDetails.descriptionTitle = 'Об этом опыте'
ru.tripDetails.highlightsTitle = 'Акценты'
ru.tripDetails.includedTitle = 'Включено'
ru.tripDetails.itineraryTitle = 'Маршрут'
ru.tripDetails.availableDatesTitle = 'Доступные даты выезда'
ru.booking.page.title = 'Заявка на этот тур'
ru.booking.page.description =
  'Отправьте структурированную заявку — мы сохраним её в Firestore и отправим команде письмо-уведомление.'
ru.booking.form.fullName = 'Полное имя'
ru.booking.form.email = 'Эл. почта'
ru.booking.form.phone = 'Телефон'
ru.booking.form.preferredDate = 'Предпочтительная дата'
ru.booking.form.peopleCount = 'Количество гостей'
ru.booking.form.message = 'Сообщение (необязательно)'
ru.booking.form.submit = 'Отправить заявку'
ru.booking.form.submitting = 'Отправляем…'
ru.booking.validation.fullNameRequired = 'Укажите полное имя'
ru.booking.validation.emailRequired = 'Укажите эл. почту'
ru.booking.validation.emailInvalid = 'Введите корректный адрес'
ru.booking.validation.phoneRequired = 'Телефон обязателен (не менее 6 символов)'
ru.booking.validation.preferredDateRequired = 'Выберите дату'
ru.booking.validation.preferredDateInvalid = 'Выберите одну из доступных дат'
ru.booking.validation.peopleCountInvalid = 'Введите корректное число гостей'
ru.booking.validation.peopleCountMin = 'Минимум один гость'
ru.booking.validation.peopleCountMax = 'Максимум {{max}} гостей для этого тура'
ru.booking.success.title = 'Заявка получена'
ru.booking.success.description =
  'Мы сохранили заявку и отправили письмо команде. С вами скоро свяжутся.'
ru.booking.success.viewTrip = 'Назад к туру'
ru.booking.success.exploreMore = 'Другие туры'
ru.booking.successWithWarning.title = 'Заявка получена'
ru.booking.successWithWarning.description =
  'Заявка сохранена. Автоматически отправить письмо-уведомление не удалось, но команда всё равно видит заявку в системе и свяжется с вами.'
ru.booking.successFullToast = 'Сохранено, команда уведомлена по электронной почте.'
ru.booking.emailWarningToast =
  'Заявка сохранена. Письмо-уведомление не отправилось — команда всё равно может видеть вашу заявку.'
ru.booking.submitError = 'Не удалось сохранить заявку. Проверьте соединение и попробуйте снова.'
ru.about.page.title = 'Об IZ Trip'
ru.about.page.lead = 'Планирование выходных и культуры с акцентом на Молдову — современно и по-дружески.'
ru.about.mission.title = 'Наша миссия'
ru.about.mission.body =
  'Помогаем путешественникам открывать Молдову безопасно и уверенно — через кураторские маршруты и прозрачное бронирование.'
ru.about.local.title = 'Локальность по замыслу'
ru.about.local.body =
  'Маршруты строятся на реальных гидах, гест-хаусах и погребах, которые мы знаем лично. Расти́м аккуратно, чтобы сохранить качество.'
ru.about.safety.title = 'Семьи, дети и группы'
ru.about.safety.body =
  'Важны темп, паузы и ясная коммуникация. В каждой карточке — реалистичный размер группы и ожидания на тропе или в городе.'
ru.about.cta = 'Смотреть кураторские туры'

writeFileSync(join(localesDir, 'en.json'), JSON.stringify(uiEn, null, 2))
writeFileSync(join(localesDir, 'ro.json'), JSON.stringify(ro, null, 2))
writeFileSync(join(localesDir, 'ru.json'), JSON.stringify(ru, null, 2))

console.log('Wrote en.json, ro.json, ru.json')
