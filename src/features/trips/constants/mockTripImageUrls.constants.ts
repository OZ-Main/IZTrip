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
