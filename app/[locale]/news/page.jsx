import NewsContainer from 'components/Containers/NewsContainer/NewsContainer'

export default function NewsPage(){
    return(
        <div className='flex flex-col gap-2 py-4 max-width'>
            <h2 className='h2-headers'>Täzelikler</h2>
            <NewsContainer/>
            <NewsContainer/>
            <NewsContainer/>
            <NewsContainer/>
        </div>
    )
}