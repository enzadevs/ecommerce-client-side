import Link from 'next/link'
import {PiFire,PiHeart,PiPercent} from 'react-icons/pi'
import {LiaAppleAltSolid} from 'react-icons/lia'
import {IoNewspaperOutline} from 'react-icons/io5'
import CategoriesDropdown from './CategoriesDropdown'

export default function SubNavBar(){
    return(
        <div className='flex-row-center max-width'>
            <CategoriesDropdown/>
            <div className='flex-row-center justify-between gap-1 overflow-x-scroll overflow-y-hidden max-w-full md:gap-2 hide-scrollbar w-full'>
                <Link href='/grocery' className='links'>
                    <LiaAppleAltSolid className='text-fancy-700 icons'/>
                    <>FRESH</>
                </Link>
                <Link href='/new' className='links'>
                    <PiFire className='text-orange-500 icons'/>
                    <>Täze</>
                </Link>
                <Link href='/popular' className='links'>
                    <PiHeart className='text-red-500 icons'/>
                    <>Iň köp halananlar</>
                </Link>
                <Link href='/sale' className='links'>
                    <PiPercent className='text-blue-500 icons'/>
                    <>Aksiýalar</>   
                </Link>
                <Link href='/news' className='links'>
                    <IoNewspaperOutline className='text-amber-700 icons'/>
                    <>Täzelikler</>
                </Link>
            </div>
        </div>
    )
}