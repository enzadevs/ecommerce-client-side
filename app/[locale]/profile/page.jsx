export default function ProfilePage(){
    return(
        <div className='flex flex-col gap-4'>
            <h2 className='h2-headers'>Ваши данные</h2>
            <div className='text-grey-900 grid grid-cols-2 gap-4 w-full'>
                <div className='bg-grey-100 rounded-lg flex-row-center justify-between px-4 h-10'>
                    <p>Doly adyňyz :</p>
                    <p className='font-semibold'>Pylanyew Pylany</p>
                </div>
                <div className='bg-grey-100 rounded-lg flex-row-center justify-between px-4 h-10'>
                    <p>El telefon belgiňiz :</p>
                    <p className='font-semibold'>+99362934985</p>
                </div>
                <div className='bg-grey-100 rounded-lg flex-row-center justify-between px-4 h-10'>
                    <p>Şäheriňiz :</p>
                    <p className='font-semibold'>Aşgabat</p>
                </div>
                <div className='bg-grey-100 rounded-lg flex-row-center justify-between px-4 h-10'>
                    <p>Adresiňiz :</p>
                    <p className='font-semibold'>Gaudan {'A'}, 30 jay, 24 kw.</p>
                </div>
            </div>
        </div>
    )
}