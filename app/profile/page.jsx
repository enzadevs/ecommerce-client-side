'use client'

import { useIsSignedInStore } from 'global/IsSignedIn'
import ProfileInfoContainer from 'components/Containers/ProfileInfoContainer'
import LoginPage from 'components/Forms/LoginPage'

export default function ProfilePage(){
    const isSignedIn = useIsSignedInStore(state => state.isSignedIn)

    return(
        <>
            {isSignedIn ? <ProfileInfoContainer/> : <LoginPage/>}
        </>
    )
}