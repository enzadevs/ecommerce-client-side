'use client'

import useSWR from 'swr'
import { useIsSignedInStore } from 'global/IsSignedIn'
import ProductContainer from 'components/Containers/ProductContainer/ProductContainer'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function LikedProductsPage() {
    const currentUserObject = useIsSignedInStore((state) => state.currentUserObject)

    const { data: userData, error, isLoading } = useSWR(`http://localhost:5000/users/${currentUserObject}`,fetcher)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        console.error('Error fetching user data:', error)
        return <p>Error fetching user data</p>
    }

    const { liked_products } = userData

    return (
        <div className='flex flex-col gap-4' suppressHydrationWarning>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>
                Halanlarym
            </h2>
            <div className='grid-container'>
                {liked_products?.map((likedProduct, index) => (
                    <ProductContainer
                        key={index}
                        productInfo={likedProduct}
                    />
                ))}
            </div>
        </div>
    )
}