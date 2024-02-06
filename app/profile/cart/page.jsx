'use client'

import Link from 'next/link'
import useSWR from 'swr'
import { useIsSignedInStore } from 'global/IsSignedIn'
import ProductContainerForUser from 'components/Containers/ProductContainer/ProductContainerForUser'
import {MdOutlinePayments} from 'react-icons/md'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ShoppingCart() {
    const currentUserObject = useIsSignedInStore((state) => state.currentUserObject)

    const { data: userData, error, isLoading } = useSWR(`http://localhost:5000/users/${currentUserObject}`,fetcher)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        console.error('Error fetching user data:', error)
        return <p>Error fetching user data</p>
    }

    const { shopping_cart } = userData

    return (
        <div className='flex flex-col gap-4' suppressHydrationWarning>
            <div className='flex-row-center'>
                <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>
                    Sebedim
                </h2>
                <Link href='/profile/order' className='button-primary ml-auto'>
                    <MdOutlinePayments className='icons'/>
                    Sarga
                </Link>
            </div>
            <div className='grid-container'>
                {shopping_cart?.map((cartItem, index) => (
                    <ProductContainerForUser
                        key={index}
                        productInfo={{
                            quantity: cartItem.quantity,
                            productData: cartItem.product,
                            productImages: cartItem.product.product_images,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
