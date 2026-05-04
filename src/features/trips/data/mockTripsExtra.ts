import { unsplashTripImageUrlForCatalogIndex } from '@/features/trips/constants/mockTripImageUrls.constants'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { TripAudience, TripCategory } from '@/shared/domain'

type ExtraTripSpec = {
  slug: string
  title: string
  location: string
  shortDescription: string
  description: string
  category: TripCategory
  targetAudience: TripAudience
  durationDays: number
  priceEur: number
  minPeople: number
  maxPeople: number
  highlightCount: number
  includedCount: number
  itineraryDayCount: number
}

export const EXTRA_TRIP_SPECS: ExtraTripSpec[] = [
  {
    slug: 'balti-food-market-day',
    title: 'Bălți market & northern flavors',
    location: 'Bălți, north Moldova',
    shortDescription: 'Market lanes, Soviet-era architecture, and a hearty lunch stop — a compact northern city day.',
    description:
      'Walk Bălți’s central market with a guide who knows vendors by name, pause for architecture stories, and finish with a set-menu lunch featuring northern staples.',
    category: TripCategory.CULTURE,
    targetAudience: TripAudience.MIXED,
    durationDays: 1,
    priceEur: 44,
    minPeople: 2,
    maxPeople: 12,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'hincu-monastery-forest',
    title: 'Hîncu Monastery & forest chapel loop',
    location: 'Hîncu, central hills',
    shortDescription: 'Quiet woodland paths, a women’s monastery with layered history, and picnic pacing.',
    description:
      'Designed for travelers who want spirituality without crowds: forest approach, monastery visit with respectful guidance, and time for photos and reflection.',
    category: TripCategory.NATURE,
    targetAudience: TripAudience.FAMILY,
    durationDays: 1,
    priceEur: 52,
    minPeople: 2,
    maxPeople: 10,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'milestii-mici-deep-galleries',
    title: 'Mileștii Mici underground galleries',
    location: 'Mileștii Mici, Ialoveni district',
    shortDescription: 'World-record cellar roads by car, structured tasting, and geology-forward storytelling.',
    description:
      'Adults-oriented cellar driving experience with paced tastings, spittoons, and clear notes on alcohol limits and transport safety.',
    category: TripCategory.ADULTS,
    targetAudience: TripAudience.ADULTS,
    durationDays: 1,
    priceEur: 72,
    minPeople: 2,
    maxPeople: 8,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'tiraspol-architecture-day',
    title: 'Tiraspol architecture & city rhythm',
    location: 'Tiraspol (day itinerary from Chișinău)',
    shortDescription: 'Broad avenues, statues, and cafés — a calm, guide-led city loop with clear border timing.',
    description:
      'Structured border crossing windows, a city-center walking loop, and honest notes about pacing, cash, and photography etiquette.',
    category: TripCategory.CULTURE,
    targetAudience: TripAudience.MIXED,
    durationDays: 1,
    priceEur: 68,
    minPeople: 4,
    maxPeople: 14,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'gagauzia-comrat-weekend',
    title: 'Gagauzia weekend: Comrat & wineries',
    location: 'Comrat & villages, south Moldova',
    shortDescription: 'Two days of minority-culture context, village tables, and easy wine stops.',
    description:
      'Blend of museum time, countryside driving, and bilingual storytelling — paced for mixed groups with early dinners.',
    category: TripCategory.WEEKEND,
    targetAudience: TripAudience.MIXED,
    durationDays: 2,
    priceEur: 155,
    minPeople: 2,
    maxPeople: 8,
    highlightCount: 4,
    includedCount: 5,
    itineraryDayCount: 2,
  },
  {
    slug: 'purcari-estate-tasting',
    title: 'Purcari estate tasting & vineyard walk',
    location: 'Purcari, Ștefan Vodă district',
    shortDescription: 'Flagship estate visit with cellar time, vineyard stroll, and seated flight.',
    description:
      'Adults-focused estate day with clear tasting pacing, food pairings, and optional bottle shipping notes.',
    category: TripCategory.ADULTS,
    targetAudience: TripAudience.ADULTS,
    durationDays: 1,
    priceEur: 85,
    minPeople: 2,
    maxPeople: 10,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'padurea-domneasca-birding',
    title: 'Princely Forest birding morning',
    location: 'Padurea Domnească, Glodeni',
    shortDescription: 'Quiet hides, spring migration windows, and a guide with local species notes.',
    description:
      'Early start, short walks on flat paths, and respectful distance rules — ideal for curious beginners.',
    category: TripCategory.NATURE,
    targetAudience: TripAudience.MIXED,
    durationDays: 1,
    priceEur: 48,
    minPeople: 2,
    maxPeople: 8,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'nistru-sunset-kayak',
    title: 'Nistru sunset kayak (gentle water)',
    location: 'Vadul lui Vodă area',
    shortDescription: 'Short paddle, safety briefing, and golden-hour skyline toward the east bank.',
    description:
      'Weather-dependent add-on friendly session with life jackets, support zodiac, and clear cancellation windows.',
    category: TripCategory.NATURE,
    targetAudience: TripAudience.ADULTS,
    durationDays: 1,
    priceEur: 55,
    minPeople: 2,
    maxPeople: 6,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'ungheni-hill-vineyards',
    title: 'Ungheni hill vineyards & cellar lunch',
    location: 'Ungheni district',
    shortDescription: 'Ridge views, boutique cellar, and a long lunch table with local cheeses.',
    description:
      'Mixed-group pacing with van support, short vineyard walks, and optional kids’ juice flight at partner cellars.',
    category: TripCategory.CULTURE,
    targetAudience: TripAudience.FAMILY,
    durationDays: 1,
    priceEur: 62,
    minPeople: 2,
    maxPeople: 12,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'cobani-wetlands-boardwalk',
    title: 'Cobani wetlands boardwalk & picnic',
    location: 'Cobani, Glodeni district',
    shortDescription: 'Accessible boardwalks, spring flowers, and a packed lunch with shade stops.',
    description:
      'Family-forward day with stroller-friendly segments where possible, binoculars on request, and clear sun protection notes.',
    category: TripCategory.NATURE,
    targetAudience: TripAudience.KIDS,
    durationDays: 1,
    priceEur: 39,
    minPeople: 3,
    maxPeople: 14,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'chisinau-stefan-cel-mare-walk',
    title: 'Ștefan cel Mare Park & museums loop',
    location: 'Chișinău central',
    shortDescription: 'Green heart of the capital — statues, shade, and two compact museum visits.',
    description:
      'Half-day pacing with tickets coordinated in advance and optional coffee stop mapped for families.',
    category: TripCategory.CULTURE,
    targetAudience: TripAudience.FAMILY,
    durationDays: 1,
    priceEur: 28,
    minPeople: 2,
    maxPeople: 15,
    highlightCount: 4,
    includedCount: 3,
    itineraryDayCount: 1,
  },
  {
    slug: 'bender-fortress-river',
    title: 'Bender fortress & Nistru promenade',
    location: 'Bender',
    shortDescription: 'Fortress walls, river breeze, and a guide-led loop with border timing clarity.',
    description:
      'Mixed groups with rest stops, clear photography guidance, and a calm return schedule to Chișinău.',
    category: TripCategory.CULTURE,
    targetAudience: TripAudience.GROUP,
    durationDays: 1,
    priceEur: 58,
    minPeople: 8,
    maxPeople: 24,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'educational-village-life-museum',
    title: 'Village life museum & craft workshop',
    location: 'Ialoveni district partner museum',
    shortDescription: 'Hands-on looms, clay shapes, and a teacher-led Q&A for school-sized groups.',
    description:
      'Educational pacing with chaperone checklists, split stations, and a single invoicing path for institutions.',
    category: TripCategory.EDUCATIONAL,
    targetAudience: TripAudience.GROUP,
    durationDays: 1,
    priceEur: 34,
    minPeople: 12,
    maxPeople: 40,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'kids-nature-scavenger-codrii',
    title: 'Kids scavenger trail in Codrii',
    location: 'Strășeni forest trails',
    shortDescription: 'Sticker map, easy loops, and a forest picnic with allergy notes on booking.',
    description:
      'Guides trained for kid energy levels, frequent snack breaks, and a clear lost-child protocol families can review upfront.',
    category: TripCategory.KIDS,
    targetAudience: TripAudience.KIDS,
    durationDays: 1,
    priceEur: 36,
    minPeople: 6,
    maxPeople: 20,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'custom-private-itinerary-day',
    title: 'Custom private day (driver + coordinator)',
    location: 'Chișinău region, route on request',
    shortDescription: 'Tell us your anchors — we stitch timing, entries, and meals into one invoice-friendly day.',
    description:
      'Custom category experience with a structured pre-call, written route confirmation, and flexible mileage band.',
    category: TripCategory.CUSTOM,
    targetAudience: TripAudience.MIXED,
    durationDays: 1,
    priceEur: 190,
    minPeople: 2,
    maxPeople: 6,
    highlightCount: 4,
    includedCount: 4,
    itineraryDayCount: 1,
  },
  {
    slug: 'three-day-bessarabia-loop',
    title: 'Three-day Bessarabia loop (south & center)',
    location: 'South Moldova + Codrii return',
    shortDescription: 'Monasteries, cellar roads, and two guesthouse nights with luggage support.',
    description:
      'Long weekend with mileage caps, two different hosts, and a day-three shorter drive back to Chișinău.',
    category: TripCategory.WEEKEND,
    targetAudience: TripAudience.ADULTS,
    durationDays: 3,
    priceEur: 320,
    minPeople: 2,
    maxPeople: 6,
    highlightCount: 4,
    includedCount: 6,
    itineraryDayCount: 3,
  },
  {
    slug: 'chisinau-zoo-family-plus',
    title: 'Chișinău Zoo + park play afternoon',
    location: 'Chișinău',
    shortDescription: 'Tickets handled, timed lunch, and a shaded playground block for younger kids.',
    description:
      'Family-first pacing with stroller parking notes, short walking segments, and optional nap window in the schedule.',
    category: TripCategory.KIDS,
    targetAudience: TripAudience.FAMILY,
    durationDays: 1,
    priceEur: 32,
    minPeople: 2,
    maxPeople: 12,
    highlightCount: 4,
    includedCount: 3,
    itineraryDayCount: 1,
  },
  {
    slug: 'adults-jazz-wine-evening',
    title: 'Chișinău jazz cellar & wine evening',
    location: 'Chișinău city center',
    shortDescription: 'Seated set, paired pours, and taxi credits printed for the ride home.',
    description:
      'Adults-only evening with age checks, low lighting notes for accessibility questions, and clear finish time.',
    category: TripCategory.ADULTS,
    targetAudience: TripAudience.ADULTS,
    durationDays: 1,
    priceEur: 75,
    minPeople: 2,
    maxPeople: 16,
    highlightCount: 4,
    includedCount: 3,
    itineraryDayCount: 1,
  },
  {
    slug: 'educational-chisinau-architecture-lab',
    title: 'Architecture lab walk for students',
    location: 'Chișinău civic center',
    shortDescription: 'Sketch prompts, façade vocabulary cards, and a debrief worksheet teachers can reuse.',
    description:
      'Educational block scheduling with chaperone ratios, indoor backup lecture space, and digital handouts.',
    category: TripCategory.EDUCATIONAL,
    targetAudience: TripAudience.GROUP,
    durationDays: 1,
    priceEur: 22,
    minPeople: 15,
    maxPeople: 35,
    highlightCount: 4,
    includedCount: 3,
    itineraryDayCount: 1,
  },
  {
    slug: 'nature-two-day-dniester-cliffs',
    title: 'Two-day Nistru cliff viewpoints',
    location: 'Molovata — Dubăsari segment',
    shortDescription: 'Sunrise ridge, guesthouse night, and a slower second-day forest descent.',
    description:
      'Nature-forward weekend with hiking grades explained upfront, hiking poles available, and luggage van support.',
    category: TripCategory.NATURE,
    targetAudience: TripAudience.MIXED,
    durationDays: 2,
    priceEur: 168,
    minPeople: 2,
    maxPeople: 8,
    highlightCount: 4,
    includedCount: 5,
    itineraryDayCount: 2,
  },
]

function nextDates(seed: number): string[] {
  const base = new Date(Date.UTC(2026, 4, 10 + (seed % 20)))
  return [0, 7, 21, 35].map((d) => {
    const next = new Date(base)
    next.setUTCDate(base.getUTCDate() + d)

    return next.toISOString().slice(0, 10)
  })
}

export function buildExtraMockTrips(): TripDefinition[] {
  return EXTRA_TRIP_SPECS.map((spec, index) => ({
    id: `trip-extra-${spec.slug}`,
    slug: spec.slug,
    category: spec.category,
    targetAudience: spec.targetAudience,
    durationDays: spec.durationDays,
    priceEur: spec.priceEur,
    availableDates: nextDates(index),
    imageSrc: unsplashTripImageUrlForCatalogIndex(index),
    minPeople: spec.minPeople,
    maxPeople: spec.maxPeople,
    highlightCount: spec.highlightCount,
    includedCount: spec.includedCount,
    itineraryDayCount: spec.itineraryDayCount,
  }))
}

