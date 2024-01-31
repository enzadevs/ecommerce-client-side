'use client'

import useSWR from 'swr'
import Link from 'next/link'
import {PiShoppingCartSimple} from 'react-icons/pi'
import { useIsSignedInStore } from 'global/IsSignedIn'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ShoppingCart(){
    const currentUserObject = useIsSignedInStore(state => state.currentUserObject)

    const { data: userData, error, isLoading } = useSWR(`http://localhost:5000/users/${currentUserObject}`,fetcher)

    if (isLoading) {
        return <p className='nav-button'>...</p>
    }

    if (error) {
        console.error('Error fetching user data:', error)
        return <p>Error</p>
    }

    const totalQuantity = userData.shopping_cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)

    return(
        <Link href='/profile/cart' className='nav-button'>
            <PiShoppingCartSimple className='h-6 w-6 md:icons'/>
            <p className='block'>{totalQuantity}</p>
        </Link>
    )
}