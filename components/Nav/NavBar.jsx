import Link from 'next/link'
import NavSearchBox from './NavSearchBox'
import ProfileDashBoard from './ProfileDashBoard'
import {PiShoppingCartSimple,PiHeart} from 'react-icons/pi'

export default function NavBar(){
    return(
        <nav className='flex-row-center gap-4 h-16 max-width'>
            <Link href='/' className='text-fancy-600 text-lg font-semibold flex-row-center gap-2 h-10'>
                E-Commerce
            </Link>
            <NavSearchBox/>
            <span className='flex-row-center gap-2 rounded-lg ml-auto h-10'>
                <Link href='/' className='button-outline hover:text-white'>
                    <>Halanlarym</>
                    <PiHeart className='icons'/>
                </Link>
                <Link href='/' className='button-outline hover:text-white'>
                    <>Sebet</>
                    <PiShoppingCartSimple className='icons'/>
                </Link>
                <ProfileDashBoard/>
                <button className='button-outline'>TM</button>
            </span>
        </nav>
    )
}