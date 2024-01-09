import Link from 'next/link'
import {PiUserCircle,PiShoppingCartSimple,PiHeart} from 'react-icons/pi'

export default function ProfileLayout({children}){
    return(
        <div className='border-l border-r flex min-h-[768px] max-width'>
            <div className='border-r min-h-[768px] w-72'>
                <div className='border-b flex flex-col items-center justify-center gap-2 py-4 h-fit'>
                    <div className='bg-fancy-500 rounded-full h-48 w-48'></div>
                    <p className='bg-grey-100 rounded-lg center text-center py-2 px-4'>Pylanyew Pylany</p>
                </div>
                <>
                    <Link href='/profile' className='border-b-2 center gap-2 transition hover:bg-fancy-500 hover:text-white h-10 w-full'>
                        Hasabym
                        <PiUserCircle className='icons'/>
                    </Link>
                    <Link href='/profile/cart' className='border-b-2 center gap-2 transition hover:bg-fancy-500 hover:text-white h-10 w-full'>
                        Sebet
                        <PiShoppingCartSimple className='icons'/>
                    </Link>
                    <Link href='/profile/liked' className='border-b-2 center gap-2 transition hover:bg-fancy-500 hover:text-white h-10 w-full'>
                        Halanlarym
                        <PiHeart className='icons'/>
                    </Link>
                </>
            </div>
            <div className='bg-yellow-400 flex-[80%] max-w-[80%]'>
                {children}
            </div>
        </div>
    )
}