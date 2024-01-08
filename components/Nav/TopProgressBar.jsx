'use client'

import NextTopLoader from 'nextjs-toploader'

export default function TopProgressBar(){
    return(
        <NextTopLoader
            color='#60e1a9'
            height={4}
            showSpinner={false}
        />
    )
}