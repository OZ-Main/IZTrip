import { onAuthStateChanged, type User } from 'firebase/auth'
import { create } from 'zustand'

import { signOutIzTrip } from '@/lib/firebase/authService'
import { getFirebaseAuth } from '@/lib/firebase/firebaseAuth'

type AuthStoreState = {
  user: User | null
  authReady: boolean
  signOutUser: () => Promise<void>
}

export const useAuthStore = create<AuthStoreState>(() => ({
  user: null,
  authReady: false,
  signOutUser: async () => {
    await signOutIzTrip()
  },
}))

export function subscribeFirebaseAuthState(): () => void {
  const auth = getFirebaseAuth()

  return onAuthStateChanged(auth, (nextUser) => {
    useAuthStore.setState({ user: nextUser, authReady: true })
  })
}
