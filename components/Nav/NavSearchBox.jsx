'use client'

import {CiSearch} from 'react-icons/ci'

export default function NavSearchBox(){
    return(
        <div className='flex-grow flex-row-center relative h-16'>
            <input
                type='text'
                className='text-sm input-primary w-full'
                placeholder='Gözleg sözi'
                minLength={2}
                maxLength={64}
            ></input>
            <button className='absolute center top-[10px] right-0 h-11 w-11'>
                <CiSearch className='icons'/>
            </button>
        </div>
    )
}