import { FirebaseError } from 'firebase/app'

export function getFirebaseAuthErrorTranslationKey(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/network-request-failed':
        return 'auth.errors.network'
      case 'auth/invalid-email':
        return 'auth.errors.invalidEmail'
      case 'auth/user-disabled':
        return 'auth.errors.userDisabled'
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'auth.errors.invalidCredentials'
      case 'auth/email-already-in-use':
        return 'auth.errors.emailInUse'
      case 'auth/weak-password':
        return 'auth.errors.weakPassword'
      case 'auth/too-many-requests':
        return 'auth.errors.tooManyRequests'
      default:
        return 'auth.errors.generic'
    }
  }

  return 'auth.errors.generic'
}
