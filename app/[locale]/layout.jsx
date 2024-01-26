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

import {Noto_Sans} from 'next/font/google'

const notosans = Noto_Sans({
    subsets: ['latin','cyrillic'],
    display: 'swap'
})

export default function RootLayout({children,params}){
    return(
        <html lang={params.locale} className={notosans.className} suppressHydrationWarning>
            <body className='flex flex-col min-h-screen'>
                <span className='border-b shadow-sm pb-2 sticky top-0 w-full z-[2]'>
                    <NavBar/>
                    {/* <SubNavBar/> */}
                </span>
                {children}
                {/* <Footer/> */}
            </body>
        </html>
    )
}