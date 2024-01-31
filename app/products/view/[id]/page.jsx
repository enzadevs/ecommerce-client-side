'use client'

import useSWR from 'swr'
import ProductsSwiper from 'components/Functions/ProductsSwiper'
import { useIsSignedInStore } from 'global/IsSignedIn'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ProductPage({params}){
    const currentUserObject = useIsSignedInStore(state => state.currentUserObject)
    const { data, error, isLoading } = useSWR(`http://localhost:5000/products/${params.id}`, fetcher)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        console.error('Error fetching user data:', error)
        return <p>Error fetching products data</p>
    }

    const { title,sell_price,description,barcode,rating } = data

    async function handleProductAddToCart() {
        try {
            const response = await fetch(`http://localhost:5000/functions/add-to-cart/${data.id}/${currentUserObject}`, {
                method: 'POST',
            })
    
            if (response.ok) {
                const result = await response.json()
                console.log('Product added to cart:', result.message)
            } else {
                console.error('Failed to add product to cart')
            }
        } catch (error) {
            console.error('Error adding product to cart:', error)
        }
    }

    return(
        <div className='flex flex-col gap-2 md:flex-row min-h-[768px] py-4 md:py-8'>
            <div className='border-b pb-4 md:flex-[50%] md:max-w-[50%] md:border-r md:px-2 w-full'>
                <ProductsSwiper images={data.product_images}/>
            </div>
            <div className='flex flex-col gap-4 md:flex-[50%] md:max-w-[50%] px-4 w-full'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <p><span className='text-base font-bold'>Описание</span> : {description} In this modification, the isAuthCheckComplete variable is assumed to be a state in your useIsSignedInStore that indicates whether the authentication status check is complete. If this state is false, it renders a loading message. Once the authentication status is determined, it renders either the ProfileInfoContainer or LoginPage component accordingly. Ensure that you update your useIsSignedInStore implementation to include the isAuthCheckComplete state and update it appropriately when the authentication status check is complete.</p>
                    <p><span className='text-base font-bold'>Рейтинг</span> : {rating}</p>
                </div>
                <div className='border rounded-[4px] flex-row-center justify-around gap-2 h-20'>
                    <div className='bg-grey-100 border border-grey-200 rounded-[4px] center font-bold text-lg px-8 h-11'>
                        {sell_price} man.
                    </div>
                    <button
                        onClick={handleProductAddToCart}
                        className='button-primary'>
                        Sebede goş
                    </button>
                </div>
            </div>
        </div>
    )
}