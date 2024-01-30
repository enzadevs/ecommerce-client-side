import Link from 'next/link'
import NavSearchBox from './NavSearchBox'
import {HiOutlineHome} from 'react-icons/hi2'
import {TbCategory2} from 'react-icons/tb'
import {PiShoppingCartSimple,PiHeart,PiUserCircle} from 'react-icons/pi'
export default function NavBar(){
    return(
        <nav className='flex-row-center gap-2 md:gap-4 h-fit max-width'>
            <Link href='/' className='button-outline center text-base font-semibold w-11'>
                Al
            </Link>
            <NavSearchBox/>
            <span className='nav-bar-buttons-container'>
                <Link href='/' className='nav-button md:hidden'>
                    <HiOutlineHome className='h-6 w-6'/>
                </Link>
                <Link href='/categories' className='nav-button md:hidden'>
                    <TbCategory2 className='h-6 w-6'/>
                </Link>
                <Link href='/profile/liked' className='nav-button'>
                    <PiHeart className='h-6 w-6 md:icons'/>
                    <p className='hidden md:block'>Halanlarym</p>
                </Link>
                <Link href='/profile/cart' className='nav-button'>
                    <PiShoppingCartSimple className='h-6 w-6 md:icons'/>
                    <p className='block'>0</p>
                </Link>
                <Link href='/profile' className='nav-button'>
                    <PiUserCircle className='h-6 w-6 md:icons'/>
                    <p className='hidden md:block'>Hasabym</p>
                </Link>
            </span>
        </nav>
    )
}