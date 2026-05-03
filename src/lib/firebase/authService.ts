import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type UserCredential,
} from 'firebase/auth'

import { getFirebaseAuth } from '@/lib/firebase/firebaseAuth'

export async function registerWithEmailPassword(params: {
  email: string
  password: string
  displayName: string
}): Promise<UserCredential> {
  const auth = getFirebaseAuth()
  const credential = await createUserWithEmailAndPassword(auth, params.email, params.password)
  await updateProfile(credential.user, { displayName: params.displayName })

  return credential
}

export async function signInWithEmailPassword(
  email: string,
  password: string,
): Promise<UserCredential> {
  const auth = getFirebaseAuth()

  return signInWithEmailAndPassword(auth, email, password)
}

export async function signOutIzTrip(): Promise<void> {
  await signOut(getFirebaseAuth())
}
