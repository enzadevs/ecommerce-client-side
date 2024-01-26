import Link from 'next/link'

export default function Footer(){
    return(
        <footer className='border-t bg-grey-50 mt-auto h-fit'>
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-between pt-6 pb-16 max-width'>
                <div className='flex flex-col items-center sm:items-start gap-4'>
                    <Link href='/' className='text-fancy-700 text-xl font-bold'>Satyn Al</Link>
                    <p>Developed by <Link href='https://alemtilsimat.com/' className='nav-link'>Älem Tilsimat HJ</Link>.</p>
                </div>
                <div className='flex flex-col items-center sm:items-start gap-4'>
                    <h2 className='footer-header'>Hyzmatlar</h2>
                    <p href='/advertisement' className='nav-link'>Mahabat</p>
                    <p href='/advertisement#marketing' className='nav-link'>Marketing</p>
                    <p href='/contact#support' className='nav-link'>Haryt hödürlemek</p>
                </div>
                <div className='flex flex-col items-center sm:items-start gap-4'>
                    <h2 className='footer-header'>Biz barada</h2>
                    <p href='/vacancy' className='nav-link'>Wakansiýalar</p>
                    <p href='/contact#address' className='nav-link'>Ýerleşýän ýerimiz</p>
                    <p href='/contact' className='nav-link'>Habarlaşmak üçin</p>
                </div>
                <div className='flex flex-col items-center sm:items-start gap-4'>
                    <h2 className='footer-header'>Düzgünler</h2>
                    <p href='/faq' className='nav-link'>Köp soralýan soraglar</p>
                    <p href='/privacy' className='nav-link'>Gizlinlik syýasaty</p>
                </div>
            </div>
        </footer>
    )
}