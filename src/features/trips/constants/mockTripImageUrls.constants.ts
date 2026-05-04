function unsplashTripImage(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?w=1200&h=800&auto=format&fit=crop&q=75`
}

export const MOCK_TRIP_IMAGE_URLS = {
  orheiulVechi: unsplashTripImage('photo-1564501049412-61c2a3083791'),
  cricovaWine: unsplashTripImage('photo-1510812431401-41d2bd2722f3'),
  sorocaFortress: unsplashTripImage('photo-1762224691483-13477e3d8a68'),
  chisinauWalking: unsplashTripImage('photo-1685027693679-ae0ff848d4e1'),
  saharnaTipova: unsplashTripImage('photo-1775034600990-cb0f78d8356d'),
  weekendNature: unsplashTripImage('photo-1635415312333-5b5bf4149ded'),
} as const

const EXTRA_TRIP_UNSPLASH_IDS = [
  'photo-1470240731273-78285a344bfb',
  'photo-1441974231531-c6227db76b6e',
  'photo-1596436889106-be35e843f974',
  'photo-1540959733332-eab4deab321d',
  'photo-1467269204594-9661b134dd2b',
  'photo-1465198528945-e79051921809',
  'photo-1444464666168-49d455b098bf',
  'photo-1544551763-46a013bb70d5',
  'photo-1526772662000-3f88f10405ff',
  'photo-1499678329028-101435697a69',
  'photo-1519676868529-faacafc47472',
  'photo-1578662996442-48f60103fc96',
  'photo-1500530855697-b586d89ba3ee',
  'photo-1518837695005-2083093ee35b',
  'photo-1488646953014-85cb44e25828',
  'photo-1528183429757-a472d491bdb9',
  'photo-1506905925346-21bda4d32df4',
  'photo-1515542622106-78bda8ba0e5f',
  'photo-1483729558449-99ef09a8c325',
  'photo-1464822759023-fed622884851',
] as const

export function unsplashTripImageUrlForCatalogIndex(extraTripIndex: number): string {
  const photoId = EXTRA_TRIP_UNSPLASH_IDS[extraTripIndex]

  if (photoId === undefined) {
    throw new Error(`EXTRA_TRIP_UNSPLASH_IDS missing entry at index ${extraTripIndex}`)
  }

  return unsplashTripImage(photoId)
}
