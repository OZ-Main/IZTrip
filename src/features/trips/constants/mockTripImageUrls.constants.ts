const PICSUM_BASE = 'https://picsum.photos/seed'

function mockTripImageUrl(seed: string, width: number, height: number): string {
  return `${PICSUM_BASE}/${seed}/${width}/${height}`
}

export const MOCK_TRIP_IMAGE_URLS = {
  orheiulVechi: mockTripImageUrl('iztrip-orheiul-vechi', 1200, 800),
  cricovaWine: mockTripImageUrl('iztrip-cricova-wine', 1200, 800),
  sorocaFortress: mockTripImageUrl('iztrip-soroca-fortress', 1200, 800),
  chisinauWalking: mockTripImageUrl('iztrip-chisinau-walk', 1200, 800),
  saharnaTipova: mockTripImageUrl('iztrip-saharna-tipova', 1200, 800),
  weekendNature: mockTripImageUrl('iztrip-weekend-nature', 1200, 800),
} as const
