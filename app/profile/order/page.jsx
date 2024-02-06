'use client'

import useSWR from 'swr'
import { useState } from 'react'
import Selector from 'components/Containers/Selector'
import { useIsSignedInStore } from 'global/IsSignedIn'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function OrderPage(){
    const [paymentType,setPaymentType] = useState()
    const [deliveryType,setDeliveryType] = useState()
    const currentUserObject = useIsSignedInStore((state) => state.currentUserObject)

    const handlePaymentTypeSelection = selectedOption => {
        setPaymentType(selectedOption ? selectedOption.id : null)
    }

    const handleDeliveryTypeSelection = selectedOption => {
        setDeliveryType(selectedOption ? selectedOption.id : null)
    }

    const { data: payment_types } = useSWR(`http://localhost:5000/payment_types`,fetcher)
    const { data: delivery_types } = useSWR(`http://localhost:5000/delivery_types`,fetcher)
    const { data: userData, error, isLoading } = useSWR(`http://localhost:5000/users/${currentUserObject}`,fetcher)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        console.error('Error fetching user data:', error)
        return <p>Error fetching user data</p>
    }

    const shoppingCart = userData.shopping_cart

    const totalSum = shoppingCart.reduce((sum, cartItem) => {
        const sellPrice = cartItem.product.sell_price
        const quantity = cartItem.quantity
        return sum + (sellPrice * quantity)
    }, 0)

    const handleOrderSubmit = async (e) => {
        e.preventDefault()
        const orderData = {
            phone_number: userData.phone_number,
            address: userData.address,
            shopping_carts: shoppingCart.map(cartItem => ({
                id: cartItem.id,
                quantity: cartItem.quantity
            })),
            total_sum: totalSum,
            deliveryTypeId: deliveryType,
            paymentTypeId: paymentType,
            comment: '' 
        }

        try {
            const response = await fetch('http://localhost:5000/orders/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })

            if (!response.ok) {
                throw new Error('Failed to submit order')
            }
            console.log('Order submitted successfully')
        } catch (error) {
            console.error('Error submitting order:', error)
        }
    }

    return(
        <div className='flex flex-col gap-4' suppressHydrationWarning>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>
                Sarga
            </h2>
            <div className='border rounded-[4px] flex flex-col gap-2 pb-2 px-2 w-full md:max-w-[50%]'>
                <div className='border-b flex-row-center justify-between h-10'>
                    <p className='font-semibold'>Kime :</p>
                    <>{userData.full_name}</>
                </div>
                <div className='border-b flex-row-center justify-between h-10'>
                    <p className='font-semibold'>El telefon belgiňiz :</p>
                    <>{userData.phone_number}</>
                </div>
                <div className='border-b flex-row-center justify-between h-10'>
                    <p className='font-semibold'>Şäher :</p>
                    <>{userData.city.title}</>
                </div>
                <div className='border-b flex-row-center justify-between h-10'>
                    <p className='font-semibold'>Address :</p>
                    <>{userData.address}</>
                </div>
                <div className='border-b flex-row-center justify-between h-10'>
                    <p className='font-semibold'>Töleg görnüşi :</p>
                    <Selector
                        selectData={payment_types}
                        onSelect={handlePaymentTypeSelection}
                        placeholder='Saýla'
                        className='h-10 w-[200px]'
                    />
                </div>
                <div className='border-b flex-row-center justify-between h-10'>
                    <p className='font-semibold'>Dostawka görnüşi :</p>
                    <Selector
                        selectData={delivery_types}
                        onSelect={handleDeliveryTypeSelection}
                        placeholder='Saýla'
                        className='h-10 w-[200px]'
                    />
                </div>
                <div className='border-b flex-row-center justify-between h-10'>
                    <p className='font-semibold'>Jemi baha :</p>
                    <p className='font-bold'>{totalSum} man.</p>
                </div>
                <button className='button-primary center' onClick={handleOrderSubmit}>
                    Sarga
                </button>
            </div>
        </div>
    )
}