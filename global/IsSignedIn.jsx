import { create } from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'

export const IsSignedInStore = create (
    persist(
        (set,get) => ({
            isSignedIn: false,
            setSignedIn: isSignedIn => set(() => ({isSignedIn: isSignedIn})),
        }),
        {
            name: 'is-signed-in',
            storage: createJSONStorage(() => localStorage)
        }
    )
)