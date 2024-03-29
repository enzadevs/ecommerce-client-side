import 'app/globals.css'
import NavBar from 'components/Nav/NavBar'
import SubNavBar from 'components/Nav/SubNavBar'
import Footer from 'components/Nav/Footer'

export const metadata = {
    title: 'Satyn Al',
    description: 'Satyn Al Online Sowda Merkezi',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1',
}

import {Manrope} from 'next/font/google'

const currentFont = Manrope({
    subsets: ['latin','cyrillic'],
    display: 'swap',
    weight: ['300','400','500','700']
})

export default function RootLayout({children,params}){
    return(
        <html lang={params.locale} className={currentFont.className} suppressHydrationWarning>
            <body className='flex flex-col min-h-screen'>
                <div className='bg-white border-b border-grey-200 shadow-sm sticky top-0 pb-2 h-fit w-full z-10'>
                    <NavBar/>
                    <SubNavBar/>
                </div>
                {children}
                <Footer/>
            </body>
        </html>
    )
}