import { EXTRA_TRIP_SPECS } from '@/features/trips/data/mockTripsExtra'
import { AppLanguage } from '@/shared/domain'

type TripCatalogCore = {
  title: string
  location: string
  shortDescription: string
  description: string
}

type TranslatedCoreRow = {
  ro: TripCatalogCore
  ru: TripCatalogCore
}

const SHARED_HIGHLIGHTS: Record<AppLanguage, readonly [string, string, string, string]> = {
  [AppLanguage.English]: [
    'Small-group pacing with clear meeting points and rest windows.',
    'Local guide partner vetted by the YZ Trip coordination team.',
    'Transparent “from” pricing with realistic guest counts.',
    'Weather backup notes and a day-of guest support contact.',
  ],
  [AppLanguage.Romanian]: [
    'Ritm pentru grup mic, cu puncte de întâlnire clare și pauze de odihnă.',
    'Ghid local partener, verificat de echipa de coordonare YZ Trip.',
    'Preț „de la” transparent, cu număr realist de participanți.',
    'Plan de rezervă la vreme rea și contact de asistență în ziua excursiei.',
  ],
  [AppLanguage.Russian]: [
    'Небольшие группы, понятные точки сбора и окна для отдыха.',
    'Местный гид-партнёр, проверенный координационной командой YZ Trip.',
    'Прозрачная цена «от» и реалистичный размер группы.',
    'Запасной план при погоде и контакт поддержки в день тура.',
  ],
}

const SHARED_INCLUDED: Record<AppLanguage, readonly [string, string, string, string, string, string]> = {
  [AppLanguage.English]: [
    'Licensed guide and curated route plan',
    'Round-trip transport from Chișinău meeting point',
    'Coordinated access fees where applicable',
    'YZ Trip coordination and day-of guest support',
    'Overnight stay at a vetted partner property',
    'Breakfast on multi-day departures',
  ],
  [AppLanguage.Romanian]: [
    'Ghid autorizat și traseu curatoriat',
    'Transport dus-întors de la punctul de întâlnire din Chișinău',
    'Taxe de acces coordonate, acolo unde e cazul',
    'Coordonare YZ Trip și asistență pentru oaspeți în ziua excursiei',
    'Cazare la un partener verificat',
    'Mic dejun la plecările pe mai multe zile',
  ],
  [AppLanguage.Russian]: [
    'Лицензированный гид и продуманный маршрут',
    'Трансфер туда-обратно от точки встречи в Кишинёве',
    'Согласованные входные билеты и сборы, где применимо',
    'Координация YZ Trip и поддержка гостей в день тура',
    'Ночёвка у проверенного партнёра',
    'Завтрак при многодневных выездах',
  ],
}

const ITINERARY: Record<
  AppLanguage,
  { daySep: string; first: string; middle: string; last: string }
> = {
  [AppLanguage.English]: {
    daySep: ' — day ',
    first:
      'Morning pickup, guided core route, paced meals, and coordinated return or check-in.',
    middle: 'Mid-trip loop with flexible afternoon pacing and local dinner window.',
    last: 'Final sights, lunch window, and return to Chișinău by evening.',
  },
  [AppLanguage.Romanian]: {
    daySep: ' — ziua ',
    first:
      'Ridicare dimineața, traseu ghidat principal, mese în ritm relaxat și întoarcere sau cazare coordonată.',
    middle:
      'Buclă la mijlocul itinerarului, după-amiază flexibilă și fereastră pentru cină locală.',
    last: 'Ultimele obiective, fereastră pentru prânz și întoarcere la Chișinău spre seară.',
  },
  [AppLanguage.Russian]: {
    daySep: ' — день ',
    first:
      'Утренний выезд, основной маршрут с гидом, еда в спокойном темпе и согласованное возвращение или заселение.',
    middle: 'Середина маршрута: гибкий послеобеденный блок и окно для ужина.',
    last: 'Финальные точки, окно на обед и возвращение в Кишинёв к вечеру.',
  },
}

const EXTRA_TRIP_TRANSLATED_CORE: Record<string, TranslatedCoreRow> = {
  'balti-food-market-day': {
    ro: {
      title: 'Piața din Bălți și aromele nordului',
      location: 'Bălți, nordul Moldovei',
      shortDescription:
        'Alee de piață, arhitectură din epoca sovietică și un prânz copios — o zi compactă în nordul țării.',
      description:
        'Parcurgi piața centrală din Bălți cu un ghid care cunoaște comercianții pe nume, te oprești pentru povești despre arhitectură, iar finalul e un meniu fix cu preparate tipice nordului.',
    },
    ru: {
      title: 'Рынок Бельц и северные вкусы',
      location: 'Бельцы, север Молдовы',
      shortDescription:
        'Рыночные ряды, архитектура советского времени и сытный обед — компактный городской день на севере.',
      description:
        'Прогулка по центральному рынку Бельц с гидом, который знает продавцов по имени, рассказы об архитектуре и финал — фиксированное меню с северными блюдами.',
    },
  },
  'hincu-monastery-forest': {
    ro: {
      title: 'Mănăstirea Hîncu și poteca spre capelă',
      location: 'Hîncu, dealurile centrului',
      shortDescription:
        'Poteci liniștite prin pădure, o mănăstire de maici cu istorie stratificată și ritm de picnic.',
      description:
        'Pentru călători care caută liniște fără aglomerații: urcare prin pădere, vizită respectuoasă la mănăstire și timp pentru fotografii și reflecție.',
    },
    ru: {
      title: 'Монастырь Хынку и лесная тропа к часовне',
      location: 'Хынку, центральные холмы',
      shortDescription:
        'Тихие лесные тропы, женский монастырь со сложной историей и темп прогулки как на пикнике.',
      description:
        'Для тех, кто хочет духовности без толп: подход через лес, визит в монастырь с тактичным сопровождением и время для фото и размышления.',
    },
  },
  'milestii-mici-deep-galleries': {
    ro: {
      title: 'Galeriile subterane Mileștii Mici',
      location: 'Mileștii Mici, raionul Ialoveni',
      shortDescription:
        'Șosele de celară sub record mondial, degustare structurată și povești despre geologie.',
      description:
        'Experiență pentru adulți: condus prin galerii, degustări în ritm controlat, boluri de scuipat și clarificări despre limitele alcoolului și siguranța transportului.',
    },
    ru: {
      title: 'Подземные галереи Милештий Мичь',
      location: 'Милештий Мичь, Яловенский район',
      shortDescription:
        'Дороги в погребах мирового рекорда, структурированная дегустация и рассказы о геологии.',
      description:
        'Формат для взрослых: проезд по галереям, выдержанный темп дегустации, плевательницы и ясные пояснения по алкоголю и безопасности трансфера.',
    },
  },
  'tiraspol-architecture-day': {
    ro: {
      title: 'Arhitectură și ritm urban la Tiraspol',
      location: 'Tiraspol (itinera de o zi din Chișinău)',
      shortDescription:
        'Bulevarde late, statui și cafenele — buclă urbană calmă, ghidată, cu ferestre clare la trecerea frontierei.',
      description:
        'Ferestre definite la trecerea frontierei, buclă pietonală în centru și note sincere despre ritm, numerar și etichetă la fotografiat.',
    },
    ru: {
      title: 'Архитектура и ритм Тирасполя',
      location: 'Тирасполь (однодневный маршрут из Кишинёва)',
      shortDescription:
        'Широкие проспекты, памятники и кафе — спокойная пешая петля с понятными окнами на границе.',
      description:
        'Структурированные интервалы на границе, прогулка по центру и честные заметки о темпе, наличных и этикете съёмки.',
    },
  },
  'gagauzia-comrat-weekend': {
    ro: {
      title: 'Weekend în Găgăuzia: Comrat și crame',
      location: 'Comrat și sate, sudul Moldovei',
      shortDescription:
        'Două zile cu context despre minoritate, mese la țară și opriri ușoare la vin.',
      description:
        'Combinație de muzeu, drumuri de țară și povestiri bilingve — ritm pentru grupuri mixte, cu cină timpurie.',
    },
    ru: {
      title: 'Уикенд в Гагаузии: Комрат и винодельни',
      location: 'Комрат и сёла, юг Молдовы',
      shortDescription:
        'Два дня про культуру меньшинства, деревенские столы и несложные винные остановки.',
      description:
        'Музей, загородные переезды и двуязычные истории — темп для смешанных групп и ранние ужины.',
    },
  },
  'purcari-estate-tasting': {
    ro: {
      title: 'Degustare la domeniul Purcari și plimbare prin vie',
      location: 'Purcari, raionul Ștefan Vodă',
      shortDescription:
        'Vizită la conacul emblematic, timp în cramă, plimbare prin vie și degustare la masă.',
      description:
        'Zi pentru adulți, cu degustare bine ritmată, accords culinari și note opționale despre expedierea sticlelor.',
    },
    ru: {
      title: 'Дегустация в Purcari и прогулка по винограднику',
      location: 'Пуркары, Штефан-Водский район',
      shortDescription:
        'Флагманское шато, время в подвале, прогулка по лозе и сидячая дегустация.',
      description:
        'День для взрослых: выдержанный темп дегустации, гастрономические пары и по желанию — про отправку бутылок.',
    },
  },
  'padurea-domneasca-birding': {
    ro: {
      title: 'Dimineață de birdwatching în Pădurea Domnească',
      location: 'Pădurea Domnească, Glodeni',
      shortDescription:
        'Observatoare liniștite, ferestre de migrare primăvară și ghid cu note despre speciile locale.',
      description:
        'Pornire devreme, plimbări scurte pe teren plat și reguli de distanță respectuoasă — potrivit pentru începători curioși.',
    },
    ru: {
      title: 'Утро наблюдения за птицами в «Княжеском лесу»',
      location: 'Пэдуря Домняскэ, Глодены',
      shortDescription:
        'Тихие скрытые места, весенние окна миграции и гид с заметками о местных видах.',
      description:
        'Ранний старт, короткие ровные тропы и дистанция с уважением к птицам — для любознательных новичков.',
    },
  },
  'nistru-sunset-kayak': {
    ro: {
      title: 'Caiac la apus pe Nistru (ape line)',
      location: 'zona Vadul lui Vodă',
      shortDescription:
        'Paddle scurt, briefing de siguranță și lumină de seară spre malul de est.',
      description:
        'Sesiune dependentă de vreme, cu veste de salvare, zodiac de sprijin și ferestre clare de anulare.',
    },
    ru: {
      title: 'Закатный каяк на Днестре (спокойная вода)',
      location: 'район Вадул-луй-Водэ',
      shortDescription:
        'Короткая гребля, инструктаж по безопасности и вечерний свет в сторону восточного берега.',
      description:
        'Зависит от погоды: жилеты, сопроводительная лодка и понятные правила отмены.',
    },
  },
  'ungheni-hill-vineyards': {
    ro: {
      title: 'Viile din deal la Ungheni și prânz la cramă',
      location: 'raionul Ungheni',
      shortDescription:
        'Vedere de pe creastă, cramă boutique și masă lungă de prânz cu brânzeturi locale.',
      description:
        'Ritm pentru grupuri mixte, cu microbuz, plimbări scurte prin vie și opțiune de „flight” cu sucuri pentru copii la parteneri.',
    },
    ru: {
      title: 'Виноградники на холмах Унгень и обед в подвале',
      location: 'Унгенский район',
      shortDescription:
        'Виды с гребня, бутиковая келья и длинный обеденный стол с местными сырами.',
      description:
        'Темп для смешанных групп, маршрутка, короткие прогулки по лозе и по запросу — дегустация соков для детей.',
    },
  },
  'cobani-wetlands-boardwalk': {
    ro: {
      title: 'Pasarele în zonele umede Cobani și picnic',
      location: 'Cobani, raionul Glodeni',
      shortDescription:
        'Pasarele accesibile, flori de primăvară și pachet de picnic cu opriri la umbră.',
      description:
        'Zi pentru familii, cu segmente adaptate căruciorului unde e posibil, binoclu la cerere și recomandări clare pentru protecție solară.',
    },
    ru: {
      title: 'Набережные в зонах угодий Кобань и пикник',
      location: 'Кобань, Глоденский район',
      shortDescription:
        'Доступные настилы, весенние цветы и ланч-бокс с остановками в тени.',
      description:
        'Семейный день: где возможно — участки для колясок, бинокль по запросу и ясные советы по солнцезащите.',
    },
  },
  'chisinau-stefan-cel-mare-walk': {
    ro: {
      title: 'Parcul Ștefan cel Mare și buclă de muzee',
      location: 'centrul Chișinăului',
      shortDescription:
        'Inima verde a capitalei — statui, umbră și două vizite compacte la muzee.',
      description:
        'Jumătate de zi, cu bilete coordonate din timp și opțional o hartă de cafenea pentru familii.',
    },
    ru: {
      title: 'Парк Штефана чел Маре и два музея',
      location: 'центр Кишинёва',
      shortDescription:
        'Зелёное сердце столицы — скульптуры, тень и два компактных музейных визита.',
      description:
        'Полдня с заранее согласованными билетами и по желанию — подсказки по кофейням для семей.',
    },
  },
  'bender-fortress-river': {
    ro: {
      title: 'Cetatea Bender și promenada pe Nistru',
      location: 'Bender',
      shortDescription:
        'Ziduri de cetate, briza râului și buclă ghidată cu claritate la trecerea frontierei.',
      description:
        'Grupuri mixte, pauze de odihnă, ghidaj clar pentru fotografii și întoarcere liniștită spre Chișinău.',
    },
    ru: {
      title: 'Крепость Бендеры и набережная Днестра',
      location: 'Бендеры',
      shortDescription:
        'Стены крепости, речной бриз и пешая петля с понятным таймингом границы.',
      description:
        'Смешанные группы, остановки отдыха, ясные правила съёмки и спокойный возврат в Кишинёв.',
    },
  },
  'educational-village-life-museum': {
    ro: {
      title: 'Muzeul vieții la sat și atelier meșteșugăresc',
      location: 'muzeu partener în raionul Ialoveni',
      shortDescription:
        'Război de țesut, forme din lut și sesiune Q&A pentru grupuri școlare.',
      description:
        'Ritm educațional cu liste pentru însoțitori, stații paralele și o singură cale de facturare pentru instituții.',
    },
    ru: {
      title: 'Музей деревенской жизни и ремесленный мастер-класс',
      location: 'партнёрский музей, Яловенский район',
      shortDescription:
        'Ткацкий станок, глина и дискуссия с педагогом для школьных групп.',
      description:
        'Учебный темп: чек-листы сопровождающих, параллельные станции и единый счёт для организаций.',
    },
  },
  'kids-nature-scavenger-codrii': {
    ro: {
      title: 'Vânătoare de comori în Codrii pentru copii',
      location: 'poteci forestiere, Strășeni',
      shortDescription:
        'Hartă cu stickere, bucle ușoare și picnic în pădure cu mențiuni despre alergii la rezervare.',
      description:
        'Ghiduri pregătite pentru energia copiilor, pauze dese pentru gustări și protocol clar de siguranță pe care familiile îl pot citi înainte.',
    },
    ru: {
      title: 'Детский квест по лесу в Кодрах',
      location: 'лесные тропы, Стрэшены',
      shortDescription:
        'Карта со стикерами, простые круги и лесной пикник — аллергии указываются при бронировании.',
      description:
        'Гиды, готовые к детской энергии, частые перекусы и понятный протокол безопасности для ознакомления заранее.',
    },
  },
  'custom-private-itinerary-day': {
    ro: {
      title: 'Zi privată la comandă (șofer + coordonator)',
      location: 'regiunea Chișinău, traseu la cerere',
      shortDescription:
        'Ne spui punctele tale ancoră — împletim timpi, intrări și mese într-o zi ușor de facturat.',
      description:
        'Experiență în categoria „personalizat”: apel prealabil structurat, confirmare scrisă a traseului și bandă flexibilă de kilometraj.',
    },
    ru: {
      title: 'Индивидуальный день на заказ (водитель + координатор)',
      location: 'регион Кишинёва, маршрут по запросу',
      shortDescription:
        'Назовите якоря — мы соберём время, входы и еду в один удобный для счёта день.',
      description:
        'Категория «индивидуально»: структурированный предварительный звонок, письменное подтверждение маршрута и гибкий лимит километража.',
    },
  },
  'three-day-bessarabia-loop': {
    ro: {
      title: 'Bucla de trei zile în Basarabia (sud și centru)',
      location: 'sudul Moldovei + întoarcere prin Codrii',
      shortDescription:
        'Mănăstiri, drumuri de cramă și două nopți la pensiuni, cu suport pentru bagaje.',
      description:
        'Weekend lung cu plafon de kilometraj, doi gazde diferiți și o zi a treia cu condus mai scurt spre Chișinău.',
    },
    ru: {
      title: 'Трёхдневная петля по Бессарабии (юг и центр)',
      location: 'юг Молдовы + возврат через Кодры',
      shortDescription:
        'Монастыри, винные дороги и две ночи в гостевых домах с поддержкой багажа.',
      description:
        'Длинные выходные с лимитом пробега, двумя разными хозяевами и более коротким третьим днём до Кишинёва.',
    },
  },
  'chisinau-zoo-family-plus': {
    ro: {
      title: 'Grădina Zoologică Chișinău + după-amiază de joacă',
      location: 'Chișinău',
      shortDescription:
        'Bilete rezolvate, prânz la timp și bloc la locul de joacă umbrit pentru cei mici.',
      description:
        'Ritm pentru familii: note despre parcare cărucior, segmente scurte de mers și opțional fereastră de somn în program.',
    },
    ru: {
      title: 'Кишинёвский зоопарк + игры после обеда',
      location: 'Кишинёв',
      shortDescription:
        'Билеты заранее, обед по времени и тенистая площадка для малышей.',
      description:
        'Семейный темп: парковка колясок, короткие пешие отрезки и по желанию — окно для сна в расписании.',
    },
  },
  'adults-jazz-wine-evening': {
    ro: {
      title: 'Seară de jazz la cramă și vin în Chișinău',
      location: 'centrul Chișinăului',
      shortDescription:
        'Set la masă, perechi de pahar și credite taxi tipărite pentru întoarcere.',
      description:
        'Seară doar pentru adulți: verificări de vârstă, note despre lumină slabă pentru întrebări de accesibilitate și oră clară de final.',
    },
    ru: {
      title: 'Вечер джаза в винном подвале в Кишинёве',
      location: 'центр Кишинёва',
      shortDescription:
        'Сидячий сет, пары к бокалам и распечатанные такси-кредиты на дорогу домой.',
      description:
        'Только для взрослых: проверка возраста, приглушённый свет — для вопросов доступности — и чёткое время окончания.',
    },
  },
  'educational-chisinau-architecture-lab': {
    ro: {
      title: 'Plimbare „laborator de arhitectură” pentru elevi',
      location: 'centrul civic Chișinău',
      shortDescription:
        'Prompturi de schiță, fișe de vocabular pentru fațade și fișă de debrief reutilizabilă.',
      description:
        'Program educațional cu raport însoțitori, sală de rezervă în interior și fișiere digitale.',
    },
    ru: {
      title: 'Архитектурная лаборатория для школьников',
      location: 'гражданский центр Кишинёва',
      shortDescription:
        'Эскизные задания, карточки терминов фасадов и лист итогов для учителей.',
      description:
        'Учебный блок: соотношение сопровождающих, запасная аудитория и цифровые раздаточные материалы.',
    },
  },
  'nature-two-day-dniester-cliffs': {
    ro: {
      title: 'Două zile cu puncte de belvedere pe stâncile Nistrului',
      location: 'segment Molovata — Dubăsari',
      shortDescription:
        'Răsărit pe creastă, noapte la pensiune și coborâre mai lentă prin pădure a doua zi.',
      description:
        'Weekend axat pe natură: grade de dificultate explicate din timp, bețe de drumeție disponibile și dubă pentru bagaje.',
    },
    ru: {
      title: 'Два дня: виды со скал Днестра',
      location: 'участок Моловата — Дубоссары',
      shortDescription:
        'Рассвет на гребне, ночёвка в гостевом доме и более спокойный второй день в лесу.',
      description:
        'Природный уикенд: уровни сложности заранее, палки для треккинга и фургон для багажа.',
    },
  },
}

function pickCore(spec: (typeof EXTRA_TRIP_SPECS)[number], lang: AppLanguage): TripCatalogCore {
  if (lang === AppLanguage.English) {
    return {
      title: spec.title,
      location: spec.location,
      shortDescription: spec.shortDescription,
      description: spec.description,
    }
  }

  const row = EXTRA_TRIP_TRANSLATED_CORE[spec.slug]
  if (!row) {
    throw new Error(`Missing extra trip catalog translations for slug: ${spec.slug}`)
  }

  if (lang === AppLanguage.Romanian) {
    return row.ro
  }

  return row.ru
}

function buildIncludedKeys(includedCount: number, lang: AppLanguage): Record<string, string> {
  const lines = SHARED_INCLUDED[lang]
  const included: Record<string, string> = {}

  for (let includedIndex = 1; includedIndex <= includedCount; includedIndex += 1) {
    included[`included${includedIndex}`] = lines[includedIndex - 1]
  }

  return included
}

function buildItineraryKeys(input: {
  itineraryDayCount: number
  lang: AppLanguage
  localizedTitle: string
}): Record<string, string> {
  const { itineraryDayCount, lang, localizedTitle } = input
  const pack = ITINERARY[lang]
  const itinerary: Record<string, string> = {}

  for (let day = 1; day <= itineraryDayCount; day += 1) {
    itinerary[`itineraryDay${day}Title`] = `${localizedTitle}${pack.daySep}${day}`

    if (day === 1) {
      itinerary[`itineraryDay${day}Body`] = pack.first
    } else if (day === itineraryDayCount) {
      itinerary[`itineraryDay${day}Body`] = pack.last
    } else {
      itinerary[`itineraryDay${day}Body`] = pack.middle
    }
  }

  return itinerary
}

export function buildExtraTripCatalog(lang: AppLanguage): Record<string, Record<string, string>> {
  const entries: Record<string, Record<string, string>> = {}
  const highlights = SHARED_HIGHLIGHTS[lang]

  for (const spec of EXTRA_TRIP_SPECS) {
    const core = pickCore(spec, lang)

    entries[spec.slug] = {
      title: core.title,
      location: core.location,
      shortDescription: core.shortDescription,
      description: core.description,
      highlight1: highlights[0],
      highlight2: highlights[1],
      highlight3: highlights[2],
      highlight4: highlights[3],
      ...buildIncludedKeys(spec.includedCount, lang),
      ...buildItineraryKeys({
        itineraryDayCount: spec.itineraryDayCount,
        lang,
        localizedTitle: core.title,
      }),
    }
  }

  return entries
}
