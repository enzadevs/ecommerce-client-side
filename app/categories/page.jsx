import Link from 'next/link'
import {AiOutlineDesktop} from 'react-icons/ai'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {IoHomeOutline,IoTodayOutline} from 'react-icons/io5'
import {PiTShirtLight,PiDressLight} from 'react-icons/pi'
import {TbMoodKid} from 'react-icons/tb'

export default function SalesPage(){
    return(
        <div className='flex flex-col gap-4'>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>Ähli bölümler</h2>
            <div className='categories-grid px-2'>
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
    )
}