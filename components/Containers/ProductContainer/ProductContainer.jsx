import Image from 'next/image'
import Link from 'next/link'
import {PiHeart} from 'react-icons/pi'
import {FiPlus,FiMinus} from 'react-icons/fi'

export default function ProductContainer({productInfo}){
    const {id,title,brand,sell_price,product_images} = productInfo

    return(
        <div className='border rounded-[4px] flex flex-col transition border-grey-200 hover:border-fancy-700 hover:shadow-lg pb-2 h-fit'>
            <div className='relative'>
                <div className='center absolute top-0 right-0 h-8 w-8 xs:h-10 xs:w-10 z-[4]'>
                    <button className='bg-white icons-wrapper hover:text-red-500'>
                        <PiHeart className='icons'/>
                    </button>
                </div>
                <div className='relative rounded-t-[4px] h-40 xs:h-48'>
                    <Image
                        src={product_images[1]}
                        alt='image'
                        className='object-contain'
                        sizes='33vw'
                        fill
                    >
                    </Image>
                </div>
            </div>
            <div className='border-t flex flex-col px-2 h-fit'>
                <Link href={`products/view/${id}`} className='nav-link xs:text-base line-clamp-2 h-auto'>
                    {title}
                </Link>
                <div className='flex flex-col xs:flex-row xs:items-center h-auto'>
                    <p className='flex-row-center justify-end text-red-700 italic line-through text-xs sm:text-base h-4 sm:h-10 flex-[45%]'>20 man.</p>
                    <p className='flex-row-center justify-end text-fancy-700 text-lg font-bold h-6 sm:h-10 flex-[55%]'>{sell_price} man.</p>
                </div>
                <div className='border rounded-[4px] flex-row-center justify-between gap-2 transition hover:border-fancy-700 hover:bg-grey-50 px-4 h-8 xs:h-10'>
                    <button className='rounded-full center transition hover:bg-fancy-400 h-6 w-6 xs:h-8 xs:w-8'>
                        <FiMinus className='icons'/>
                    </button>
                    <p>0</p>
                    <button className='rounded-full center transition hover:bg-fancy-400 h-6 w-6 xs:h-8 xs:w-8'>
                        <FiPlus className='icons'/>
                    </button>
                </div>
            </div>
        </div>
    )
}