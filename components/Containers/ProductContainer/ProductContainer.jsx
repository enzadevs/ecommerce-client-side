import Image from 'next/image'
import Link from 'next/link'
import {TbShoppingCartPlus} from 'react-icons/tb'
import {PiHeart} from 'react-icons/pi'

export default function ProductContainer({productInfo}){
    return(
        <div className='product-card'>
            <span className='product-buttons-container'>
                <button className='product-button'>
                    <TbShoppingCartPlus className='icons'/>
                </button>
                <button className='product-button'>
                    <PiHeart className='icons'/>
                </button>
            </span>
            <div className='product-image-wrapper'>
                Image
            </div>
            <Link href='/wherever' className='flex flex-col px-2'>
                <p className='product-title'>Беспроводные наушники JBL Tune 510BT, microUSB Whatever it takes to bee </p>
                <span className='flex-row-center h-8'>
                    <p className='product-brand'>JBL</p>
                    <span className='flex-row-center justify-end gap-2 flex-[40%] max-w-[40%]'>
                        <p className='text-red-500 italic line-through'>129 $</p>
                        <p className='text-fancy-600 text-xl font-bold'>99 $</p>
                    </span>
                </span>
            </Link>
        </div>
    )
}