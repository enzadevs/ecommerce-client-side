import Link from 'next/link'
import {GrLocation} from 'react-icons/gr'
import {PiFire,PiHeart,PiGift,PiPercent} from 'react-icons/pi'
import {LiaAppleAltSolid} from 'react-icons/lia'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoNewspaperOutline} from 'react-icons/io5'

export default function SubNavBar(){
    return(
        <div className='flex-row-center justify-between max-width'>
            <Link href='/categories' className='button-small'>
                <RxHamburgerMenu className='icons'/>
                Ähli kategoriýalar
            </Link>
            <Link href='/grocery' className='button-small'>
                Gök-önümler
                <LiaAppleAltSolid className='icons'/>
            </Link>
            <Link href='/new' className='button-small'>
                Täze
                <PiFire className='icons'/>
            </Link>
            <Link href='/popular' className='button-small'>
                Iň köp halananlar
                <PiHeart className='icons'/>
            </Link>
            <Link href='/sale' className='button-small'>
                Aksiýalar   
                <PiPercent className='icons'/>
            </Link>
            <Link href='/gifts' className='button-small'>
                Sowgatlyk sertifikatlar
                <PiGift className='icons'/>
            </Link>
            <Link href='/news' className='button-small'>
                Täzelikler
                <IoNewspaperOutline className='icons'/>
            </Link>
            <button className='button-small'>
                Aşgabat ş.
                <GrLocation className='icons'/>
            </button>
        </div>
    )
}