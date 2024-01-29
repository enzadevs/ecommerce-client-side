import Image from 'next/image'
import Link from 'next/link'
import {TbShoppingCartPlus} from 'react-icons/tb'
import {PiHeart} from 'react-icons/pi'

export default function ProductContainer({productInfo}){
    const {id,title,brand,sell_price,product_images} = productInfo

    return(
        <div className='border rounded-[4px] flex flex-col gap-2 relative transition hover:border-fancy-700 hover:shadow-lg'>
            <div className='relative h-44 md:h-56'>
                <div className='flex-row-center gap-1 absolute top-[2px] right-[2px] h-[32px] w-auto z-[4]'>
                    <button className='bg-white icons-wrapper hover:text-red-500'>
                        <PiHeart className='icons'/>
                    </button>
                    <button className='bg-white icons-wrapper hover:text-fancy-700'>
                        <TbShoppingCartPlus className='icons'/>
                    </button>
                </div>
                <div className='rounded-t-[4px] center h-44 md:h-56'>
                    <Image
                        src={product_images[0]}
                        alt='image'
                        height={0}
                        width={0}
                        style={{ height: 'auto' ,width: '100%' }}
                        className=''
                        sizes='33vw'
                    >
                    </Image>
                </div>
            </div>
            <div className='border-t px-2 w-full'>
                <Link href={`products/view/${id}`} className='md:text-base line-clamp-2 transition hover:text-fancy-700 h-auto'>{title}</Link>
                <div className='flex-row-center font-bold h-10'>
                    <h2 className='rounded-[4px] md:text-lg line-clamp-1 flex-[60%] max-w-[60%]'>{brand.title}</h2>
                    <div className='flex-row-center justify-end gap-2 flex-[50%] max-w-[50%]'>
                        <p className='md:text-lg text-fancy-700 line-clamp-1'>{sell_price} man.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}