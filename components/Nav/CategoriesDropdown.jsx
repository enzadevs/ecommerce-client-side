import Link from 'next/link'
import {IoMenu} from 'react-icons/io5'
import {AiOutlineDesktop} from 'react-icons/ai'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {IoHomeOutline,IoTodayOutline} from 'react-icons/io5'
import {PiTShirtLight,PiDressLight} from 'react-icons/pi'
import {TbMoodKid} from 'react-icons/tb'

export default function CategoriesDropdown(){
    return(
        <div className='hidden md:dropdown h-10'>
            <div tabIndex={0} role='button' className='rounded-[4px] font-bold flex-row-center gap-2 transition hover:bg-fancy-100 px-2 h-full'>
                <IoMenu className='icons'/>
                Kategoriýalar
            </div>
            <div tabIndex={0} className='dropdown-content mt-4 md:w-[768px] lg:w-[1000px]'>
                <div className='bg-grey-100 border rounded-[4px] shadow-lg categories-grid py-2 px-4'>
                    <ul className='flex flex-col gap-1'>
                        <Link href='/' className='nav-link flex-row-center gap-1 font-bold h-8 w-fit'><AiOutlineDesktop className='icons'/>Elektronika</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                        <Link href='/' className='nav-link flex-row-center gap-1 font-bold h-8 w-fit'><MdOutlineHealthAndSafety className='icons'/>Saglyk</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                        <Link href='/' className='nav-link flex-row-center gap-1 font-bold h-8 w-fit'><IoHomeOutline className='icons'/>Öý harytlary</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                        <Link href='/' className='nav-link flex-row-center gap-1 font-bold h-8 w-fit'><IoTodayOutline className='icons'/>Gündelik</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                        <Link href='/' className='nav-link flex-row-center gap-1 font-bold h-8 w-fit'><PiDressLight className='icons'/>Aýallar üçin</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                        <Link href='/' className='nav-link flex-row-center gap-1 font-bold h-8 w-fit'><PiTShirtLight className='icons'/>Erkekler üçin</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                        <Link href='/' className='nav-link flex-row-center gap-1 font-bold h-8 w-fit'><TbMoodKid className='icons'/>Çagalara</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                        <Link href='/' className='nav-link h-6'>Sub category</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}