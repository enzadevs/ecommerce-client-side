import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineDesktop} from 'react-icons/ai'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {TbMoodKid} from 'react-icons/tb'
import {BsArrowThroughHeart} from 'react-icons/bs'
import {IoHomeOutline,IoTodayOutline} from 'react-icons/io5'
import {PiTShirtLight,PiDressLight} from 'react-icons/pi'

export default function AllCategoriesMenu(){
    return(
        <div className='relative dropdown dropdown-hover'>
            <button className='button-small'>
                <RxHamburgerMenu className='icons'/>
                Ähli kategoriýalar
            </button>
            <div className='bg-grey-100 border border-grey-200 dropdown-content rounded-lg grid-template-rows absolute top-10 px-2 min-h-[360px] w-[1280px] z-[2]'>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Elektronika <AiOutlineDesktop className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 1</Link>
                        <Link href='' className='nav-link'>SubCategory 2</Link>
                        <Link href='' className='nav-link'>SubCategory 3</Link>
                        <Link href='' className='nav-link'>SubCategory 4</Link>
                        <Link href='' className='nav-link'>SubCategory 5</Link>
                        <Link href='' className='nav-link'>SubCategory 7</Link>
                        <Link href='' className='nav-link'>SubCategory 8</Link>
                        <Link href='' className='nav-link'>SubCategory 9</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Aýal egin-eşik <PiDressLight className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 1</Link>
                        <Link href='' className='nav-link'>SubCategory 2</Link>
                        <Link href='' className='nav-link'>SubCategory 3</Link>
                        <Link href='' className='nav-link'>SubCategory 4</Link>
                        <Link href='' className='nav-link'>SubCategory 6</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Erkek egin-eşik <PiTShirtLight className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 1</Link>
                        <Link href='' className='nav-link'>SubCategory 2</Link>
                        <Link href='' className='nav-link'>SubCategory 3</Link>
                        <Link href='' className='nav-link'>SubCategory 4</Link>
                        <Link href='' className='nav-link'>SubCategory 5</Link>
                        <Link href='' className='nav-link'>SubCategory 6</Link>
                        <Link href='' className='nav-link'>SubCategory 7</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Çagalar üçin <TbMoodKid className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 4</Link>
                        <Link href='' className='nav-link'>SubCategory 5</Link>
                        <Link href='' className='nav-link'>SubCategory 6</Link>
                        <Link href='' className='nav-link'>SubCategory 7</Link>
                        <Link href='' className='nav-link'>SubCategory 8</Link>
                        <Link href='' className='nav-link'>SubCategory 9</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Gündelik <IoTodayOutline className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 1</Link>
                        <Link href='' className='nav-link'>SubCategory 2</Link>
                        <Link href='' className='nav-link'>SubCategory 3</Link>
                        <Link href='' className='nav-link'>SubCategory 4</Link>
                        <Link href='' className='nav-link'>SubCategory 5</Link>
                        <Link href='' className='nav-link'>SubCategory 6</Link>
                        <Link href='' className='nav-link'>SubCategory 7</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Saglyk <MdOutlineHealthAndSafety className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 1</Link>
                        <Link href='' className='nav-link'>SubCategory 2</Link>
                        <Link href='' className='nav-link'>SubCategory 3</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Öý bezegleri <IoHomeOutline className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 1</Link>
                        <Link href='' className='nav-link'>SubCategory 2</Link>
                        <Link href='' className='nav-link'>SubCategory 4</Link>
                        <Link href='' className='nav-link'>SubCategory 5</Link>
                        <Link href='' className='nav-link'>SubCategory 8</Link>
                        <Link href='' className='nav-link'>SubCategory 9</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 py-2 px-4 h-fit w-fit'>
                    <h3 className='h3-headers'>Gözellik we kosmetika <BsArrowThroughHeart className='icons'/></h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href='' className='nav-link'>SubCategory 1</Link>
                        <Link href='' className='nav-link'>SubCategory 2</Link>
                        <Link href='' className='nav-link'>SubCategory 3</Link>
                        <Link href='' className='nav-link'>SubCategory 4</Link>
                        <Link href='' className='nav-link'>SubCategory 5</Link>
                        <Link href='' className='nav-link'>SubCategory 6</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}