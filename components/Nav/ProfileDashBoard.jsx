'use client'

import { useRouter } from 'next/navigation'

import {PiUserCircle} from 'react-icons/pi'

export default function ProfileDashBoard(){
    const router = useRouter()

    return(
        <button className='button-outline' onClick={() => router.push('/profile')}>
            <>Hasabym</>
            <PiUserCircle className='icons'/>
        </button>
    )
}