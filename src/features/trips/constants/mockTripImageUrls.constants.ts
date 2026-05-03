function unsplashTripImage(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?w=1200&h=800&auto=format&fit=crop&q=75`
}

export const MOCK_TRIP_IMAGE_URLS = {
  orheiulVechi: unsplashTripImage('photo-1564501049412-61c2a3083791'),
  cricovaWine: unsplashTripImage('photo-1510812431401-41d2bd2722f3'),
  sorocaFortress: unsplashTripImage('photo-1585208798174-6cedd86e019a'),
  chisinauWalking: unsplashTripImage('photo-1467269204594-9661b134dd2b'),
  saharnaTipova: unsplashTripImage('photo-1441974231531-c6227db76b6e'),
  weekendNature: unsplashTripImage('photo-1501854140801-50d01698950b'),
} as const
