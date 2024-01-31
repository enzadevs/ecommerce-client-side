import { create } from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'

export const useIsSignedInStore = create (
    persist(
        (set,get) => ({
            currentUserObject: [],
            updateCurrentUserObject: (userData) =>
                set((state) => ({ currentUserObject: userData })),
            isSignedIn: false,
            setIsSignedIn: isSignedIn => set(() => ({isSignedIn: isSignedIn})),
        }),
        {
            name: 'is-signed-in',
            storage: createJSONStorage(() => localStorage)
        }
    )
)