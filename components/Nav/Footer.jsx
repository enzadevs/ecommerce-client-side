import Link from 'next/link'

export default function Footer(){
    return(
        <footer>
            <nav className='footer-container'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-grey-900 text-xl font-bold'>E-Commerce</h2>
                    <p>Developed by <Link href='https://alemtilsimat.com/' className='nav-link'>Älem Tilsimat HJ</Link>.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='footer-header'>Hyzmatlar</h2>
                    <Link href='/advertisement' className='nav-link'>Mahabat</Link>
                    <Link href='/advertisement#marketing' className='nav-link'>Marketing</Link>
                    <Link href='/contact#support' className='nav-link'>Haryt hödürlemek</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='footer-header'>Biz barada</h2>
                    <Link href='/vacancy' className='nav-link'>Wakansiýalar</Link>
                    <Link href='/contact#address' className='nav-link'>Ýerleşýän ýerimiz</Link>
                    <Link href='/contact' className='nav-link'>Habarlaşmak üçin</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='footer-header'>Düzgünler</h2>
                    <Link href='/faq' className='nav-link'>Köp soralýan soraglar</Link>
                    <Link href='/privacy' className='nav-link'>Gizlinlik syýasaty</Link>
                </div>
            </nav>
        </footer>
    )
}