'use client'

import { useState } from 'react'
import { useIsSignedInStore } from 'global/IsSignedIn'
import Image from 'next/image'
import Link from 'next/link'
import {PiHeart} from 'react-icons/pi'
import {TbShoppingCartPlus} from 'react-icons/tb'

export default function ProductContainer({productInfo}){
    const [addingToCart, setAddingToCart] = useState(false)
    const currentUserObject = useIsSignedInStore(state => state.currentUserObject)
    const {id,title,sell_price,product_images} = productInfo

    const handleAddToLiked = async () => {
        if (!addingToCart) {
            setAddingToCart(true)

            try {
                const response = await fetch(`http://localhost:5000/functions/add-to-liked/${id}/${currentUserObject}/`, {
                    method: 'POST',
                })

                if (response.ok) {
                    console.log('Product added to liked successfully')
                } else {
                    console.error('Failed to add product to liked')
                }
            } catch (error) {
                console.error('Error adding product to liked:', error)
            } finally {
                setAddingToCart(false)
            }
        }
    }

    const handleAddToCart = async () => {
        if (!addingToCart) {
            setAddingToCart(true)

            try {
                const response = await fetch(`http://localhost:5000/functions/add-to-cart/${id}/${currentUserObject}/`, {
                    method: 'POST',
                })

                if (response.ok) {
                    console.log('Product added to cart successfully')
                } else {
                    console.error('Failed to add product to cart')
                }
            } catch (error) {
                console.error('Error adding product to cart:', error)
            } finally {
                setAddingToCart(false)
            }
        }
    }

    return(
        <div className='border rounded-[4px] flex flex-col transition border-grey-200 hover:border-fancy-700 hover:shadow-lg pb-2 h-fit'>
            <div className='relative'>
                <div className='center absolute top-0 right-0 h-8 w-8 xs:h-10 xs:w-10 z-[4]'>
                    <button className='bg-white icons-wrapper hover:text-red-500'  onClick={handleAddToLiked} disabled={addingToCart}>
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
                <button className='button-primary justify-center' onClick={handleAddToCart} disabled={addingToCart}>
                    <TbShoppingCartPlus className='icons'/>
                    <>Sebede goş</>
                </button>
            </div>
        </div>
    )
}