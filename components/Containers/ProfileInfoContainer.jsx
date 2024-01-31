'use client'

import useSWR from 'swr'
import { useIsSignedInStore } from 'global/IsSignedIn'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ProfileInfoContainer() {
    const currentUserObject = useIsSignedInStore(state => state.currentUserObject)
    const { data, error, isLoading } = useSWR(`http://localhost:5000/users/${currentUserObject}`, fetcher)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        console.error('Error fetching user data:', error)
        return <p>Error fetching user data</p>
    }

    return (
        <div className='flex flex-col gap-4' suppressHydrationWarning>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>Profil</h2>
            <div className='border rounded-[4px] text-base flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 p-4'>
                <div className='flex flex-col gap-2 h-auto w-full'>
                    <div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>Doly adyňyz :</p>
                        {data?.full_name || 'No data available'}
                    </div>
                    <div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>Şäheriňiz :</p>
                        {data?.city?.title || 'No data available'}
                    </div>
                    <div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>Adresiňiz :</p>
                        {data?.address || 'No data available'}
                    </div>
                    <div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>El telefon belgiňiz :</p>
                        {data?.phone_number || 'No data available'}
                    </div>
                </div>
                <div className='flex flex-col items-center gap-2 w-full'>
                    Test
                </div>
            </div>
        </div>
    )
}