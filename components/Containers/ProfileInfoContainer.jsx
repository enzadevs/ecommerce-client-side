

export default function ProfileInfoContainer(){
    return(
        <div className='flex flex-col gap-4' suppressHydrationWarning>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>Profil</h2>
            <div className='border rounded-[4px] text-base flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 p-4'>
                <div className='flex flex-col gap-2 h-auto w-full'>
                    <div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>Doly adyňyz :</p>
                        <>{}</>
                    </div>
                    <div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>Şäheriňiz :</p>
                        <>{}</>
                    </div>
                    <div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>Adresiňiz :</p>
                        <>{}</>
                    </div><div className='border-b flex-row-center justify-between h-10'>
                        <p className='font-bold'>El telefon belgiňiz :</p>
                        <>{}</>
                    </div>     
                </div>
                <div className='flex flex-col items-center gap-2 w-full'>
                    Test
                </div>
            </div>
        </div>
    )
}