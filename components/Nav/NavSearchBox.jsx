'use client'

import {CiSearch} from 'react-icons/ci'

export default function NavSearchBox(){
    return(
        <div className='flex-grow relative h-10'>
            <input
                type='text'
                className='text-sm custom-input-primary w-full'
                placeholder='Gözleg sözi'
                minLength={2}
                maxLength={64}
            ></input>
            <button className='absolute center top-0 right-0 h-10 w-10'>
                <CiSearch className='icons'/>
            </button>
        </div>
    )
}