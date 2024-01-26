import Link from 'next/link'
import NavSearchBox from './NavSearchBox'
import {PiShoppingCartSimple,PiHeart,PiUserCircle} from 'react-icons/pi'
import {HiOutlineHome} from 'react-icons/hi2'
import {TbCategory2} from 'react-icons/tb'

export default function NavBar(){
    return(
        <nav className='border-b flex-row-center gap-2 md:gap-4 h-fit max-width'>
            <Link href='/' className='button-outline text-base font-semibold'>
                Satyn Al
            </Link>
            <NavSearchBox/>
            <span className='nav-bar-buttons-container'>
                <Link href='/' className='nav-button md:hidden'>
                    <HiOutlineHome className='icons'/>
                    <p className='text-[8px]'>Home</p>
                </Link>
                <Link href='/categories' className='nav-button'>
                    <TbCategory2 className='icons'/>
                    <p className='text-[8px]'>Bölümler</p>
                </Link>
                <Link href='/profile/liked' className='nav-button'>
                    <PiHeart className='icons'/>
                    <p className='hidden md:block'>Halanlarym</p>
                </Link>
                <Link href='/profile/cart' className='nav-button'>
                    <PiShoppingCartSimple className='icons'/>
                    <p className='hidden md:block'>Sebet</p>
                </Link>
                <Link href='/profile' className='nav-button'>
                    <PiUserCircle className='icons'/>
                    <p className='hidden md:block'>Hasabym</p>
                </Link>
            </span>
            <button className='button-outline center w-11'>TM</button>
        </nav>
    )
}