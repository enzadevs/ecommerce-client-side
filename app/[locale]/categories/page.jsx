import Link from 'next/link'

export default function SalesPage(){
    return(
        <div className='flex flex-col gap-4'>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>Ähli bölümler</h2>
            <div className='grid-container'>
                <ul className='flex flex-col gap-[2px] w-full'>
                    <Link href='/' className='nav-link flex-row-center gap-2 font-bold'>Elektronika</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                </ul>
                <ul className='flex flex-col gap-[2px] w-full'>
                    <Link href='/' className='nav-link flex-row-center gap-2 font-bold'>Saglyk we himiýa</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                </ul>
                <ul className='flex flex-col gap-[2px] w-full'>
                    <Link href='/' className='nav-link flex-row-center gap-2 font-bold'>Öý enjamlary</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                </ul>
                <ul className='flex flex-col gap-[2px] w-full'>
                    <Link href='/' className='nav-link flex-row-center gap-2 font-bold'>Erkek egin-eşik</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                </ul>
                <ul className='flex flex-col gap-[2px] w-full'>
                    <Link href='/' className='nav-link flex-row-center gap-2 font-bold'>Aýal egin-eşik</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                </ul>
                <ul className='flex flex-col gap-[2px] w-full'>
                    <Link href='/' className='nav-link flex-row-center gap-2 font-bold'>Çagalar üçin</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                    <Link href='/' className='nav-link'>Sub Category</Link>
                </ul>
            </div>
        </div>
    )
}