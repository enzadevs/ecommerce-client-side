import NewsContainer from 'components/Containers/NewsContainer/NewsContainer'

export default function NewsPage(){
    return(
        <div className='flex flex-col gap-2 py-4 max-width'>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>Täzelikler</h2>
            <NewsContainer/>
            <NewsContainer/>
            <NewsContainer/>
            <NewsContainer/>
        </div>
    )
}