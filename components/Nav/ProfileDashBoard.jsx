import Link from 'next/link'

import {PiUserCircle} from 'react-icons/pi'

export default function ProfileDashBoard(){
    return(
        <Link href='/profile' className='button-outline'>
            <>Hasabym</>
            <PiUserCircle className='icons'/>
        </Link>
    )
}