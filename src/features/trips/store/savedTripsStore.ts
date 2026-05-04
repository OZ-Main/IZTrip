import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SavedTripsState = {
  savedIdsByUserId: Record<string, string[]>
  toggleTripForUser: (userId: string, tripId: string) => void
  isTripSavedForUser: (userId: string, tripId: string) => boolean
}

function toggleIdInList(list: string[], tripId: string): string[] {
  if (list.includes(tripId)) {
    return list.filter((id) => id !== tripId)
  }

  return [...list, tripId]
}

export const useSavedTripsStore = create<SavedTripsState>()(
  persist(
    (set, get) => ({
      savedIdsByUserId: {},
      toggleTripForUser(userId, tripId) {
        set((state) => {
          const previous = state.savedIdsByUserId[userId] ?? []

          return {
            savedIdsByUserId: {
              ...state.savedIdsByUserId,
              [userId]: toggleIdInList(previous, tripId),
            },
          }
        })
      },
      isTripSavedForUser(userId, tripId) {
        return (get().savedIdsByUserId[userId] ?? []).includes(tripId)
      },
    }),
    { name: 'yztrip-saved-trip-ids' },
  ),
)
