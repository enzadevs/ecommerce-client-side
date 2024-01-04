import 'app/globals.css'
import ThemeWrapper from 'components/Functions/ThemeWrapper'
import TopProgressBar from 'components/Nav/TopProgressBar'

export const metadata = {
    title: 'E-Commerce',
    description: 'E-Commerce',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1',
}

import {Comfortaa} from 'next/font/google'

const comfortaa = Comfortaa({
    subsets: ['latin','cyrillic'],
    display: 'swap'
})

export default function RootLayout({children,params}){
    return(
        <html lang={params.locale} className={comfortaa.className} suppressHydrationWarning>
            <body className=''>
                <TopProgressBar/>
                <ThemeWrapper>
                    {children}
                </ThemeWrapper>
            </body>
        </html>
    )
}