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
    itineraryDay1Body: 'Morning pickup, ridge hike, farm visit, settle into camp/cabins, dinner.',
    itineraryDay2Title: 'Forest loop & return',
    itineraryDay2Body: 'Gentle morning loop, lunch, optional kayak, return to Chișinău.',
  }),
])

const uiEn = {
  brand: { name: 'IZ Trip' },
  trust: {
    heroNoPayment: 'No upfront payment',
    heroCuratedRoutes: 'Curated local routes',
    heroSmallGroups: 'Small groups',
    badge: {
      flexibleDates: 'Flexible dates',
      smallGroup: 'Small group',
      localGuide: 'Local guide',
    },
  },
  common: { loadingApp: 'Preparing your trip workspace…', close: 'Close' },
  language: {
    switcherLabel: 'Language',
    codes: { en: 'EN', ro: 'RO', ru: 'RU' },
  },
  theme: {
    switcherLabel: 'Theme',
    modes: {
      light: 'Light',
      dark: 'Dark',
      system: 'Auto',
    },
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
    marketingTitle: 'Plan Moldova trips without guesswork',
    marketingLead:
      'Create an account to send structured booking requests, keep trip context handy, and hear back from a real coordinator.',
    marketingPoint1: 'Curated catalog with realistic pacing and clear inclusions',
    marketingPoint2: 'Transparent guest counts and pricing cues on every trip card',
    marketingPoint3: 'Secure sign-in so your requests stay tied to you',
    marketingPoint4: 'Family, kids, and mixed-group options across the catalog',
    marketingFootnote: 'Independent, Moldova-focused travel desk — built for calm planning.',
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
      title: 'Weekend escapes, city walks, and countryside routes — planned with local care',
      subtitle:
        'Browse a Moldova-first catalog of small-group experiences with clear pricing, vetted partners, and booking requests that stay organized from day one.',
      primaryCta: 'Explore trips',
      secondaryCta: 'Create free account',
      previewBadge: 'Featured route',
      previewMeta: '{{duration}} · from {{price}}',
      badgeCurated: 'Local guides',
      badgeSmallGroups: 'Small groups',
      badgeFlexible: 'Flexible departures',
    },
    featured: {
      title: 'Featured Moldova experiences',
      description:
        'Three handpicked routes to start fast — wineries, fortresses, gorges, and city walks.',
      viewAll: 'View all trips',
    },
    how: {
      title: 'How IZ Trip works',
      description: 'Three calm steps from inspiration to a saved request our team can act on.',
      step1: {
        badge: '01',
        title: 'Choose a curated trip',
        body: 'Filter by travel style and who is going, compare inclusions, and read day-by-day context.',
      },
      step2: {
        badge: '02',
        title: 'Pick your date and group size',
        body: 'Select a listed departure window and tell us how many guests — we keep the request structured.',
      },
      step3: {
        badge: '03',
        title: 'Send the request — we confirm details',
        body: 'Submit a secure request from your account. We store it safely and notify our coordinators.',
      },
    },
    categories: {
      title: 'Explore by travel style',
      description: 'Jump into the catalog with one tap — filters stay thumb-friendly on mobile.',
      explore: 'See matching trips',
    },
    categoryDescriptions: {
      kids: 'Playful pacing, scavenger-style prompts, and guides who know families.',
      family: 'Room to roam, snack breaks, and honest notes on stairs and walking time.',
      adults: 'Wine galleries, city architecture, and grown-up storytelling.',
      nature: 'Forest trails, river lookouts, and moderate routes with safety briefings.',
      culture: 'Monasteries, fortresses, and village tables with context you can feel.',
      weekend: 'Two-day loops with cozy overnight stays and relaxed mornings.',
      educational: 'Hands-on context for schools and curious groups.',
      custom: 'Tell us your idea — we route it through the same structured request flow.',
    },
    trust: {
      title: 'Why travelers trust IZ Trip',
      description: 'We bias toward clarity: what you book, who it suits, and what happens next.',
      cards: {
        routes: {
          title: 'Curated local routes',
          body: 'Itineraries are built with guides and hosts we know — not anonymous copy-paste.',
        },
        pricing: {
          title: 'Clear pricing and group sizes',
          body: 'Every card shows realistic guest counts, duration, and a transparent “from” price.',
        },
        requests: {
          title: 'Secure account-based requests',
          body: 'Booking asks live in your account history so nothing gets lost in inboxes.',
        },
        family: {
          title: 'Family and kids-friendly options',
          body: 'Pacing, rest stops, and honest difficulty notes appear across the catalog.',
        },
      },
    },
    finalCta: {
      title: 'Ready to plan your next Moldova weekend?',
      description:
        'Explore the catalog first, or create an account when you are ready to request a date.',
      primary: 'Browse trips',
      secondary: 'Create account',
    },
  },
  trips: {
    page: {
      title: 'Trips crafted for Moldova weekends',
      description:
        'Filter by travel style and who is traveling — each route includes honest pacing notes, transparent “from” pricing, and upcoming departures.',
      kicker: 'Curated catalog',
      statTripsLabel: 'Curated trips',
      statTripsValue: '6 routes live',
      statRoutesLabel: 'Moldova coverage',
      statRoutesValue: 'North, Codrii, Chișinău, and Nistru viewpoints',
      statDatesLabel: 'Flexible departures',
      statDatesValue: 'Rolling weekend dates through the season',
    },
    backHome: 'Back to home',
    results: {
      available_one: '{{count}} trip available',
      available_other: '{{count}} trips available',
      activeFilters: 'Active filters',
    },
    sort: {
      label: 'Sort',
      priceAsc: 'Price: low to high',
      dateAsc: 'Next departure: earliest first',
      durationAsc: 'Duration: shortest first',
      chipDateAsc: 'Date',
      chipPriceAsc: 'Price',
      chipDurationAsc: 'Duration',
    },
    filters: {
      all: 'All',
      category: 'Category',
      audience: 'Audience',
      duration: 'Duration',
      durationAll: 'Any duration',
      duration1: '1 day',
      duration2: '2 days',
      duration3Plus: '3+ days',
      drawerTitle: 'Filter trips',
      drawerDescription:
        'Use the dropdowns for category, audience, duration, and sort. Trip count updates below; close when you are done.',
      openButton: 'Filters',
      resetAll: 'Clear filters',
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
      nextDeparture: 'Next departure',
      noUpcomingDates: 'Ask for new dates',
      from: 'From',
      exploreTrip: 'Explore trip',
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
    bookCta: 'Request this trip',
    nextDateLabel: 'Next departure',
    bookTrustNote: 'No payment is taken yet — we confirm availability and details with you first.',
    ctaTrustLine: 'No payment required now — we confirm everything with you before you pay.',
    noPaymentShort: 'No payment required now',
    confirmByEmail: "We'll confirm availability and details by email.",
    bookingCardEyebrow: 'Request this trip',
    bookingDurationLabel: 'Duration',
    bookingGroupLabel: 'Group size',
    moreDates: '+{{count}} more',
    factLabels: {
      duration: 'Duration',
      group: 'Group size',
      groupValue: '{{min}}–{{max}} guests',
      nextDeparture: 'Next departure',
      price: 'From',
    },
    metaDuration: '{{duration}}',
    metaGroup: '{{min}}–{{max}} guests',
    metaNextDate: 'Next: {{date}}',
    metaNextDateUnknown: 'Ask our team for new departures',
    metaPrice: 'From {{price}}',
    descriptionTitle: 'About this experience',
    highlightsTitle: 'Highlights',
    includedTitle: 'Included',
    itineraryTitle: 'Itinerary',
    availableDatesTitle: 'Available departure dates',
  },
  booking: {
    page: {
      title: 'Request your trip',
      description:
        'No payment is required now. Tell us who is traveling and when — we save your request securely and follow up personally.',
    },
    summaryTitle: 'Trip summary',
    summaryEyebrow: 'You are requesting',
    summary: {
      durationLabel: 'Duration',
      groupLabel: 'Group size',
      priceFromLabel: 'Price from',
      preferredDateLabel: 'Preferred departure',
    },
    nextSteps: {
      title: 'What happens next',
    },
    trustPoint1: 'We save your request securely to your account.',
    trustPoint2: 'Our team checks availability for your preferred date and group size.',
    trustPoint3: 'We contact you by email or phone with next steps and any questions.',
    trustPoint4: 'No payment is taken now — you confirm details with us before anything is charged.',
    afterSubmitTitle: 'What happens next',
    afterSubmitBody:
      'You will see an on-screen confirmation and our team monitors new requests in the booking workspace.',
    formCard: {
      eyebrow: 'Your details',
      title: 'Send your request',
      lead: 'We use this information to match you with the right coordinator.',
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
      tripLabel: 'Your trip',
      nextTitle: 'Suggested next steps',
      next1: 'Watch your inbox for a personal reply with availability notes.',
      next2: 'Review the trip page again if you want to adjust guest counts or dates.',
      next3: 'Browse the catalog while you wait — we can bundle nearby routes when it helps.',
      viewTrip: 'Back to trip details',
      exploreMore: 'Explore more trips',
      backHome: 'Back to home',
    },
    successWithWarning: {
      title: 'Request received',
      description:
        'Your request is saved. The automatic notification email did not go through, but our team can still see your request and will follow up with you directly.',
    },
    successFullToast: 'Booking saved and team notified by email.',
    emailWarningToast:
      'Booking saved. The notification email could not be sent — our team can still see your request.',
    submitError: 'Could not save your request. Check your connection and try again.',
  },
  about: {
    hero: {
      kicker: 'Moldova-first curated travel',
      title: 'About IZ Trip',
      subtitle:
        'We are an independent travel desk focused on Moldova — pairing small-group routes with transparent pricing, local partners, and organized booking requests.',
    },
    mission: {
      title: 'Our mission',
      body: 'Help travelers explore Moldova with confidence: clear itineraries, honest pacing notes, and a booking flow that respects your time.',
    },
    pillars: {
      title: 'What makes IZ Trip different',
      lead: 'Four principles shape every route card, host relationship, and follow-up workflow.',
    },
    pillar1: {
      title: 'Local-first planning',
      body: 'Guides, guesthouses, and cellars are relationships — not interchangeable vendors.',
    },
    pillar2: {
      title: 'Family and kids-friendly options',
      body: 'We label difficulty, stairs, and driving time so families can decide quickly.',
    },
    pillar3: {
      title: 'Transparent pricing cues',
      body: '“From” pricing, guest counts, and inclusions are visible before you request a date.',
    },
    pillar4: {
      title: 'Secure organized requests',
      body: 'Account-based requests stay structured for our coordinators and for your history.',
    },
    audience: {
      title: 'Who IZ Trip is for',
      lead: 'If you value calm planning and human follow-up, you are in the right place.',
      families: 'Families who want realistic pacing and snack-friendly days',
      kids: 'School groups and kids clubs that need clear supervision notes',
      friends: 'Friends and adults seeking wine, culture, and architecture depth',
      weekend: 'Weekend explorers chasing fresh air without extreme sport',
    },
    closing: {
      title: 'See the catalog, then request a date',
      body: 'No pressure to book instantly — explore trips, share them with your group, and reach out when the timing feels right.',
    },
    ctaPrimary: 'Browse curated trips',
    ctaSecondary: 'Create account',
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
    itineraryDay2Body:
      'Transfer dimineața, traseu pe stâncă, prânz, întoarcere spre seară la Chișinău.',
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
    itineraryDay1Body:
      'Ridicare dimineața, drumeție pe creastă, fermă, cazare la tabără/cabană, cină.',
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
ro.theme.switcherLabel = 'Temă'
ro.theme.modes.light = 'Luminos'
ro.theme.modes.dark = 'Întunecat'
ro.theme.modes.system = 'Auto'
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
ro.auth.marketingTitle = 'Planifică în Moldova fără improvizații'
ro.auth.marketingLead =
  'Creează un cont ca să trimiți solicitări structurate, să păstrezi contextul excursiei și să primești răspuns de la un coordonator real.'
ro.auth.marketingPoint1 = 'Catalog curatoriat cu ritm realist și ce e inclus pe înțeles'
ro.auth.marketingPoint2 = 'Număr de oaspeți și indicii de preț transparente pe fiecare card'
ro.auth.marketingPoint3 = 'Autentificare securizată ca solicitările să rămână la tine în cont'
ro.auth.marketingPoint4 = 'Opțiuni pentru familii, copii și grupuri mixte în tot catalogul'
ro.auth.marketingFootnote = 'Desk independent, axat pe Moldova — gândit pentru planificare calmă.'
ro.home.hero.eyebrow = 'Călătorii curatoriate în Moldova'
ro.home.hero.title = 'Escapade de weekend, plimbări urbane și rute la țară — cu grijă locală'
ro.home.hero.subtitle =
  'Răsfoiește un catalog axat pe Moldova: grupuri mici, parteneri verificați, prețuri clare și solicitări de rezervare care rămân organizate.'
ro.home.hero.primaryCta = 'Vezi excursiile'
ro.home.hero.secondaryCta = 'Creează cont gratuit'
ro.trust.heroNoPayment = 'Fără plată în avans'
ro.trust.heroCuratedRoutes = 'Trasee locale curatoriate'
ro.trust.heroSmallGroups = 'Grupuri mici'
ro.trust.badge.flexibleDates = 'Date flexibile'
ro.trust.badge.smallGroup = 'Grup mic'
ro.trust.badge.localGuide = 'Ghid local'
ro.home.hero.previewBadge = 'Rută recomandată'
ro.home.hero.previewMeta = '{{duration}} · de la {{price}}'
ro.home.hero.badgeCurated = 'Ghiduri locale'
ro.home.hero.badgeSmallGroups = 'Grupuri mici'
ro.home.hero.badgeFlexible = 'Plecări flexibile'
ro.home.featured.title = 'Experiențe recomandate în Moldova'
ro.home.featured.description =
  'Trei rute alese ca să începi rapid — crame, cetăți, chei și plimbări urbane.'
ro.home.featured.viewAll = 'Toate excursiile'
ro.home.how.title = 'Cum funcționează IZ Trip'
ro.home.how.description =
  'Trei pași calmi de la inspirație la o solicitare pe care echipa o poate prelua.'
ro.home.how.step1.title = 'Alege o excursie curatoriată'
ro.home.how.step1.body =
  'Filtrează după stil și cine călătorește, compară ce e inclus și citește contextul zilei.'
ro.home.how.step2.title = 'Alege data și mărimea grupului'
ro.home.how.step2.body =
  'Selectează o fereastră listată și spune câți oaspeți sunteți — păstrăm solicitarea structurată.'
ro.home.how.step3.title = 'Trimite solicitarea — noi confirmăm detaliile'
ro.home.how.step3.body =
  'Trimite din cont o solicitare securizată. O stocăm în siguranță și notificăm coordonatorii.'
ro.home.categories.title = 'Explorează după stil'
ro.home.categories.description =
  'Intră în catalog dintr-o atingere — filtrele sunt prietenoase pe mobil.'
ro.home.categories.explore = 'Vezi excursiile potrivite'
ro.home.categoryDescriptions.kids =
  'Ritm jucăuș, indicii tip „vânătoare de indicii” și ghizi obișnuiți cu familii.'
ro.home.categoryDescriptions.family =
  'Loc de mișcare, gustări și note sincere despre trepte și mers pe jos.'
ro.home.categoryDescriptions.adults =
  'Galerii de vin, arhitectură urbană și povești pentru public matur.'
ro.home.categoryDescriptions.nature =
  'Poteci forestiere, belvedere la râu și trasee moderate cu briefing de siguranță.'
ro.home.categoryDescriptions.culture =
  'Mănăstiri, cetăți și mese la țară cu context pe care îl simți.'
ro.home.categoryDescriptions.weekend =
  'Bucle de două zile cu cazare confortabilă și dimineți liniștite.'
ro.home.categoryDescriptions.educational = 'Context practic pentru școli și grupuri curioase.'
ro.home.categoryDescriptions.custom =
  'Spune-ne ideea — o trecem prin același flux structurat de solicitare.'
ro.home.trust.title = 'De ce au încredere călătorii'
ro.home.trust.description =
  'Ne orientăm spre claritate: ce rezervi, cui i se potrivește și ce urmează.'
ro.home.trust.cards.routes.title = 'Trasee locale curatoriate'
ro.home.trust.cards.routes.body =
  'Itinerare lucrate cu ghizi și gazde cunoscute — nu texte anonime.'
ro.home.trust.cards.pricing.title = 'Prețuri și grupuri clare'
ro.home.trust.cards.pricing.body =
  'Fiecare card arată durata, numărul de oaspeți și un „de la” onest.'
ro.home.trust.cards.requests.title = 'Solicitări pe cont, organizate'
ro.home.trust.cards.requests.body =
  'Cererile rămân în istoricul contului tău — nu se pierd în inboxuri.'
ro.home.trust.cards.family.title = 'Opțiuni prietenoase pentru familii'
ro.home.trust.cards.family.body = 'Pauze, ritm și note sincere despre efort apar în tot catalogul.'
ro.home.finalCta.title = 'Pregătit pentru următorul weekend în Moldova?'
ro.home.finalCta.description =
  'Explorează catalogul mai întâi sau creează un cont când ești gata să ceri o dată.'
ro.home.finalCta.primary = 'Răsfoiește excursiile'
ro.home.finalCta.secondary = 'Creează cont'
ro.trips.page.title = 'Excursii gândite pentru weekenduri în Moldova'
ro.trips.page.description =
  'Filtrează după stil și public — fiecare rută include note sincere de ritm, preț „de la” și plecări viitoare.'
ro.trips.page.kicker = 'Catalog curatoriat'
ro.trips.page.statTripsLabel = 'Excursii curatoriate'
ro.trips.page.statTripsValue = '6 rute disponibile'
ro.trips.page.statRoutesLabel = 'Acoperire în Moldova'
ro.trips.page.statRoutesValue = 'Nord, Codrii, Chișinău și belvedere Nistru'
ro.trips.page.statDatesLabel = 'Plecări flexibile'
ro.trips.page.statDatesValue = 'Date de weekend pe tot sezonul'
ro.trips.backHome = 'Înapoi acasă'
ro.trips.results.available_one = '{{count}} excursie disponibilă'
ro.trips.results.available_few = '{{count}} excursii disponibile'
ro.trips.results.available_other = '{{count}} de excursii disponibile'
ro.trips.results.activeFilters = 'Filtre active'
ro.trips.sort.label = 'Sortare'
ro.trips.sort.priceAsc = 'Preț: de la mic la mare'
ro.trips.sort.dateAsc = 'Următoarea plecare: cea mai apropiată'
ro.trips.sort.durationAsc = 'Durată: cea mai scurtă'
ro.trips.sort.chipDateAsc = 'Dată'
ro.trips.sort.chipPriceAsc = 'Preț'
ro.trips.sort.chipDurationAsc = 'Durată'
ro.trips.filters.all = 'Toate'
ro.trips.filters.category = 'Categorie'
ro.trips.filters.audience = 'Public'
ro.trips.filters.drawerTitle = 'Filtrează excursiile'
ro.trips.filters.drawerDescription =
  'Folosește listele pentru categorie, public, durată și sortare. Numărul excursiilor apare dedesubt; închide panoul când ai terminat.'
ro.trips.filters.openButton = 'Filtre'
ro.trips.filters.resetAll = 'Șterge filtrele'
ro.trips.filters.duration = 'Durată'
ro.trips.filters.durationAll = 'Orice durată'
ro.trips.filters.duration1 = '1 zi'
ro.trips.filters.duration2 = '2 zile'
ro.trips.filters.duration3Plus = '3+ zile'
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
ro.trips.card.nextDeparture = 'Următoarea plecare'
ro.trips.card.noUpcomingDates = 'Solicită alte date'
ro.trips.card.from = 'De la'
ro.trips.card.exploreTrip = 'Explorează excursia'
ro.trips.empty.title = 'Nicio excursie nu se potrivește filtrelor'
ro.trips.empty.description = 'Încearcă să lărgești filtrele pentru mai multe experiențe.'
ro.trips.empty.resetFilters = 'Resetează filtrele'
ro.trips.catalog = catalogRo
ro.tripDetails.backToTrips = 'Înapoi la excursii'
ro.tripDetails.priceFrom = 'Preț de la'
ro.tripDetails.groupSize = 'Grup: {{min}}–{{max}} persoane'
ro.tripDetails.bookCta = 'Solicită această excursie'
ro.tripDetails.nextDateLabel = 'Următoarea plecare'
ro.tripDetails.bookTrustNote =
  'Nu se încasează plata încă — confirmăm disponibilitatea și detaliile cu tine mai întâi.'
ro.tripDetails.ctaTrustLine =
  'Fără plată acum — confirmăm totul cu tine înainte de orice plată.'
ro.tripDetails.noPaymentShort = 'Fără plată acum'
ro.tripDetails.confirmByEmail = 'Confirmăm disponibilitatea și detaliile pe email.'
ro.tripDetails.bookingCardEyebrow = 'Solicită această excursie'
ro.tripDetails.bookingDurationLabel = 'Durată'
ro.tripDetails.bookingGroupLabel = 'Mărimea grupului'
ro.tripDetails.moreDates = '+{{count}} în plus'
ro.tripDetails.factLabels.duration = 'Durată'
ro.tripDetails.factLabels.group = 'Grup'
ro.tripDetails.factLabels.groupValue = '{{min}}–{{max}} persoane'
ro.tripDetails.factLabels.nextDeparture = 'Următoarea plecare'
ro.tripDetails.factLabels.price = 'De la'
ro.tripDetails.metaDuration = '{{duration}}'
ro.tripDetails.metaGroup = '{{min}}–{{max}} persoane'
ro.tripDetails.metaNextDate = 'Următoarea: {{date}}'
ro.tripDetails.metaNextDateUnknown = 'Cere echipei noi plecări'
ro.tripDetails.metaPrice = 'De la {{price}}'
ro.tripDetails.descriptionTitle = 'Despre experiență'
ro.tripDetails.highlightsTitle = 'Puncte forte'
ro.tripDetails.includedTitle = 'Ce e inclus'
ro.tripDetails.itineraryTitle = 'Itinerar'
ro.tripDetails.availableDatesTitle = 'Date de plecare disponibile'
ro.booking.page.title = 'Solicită excursia'
ro.booking.page.description =
  'Nu este nevoie de plată acum. Spune-ne cine călătorește și când — salvăm solicitarea în siguranță și revenim personal.'
ro.booking.summaryTitle = 'Rezumat excursie'
ro.booking.summaryEyebrow = 'Cerere pentru'
ro.booking.summary.durationLabel = 'Durată'
ro.booking.summary.groupLabel = 'Mărimea grupului'
ro.booking.summary.priceFromLabel = 'Preț de la'
ro.booking.summary.preferredDateLabel = 'Plecare preferată'
ro.booking.nextSteps.title = 'Ce urmează'
ro.booking.trustPoint1 = 'Salvăm solicitarea în siguranță în contul tău.'
ro.booking.trustPoint2 = 'Echipa verifică disponibilitatea pentru data aleasă și numărul de persoane.'
ro.booking.trustPoint3 = 'Te contactăm pe e-mail sau telefon cu pașii următori și întrebări, dacă e nevoie.'
ro.booking.trustPoint4 = 'Nu se ia plată acum — confirmăm totul împreună înainte de orice plată.'
ro.booking.afterSubmitTitle = 'Ce urmează'
ro.booking.afterSubmitBody =
  'Vei vedea o confirmare pe ecran, iar echipa urmărește solicitările noi în spațiul de rezervări.'
ro.booking.formCard.eyebrow = 'Detaliile tale'
ro.booking.formCard.title = 'Trimite solicitarea'
ro.booking.formCard.lead =
  'Folosim aceste informații ca să te potrivim cu coordonatorul potrivit.'
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
ro.booking.success.tripLabel = 'Excursia ta'
ro.booking.success.nextTitle = 'Pași următori sugerați'
ro.booking.success.next1 =
  'Urmărește inboxul pentru un răspuns personal cu note de disponibilitate.'
ro.booking.success.next2 =
  'Revino la pagina excursiei dacă vrei să ajustezi numărul de persoane sau data.'
ro.booking.success.next3 = 'Răsfoiește catalogul așteptând — putem lega rute apropiate când ajută.'
ro.booking.success.viewTrip = 'Înapoi la detalii excursie'
ro.booking.success.exploreMore = 'Alte excursii'
ro.booking.success.backHome = 'Înapoi acasă'
ro.booking.successWithWarning.title = 'Solicitare primită'
ro.booking.successWithWarning.description =
  'Solicitarea este salvată. E-mailul automat de notificare nu s-a trimis, dar echipa poate vedea solicitarea și te va contacta direct.'
ro.booking.successFullToast = 'Salvat și echipa a fost notificată pe e-mail.'
ro.booking.emailWarningToast =
  'Solicitare salvată. E-mailul de notificare nu a putut fi trimis — echipa poate vedea în continuare solicitarea.'
ro.booking.submitError = 'Nu am putut salva solicitarea. Verifică conexiunea și încearcă din nou.'
ro.about.hero.kicker = 'Călătorii curatoriate, axate pe Moldova'
ro.about.hero.title = 'Despre IZ Trip'
ro.about.hero.subtitle =
  'Suntem un desk independent axat pe Moldova — grupuri mici, parteneri locali, prețuri clare și solicitări de rezervare organizate.'
ro.about.mission.title = 'Misiunea noastră'
ro.about.mission.body =
  'Ajutăm călătorii să exploreze Moldova cu încredere: itinerare clare, note sincere despre ritm și un flux de solicitare care îți respectă timpul.'
ro.about.pillars.title = 'Ce face diferit IZ Trip'
ro.about.pillars.lead =
  'Patru principii ghidează fiecare card de rută, relația cu gazdele și pașii de urmărire.'
ro.about.pillar1.title = 'Planificare locală mai întâi'
ro.about.pillar1.body =
  'Ghidurile, pensiunile și cramele sunt relații — nu furnizori interschimbabili.'
ro.about.pillar2.title = 'Opțiuni pentru familii și copii'
ro.about.pillar2.body =
  'Notăm dificultatea, scările și timpul la volan ca familiile să decidă repede.'
ro.about.pillar3.title = 'Indicii transparente de preț'
ro.about.pillar3.body =
  'Prețul „de la”, numărul de oaspeți și ce e inclus sunt vizibile înainte să ceri o dată.'
ro.about.pillar4.title = 'Solicitări sigure și structurate'
ro.about.pillar4.body =
  'Cererile pe cont rămân structurate pentru coordonatori și pentru istoricul tău.'
ro.about.audience.title = 'Pentru cine este IZ Trip'
ro.about.audience.lead =
  'Dacă îți place planificarea calmă și urmărirea umană, ești în locul potrivit.'
ro.about.audience.families = 'Familii care vor ritm realist și zile prietenoase cu gustări'
ro.about.audience.kids =
  'Grupuri școlare și cluburi pentru copii care au nevoie de note clare de supraveghere'
ro.about.audience.friends =
  'Prieteni și adulți care caută vin, cultură și arhitectură cu profunzime'
ro.about.audience.weekend = 'Exploratori de weekend care vor aer proaspăt fără sport extrem'
ro.about.closing.title = 'Vezi catalogul, apoi cere o dată'
ro.about.closing.body =
  'Nu trebuie să rezervi instant — explorează excursiile, împărtășește-le grupului și revino când ești gata.'
ro.about.ctaPrimary = 'Răsfoiește excursiile'
ro.about.ctaSecondary = 'Creează cont'

const ru = structuredClone(uiEn)
ru.common.loadingApp = 'Готовим ваше рабочее пространство для путешествий…'
ru.common.close = 'Закрыть'
ru.language.switcherLabel = 'Язык'
ru.theme.switcherLabel = 'Тема'
ru.theme.modes.light = 'Светлая'
ru.theme.modes.dark = 'Тёмная'
ru.theme.modes.system = 'Авто'
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
ru.auth.marketingTitle = 'Планируйте Молдову без догадок'
ru.auth.marketingLead =
  'Создайте аккаунт, чтобы отправлять структурированные заявки, хранить контекст тура и получать ответ координатора.'
ru.auth.marketingPoint1 = 'Каталог с реалистичным темпом и понятными включениями'
ru.auth.marketingPoint2 = 'Прозрачные подсказки по числу гостей и цене на каждой карточке'
ru.auth.marketingPoint3 = 'Безопасный вход, чтобы заявки оставались в вашем аккаунте'
ru.auth.marketingPoint4 = 'Семьи, дети и смешанные группы — по всему каталогу'
ru.auth.marketingFootnote =
  'Независимый деск, сфокусированный на Молдове — для спокойного планирования.'
ru.home.hero.eyebrow = 'Кураторские путешествия по Молдове'
ru.home.hero.title = 'Уикенды, городские прогулки и загородные маршруты — с местной заботой'
ru.home.hero.subtitle =
  'Каталог для Молдовы: небольшие группы, проверенные партнёры, ясные цены и заявки, которые остаются в порядке с первого дня.'
ru.home.hero.primaryCta = 'Смотреть туры'
ru.home.hero.secondaryCta = 'Создать бесплатный аккаунт'
ru.trust.heroNoPayment = 'Без предоплаты'
ru.trust.heroCuratedRoutes = 'Кураторские локальные маршруты'
ru.trust.heroSmallGroups = 'Небольшие группы'
ru.trust.badge.flexibleDates = 'Гибкие даты'
ru.trust.badge.smallGroup = 'Небольшая группа'
ru.trust.badge.localGuide = 'Местный гид'
ru.home.hero.previewBadge = 'Рекомендованный маршрут'
ru.home.hero.previewMeta = '{{duration}} · от {{price}}'
ru.home.hero.badgeCurated = 'Местные гиды'
ru.home.hero.badgeSmallGroups = 'Небольшие группы'
ru.home.hero.badgeFlexible = 'Гибкие даты выезда'
ru.home.featured.title = 'Избранные впечатления Молдовы'
ru.home.featured.description =
  'Три маршрута, чтобы начать быстро — винодельни, крепости, лес и город.'
ru.home.featured.viewAll = 'Все туры'
ru.home.how.title = 'Как работает IZ Trip'
ru.home.how.description = 'Три спокойных шага от идеи до заявки, которую команда может обработать.'
ru.home.how.step1.title = 'Выберите кураторский тур'
ru.home.how.step1.body =
  'Фильтруйте по стилю и составу группы, сравнивайте включения и читайте контекст дня.'
ru.home.how.step2.title = 'Выберите дату и размер группы'
ru.home.how.step2.body =
  'Укажите доступное окно из списка и число гостей — заявка остаётся структурированной.'
ru.home.how.step3.title = 'Отправьте заявку — мы подтвердим детали'
ru.home.how.step3.body =
  'Отправьте заявку из аккаунта. Мы сохраняем её безопасно и уведомляем координаторов.'
ru.home.categories.title = 'Исследуйте по стилю'
ru.home.categories.description = 'Перейдите в каталог одним нажатием — фильтры удобны на мобильном.'
ru.home.categories.explore = 'Смотреть подходящие туры'
ru.home.categoryDescriptions.kids = 'Игровой темп, задания-наблюдения и гиды, привыкшие к семьям.'
ru.home.categoryDescriptions.family =
  'Простор для прогулок, перекусы и честные заметки про лестницы и ходьбу.'
ru.home.categoryDescriptions.adults = 'Винные галереи, городская архитектура и взрослые истории.'
ru.home.categoryDescriptions.nature =
  'Лесные тропы, виды на реку и умеренные маршруты с инструктажем.'
ru.home.categoryDescriptions.culture =
  'Монастыри, крепости и деревенские столы с ощутимым контекстом.'
ru.home.categoryDescriptions.weekend = 'Двухдневные петли с уютной ночёвкой и неспешными утрами.'
ru.home.categoryDescriptions.educational = 'Практический контекст для школ и любознательных групп.'
ru.home.categoryDescriptions.custom =
  'Расскажите идею — проведём через тот же структурированный поток заявки.'
ru.home.trust.title = 'Почему нам доверяют'
ru.home.trust.description = 'Мы за ясность: что вы бронируете, кому подходит и что будет дальше.'
ru.home.trust.cards.routes.title = 'Локальные маршруты с отбором'
ru.home.trust.cards.routes.body =
  'Планы строятся с гидами и хозяевами, которых мы знаем — не копипаст.'
ru.home.trust.cards.pricing.title = 'Понятные цены и группы'
ru.home.trust.cards.pricing.body = 'На карточке видны длительность, число гостей и честное «от».'
ru.home.trust.cards.requests.title = 'Заявки из аккаунта, по порядку'
ru.home.trust.cards.requests.body = 'История заявок остаётся в аккаунте — не теряется в почте.'
ru.home.trust.cards.family.title = 'Удобно для семей'
ru.home.trust.cards.family.body = 'Паузы, темп и заметки о нагрузке — по всему каталогу.'
ru.home.finalCta.title = 'Готовы спланировать следующие выходные в Молдове?'
ru.home.finalCta.description =
  'Сначала изучите каталог или создайте аккаунт, когда будете готовы запросить дату.'
ru.home.finalCta.primary = 'Смотреть туры'
ru.home.finalCta.secondary = 'Создать аккаунт'
ru.trips.page.title = 'Туры для молдавских уикендов'
ru.trips.page.description =
  'Фильтруйте по стилю и составу группы — у каждого маршрута честные заметки о темпе, цене «от» и ближайших датах.'
ru.trips.page.kicker = 'Кураторский каталог'
ru.trips.page.statTripsLabel = 'Кураторские туры'
ru.trips.page.statTripsValue = '6 маршрутов в ленте'
ru.trips.page.statRoutesLabel = 'Покрытие Молдовы'
ru.trips.page.statRoutesValue = 'Север, Кодры, Кишинёв и виды на Днестр'
ru.trips.page.statDatesLabel = 'Гибкие выезды'
ru.trips.page.statDatesValue = 'Уикенд-даты на весь сезон'
ru.trips.backHome = 'На главную'
ru.trips.results.available_one = '{{count}} тур доступен'
ru.trips.results.available_few = '{{count}} тура доступно'
ru.trips.results.available_many = '{{count}} туров доступно'
ru.trips.results.available_other = '{{count}} туров доступно'
ru.trips.results.activeFilters = 'Активные фильтры'
ru.trips.sort.label = 'Сортировка'
ru.trips.sort.priceAsc = 'Цена: по возрастанию'
ru.trips.sort.dateAsc = 'Ближайший выезд: сначала раньше'
ru.trips.sort.durationAsc = 'Длительность: сначала короче'
ru.trips.sort.chipDateAsc = 'Дата'
ru.trips.sort.chipPriceAsc = 'Цена'
ru.trips.sort.chipDurationAsc = 'Длительность'
ru.trips.filters.all = 'Все'
ru.trips.filters.category = 'Категория'
ru.trips.filters.audience = 'Аудитория'
ru.trips.filters.drawerTitle = 'Фильтр туров'
ru.trips.filters.drawerDescription =
  'Выберите категорию, аудиторию, длительность и сортировку в списках. Число туров ниже; закройте панель, когда закончите.'
ru.trips.filters.openButton = 'Фильтры'
ru.trips.filters.resetAll = 'Сбросить фильтры'
ru.trips.filters.duration = 'Длительность'
ru.trips.filters.durationAll = 'Любая длительность'
ru.trips.filters.duration1 = '1 день'
ru.trips.filters.duration2 = '2 дня'
ru.trips.filters.duration3Plus = '3+ дня'
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
ru.trips.card.nextDeparture = 'Ближайший выезд'
ru.trips.card.noUpcomingDates = 'Запросить другие даты'
ru.trips.card.from = 'От'
ru.trips.card.exploreTrip = 'Смотреть тур'
ru.trips.empty.title = 'Нет туров по этим фильтрам'
ru.trips.empty.description = 'Ослабьте фильтры, чтобы увидеть больше впечатлений.'
ru.trips.empty.resetFilters = 'Сбросить фильтры'
ru.trips.catalog = catalogRu
ru.tripDetails.backToTrips = 'Назад к турам'
ru.tripDetails.priceFrom = 'Цена от'
ru.tripDetails.groupSize = 'Размер группы: {{min}}–{{max}} гостей'
ru.tripDetails.bookCta = 'Оставить заявку на тур'
ru.tripDetails.nextDateLabel = 'Ближайший выезд'
ru.tripDetails.bookTrustNote =
  'Оплата пока не списывается — сначала мы подтверждаем доступность и детали с вами.'
ru.tripDetails.ctaTrustLine =
  'Оплата сейчас не нужна — мы подтверждаем всё с вами до любой оплаты.'
ru.tripDetails.noPaymentShort = 'Оплата сейчас не требуется'
ru.tripDetails.confirmByEmail = 'Мы подтвердим доступность и детали по email.'
ru.tripDetails.bookingCardEyebrow = 'Заявка на этот тур'
ru.tripDetails.bookingDurationLabel = 'Длительность'
ru.tripDetails.bookingGroupLabel = 'Размер группы'
ru.tripDetails.moreDates = 'Ещё {{count}}'
ru.tripDetails.factLabels.duration = 'Длительность'
ru.tripDetails.factLabels.group = 'Группа'
ru.tripDetails.factLabels.groupValue = '{{min}}–{{max}} гостей'
ru.tripDetails.factLabels.nextDeparture = 'Ближайший выезд'
ru.tripDetails.factLabels.price = 'От'
ru.tripDetails.metaDuration = '{{duration}}'
ru.tripDetails.metaGroup = '{{min}}–{{max}} гостей'
ru.tripDetails.metaNextDate = 'Ближайший: {{date}}'
ru.tripDetails.metaNextDateUnknown = 'Запросите новые даты у команды'
ru.tripDetails.metaPrice = 'От {{price}}'
ru.tripDetails.descriptionTitle = 'Об этом опыте'
ru.tripDetails.highlightsTitle = 'Акценты'
ru.tripDetails.includedTitle = 'Включено'
ru.tripDetails.itineraryTitle = 'Маршрут'
ru.tripDetails.availableDatesTitle = 'Доступные даты выезда'
ru.booking.page.title = 'Оставьте заявку на тур'
ru.booking.page.description =
  'Оплата сейчас не нужна. Расскажите, кто едет и когда — мы сохраним заявку безопасно и свяжемся с вами лично.'
ru.booking.summaryTitle = 'Кратко о туре'
ru.booking.summaryEyebrow = 'Заявка на'
ru.booking.summary.durationLabel = 'Длительность'
ru.booking.summary.groupLabel = 'Размер группы'
ru.booking.summary.priceFromLabel = 'Цена от'
ru.booking.summary.preferredDateLabel = 'Предпочтительный выезд'
ru.booking.nextSteps.title = 'Что будет дальше'
ru.booking.trustPoint1 = 'Мы надёжно сохраняем заявку в вашем аккаунте.'
ru.booking.trustPoint2 = 'Команда проверяет доступность на выбранную дату и число гостей.'
ru.booking.trustPoint3 =
  'Мы свяжемся с вами по email или телефону с следующими шагами и вопросами, если нужно.'
ru.booking.trustPoint4 = 'Оплата не списывается сейчас — сначала мы вместе подтверждаем детали.'
ru.booking.afterSubmitTitle = 'Что дальше'
ru.booking.afterSubmitBody =
  'Вы увидите подтверждение на экране, а команда отслеживает новые заявки в рабочем пространстве.'
ru.booking.formCard.eyebrow = 'Ваши данные'
ru.booking.formCard.title = 'Отправить заявку'
ru.booking.formCard.lead =
  'Мы используем эти данные, чтобы передать заявку нужному координатору.'
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
ru.booking.success.tripLabel = 'Ваш тур'
ru.booking.success.nextTitle = 'Что сделать дальше'
ru.booking.success.next1 = 'Следите за почтой — придёт персональный ответ с деталями доступности.'
ru.booking.success.next2 =
  'При необходимости снова откройте страницу тура, чтобы изменить даты или число гостей.'
ru.booking.success.next3 =
  'Пока ждёте, просмотрите каталог — можем связать соседние маршруты, если это удобно.'
ru.booking.success.viewTrip = 'Назад к туру'
ru.booking.success.exploreMore = 'Другие туры'
ru.booking.success.backHome = 'На главную'
ru.booking.successWithWarning.title = 'Заявка получена'
ru.booking.successWithWarning.description =
  'Заявка сохранена. Автоматическое письмо-уведомление не отправилось, но команда видит заявку и свяжется с вами напрямую.'
ru.booking.successFullToast = 'Сохранено, команда уведомлена по электронной почте.'
ru.booking.emailWarningToast =
  'Заявка сохранена. Письмо-уведомление не отправилось — команда всё равно может видеть вашу заявку.'
ru.booking.submitError = 'Не удалось сохранить заявку. Проверьте соединение и попробуйте снова.'
ru.about.hero.kicker = 'Кураторские поездки с фокусом на Молдову'
ru.about.hero.title = 'Об IZ Trip'
ru.about.hero.subtitle =
  'Мы независимый travel-деск для Молдовы: небольшие группы, локальные партнёры, ясные цены и организованные заявки.'
ru.about.mission.title = 'Наша миссия'
ru.about.mission.body =
  'Помогаем путешественникам открывать Молдову уверенно: понятные маршруты, честные заметки о темпе и уважение к вашему времени.'
ru.about.pillars.title = 'Чем IZ Trip отличается'
ru.about.pillars.lead =
  'Четыре принципа задают тон каждой карточке, отношениям с хостами и сопровождению заявок.'
ru.about.pillar1.title = 'Сначала локальное планирование'
ru.about.pillar1.body =
  'Гиды, гест-хаусы и погреба — это отношения, а не взаимозаменяемые подрядчики.'
ru.about.pillar2.title = 'Варианты для семей и детей'
ru.about.pillar2.body =
  'Мы отмечаем сложность, лестницы и время в дороге, чтобы семьи решали быстрее.'
ru.about.pillar3.title = 'Прозрачные ценовые ориентиры'
ru.about.pillar3.body = '«От», число гостей и включения видны до запроса даты.'
ru.about.pillar4.title = 'Безопасные структурированные заявки'
ru.about.pillar4.body =
  'Заявки в аккаунте остаются структурированными для координаторов и вашей истории.'
ru.about.audience.title = 'Для кого IZ Trip'
ru.about.audience.lead =
  'Если вам близки спокойное планирование и человеческое сопровождение — вы по адресу.'
ru.about.audience.families = 'Семьи, которым нужен реалистичный темп и дни с перекусами'
ru.about.audience.kids = 'Школы и детские клубы, которым важны ясные заметки о сопровождении'
ru.about.audience.friends =
  'Друзья и взрослые, которым интересны вино, культура и архитектура глубже'
ru.about.audience.weekend = 'Исследователи уикенда, которым нужен воздух без экстрима'
ru.about.closing.title = 'Смотрите каталог, затем запросите дату'
ru.about.closing.body =
  'Не нужно бронировать мгновенно — изучите туры, поделитесь с группой и вернитесь, когда будете готовы.'
ru.about.ctaPrimary = 'Смотреть кураторские туры'
ru.about.ctaSecondary = 'Создать аккаунт'

writeFileSync(join(localesDir, 'en.json'), JSON.stringify(uiEn, null, 2))
writeFileSync(join(localesDir, 'ro.json'), JSON.stringify(ro, null, 2))
writeFileSync(join(localesDir, 'ru.json'), JSON.stringify(ru, null, 2))

console.log('Wrote en.json, ro.json, ru.json')
