'use client'

import useSWR from 'swr'
import { useRef,useState } from 'react'
import { useIsSignedInStore } from 'global/IsSignedIn'
import Selector from 'components/Containers/Selector'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function UserForm(){
    const [selectedCity,setSelectedCity] = useState()
    const setIsSignedIn = useIsSignedInStore(state => state.setIsSignedIn)
    const fullNameRef = useRef()
    const phoneNumberRef = useRef()
    const passwordRef = useRef()
    const addressRef = useRef()

    const handleCitySelection = selectedOption => {
        setSelectedCity(selectedOption ? selectedOption.id : null)
    }

    const { data } = useSWR('http://localhost:5000/cities',fetcher)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userFormData = {
            full_name: fullNameRef.current.value,
            phone_number: phoneNumberRef.current.value,
            password: passwordRef.current.value,
            cityId: selectedCity,
            address: addressRef.current.valu
    }
    
        try {
            const response = await fetch('http://localhost:5000/users/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userFormData)
        })
    
        if (response.ok) {
            setIsSignedIn(true)
        } else {
            console.error('Failed to create user')
        }
        } catch (error) {
            console.error('Error creating user:', error)
        }
    }

    return(
        <div className='flex flex-col gap-4 w-full'>
            <input
                name='full_name'
                ref={fullNameRef}
                className='input-primary-custom w-full'
                placeholder='Doly adyňyz'
            ></input>
            <input
                name='phone_number'
                ref={phoneNumberRef}
                className='input-primary-custom w-full'
                placeholder='El telefon belgiňiz'
            ></input>
            <input
                name='password'
                ref={passwordRef}
                className='input-primary-custom w-full'
                placeholder='Parol dörediň'
            ></input>
            <Selector
                selectData={data}
                placeholder='Şäheriňiz'
                className='h-10'
                onSelect={handleCitySelection}
            />
            <input
                name='address'
                ref={addressRef}
                className='input-primary-custom w-full'
                placeholder='Adresiňiz'
            ></input>
            <button
                type='submit'
                onClick={handleSubmit}
                className='button-primary center'>
                Agza bol
            </button>
        </div>
    )
}