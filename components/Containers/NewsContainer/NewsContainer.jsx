import Link from 'next/link'

export default function NewsContainer(){
    return(
        <div className='bg-grey-100 rounded-[4px] flex flex-col sm:flex-row gap-4 p-4 h-fit w-full'>
            <div className='flex-grow sm:flex-[50%] sm:max-w-[50%] h-60'>
                <div className='bg-fancy-500 rounded-[4px] h-full w-full'></div>
            </div>
            <div className='flex flex-col gap-2 flex-grow sm:flex-[50%] sm:max-w-[50%]'>
                <div className='flex-row-center'>
                    <Link href='' className='text-xl font-bold transition hover:text-fancy-700'>Samsung ilkinji emeli aňly telefonlary çykarar</Link>
                    <div className='text-grey-900 ml-auto'>07.12.2024</div>
                </div>
                <div className='text-grey-900 line-clamp-4'>
                Samsung Electronics today shared its vision for how artificial intelligence (AI) technology will enable people to experience their devices more intuitively and conveniently than ever before. Presenting these ideas at a press conference at CES® 2024, Samsung teamed up with key partners to outline the technology behind this vision and how new products and services use AI capabilities to make life easier.
                </div>
            </div>
        </div>
    )
}