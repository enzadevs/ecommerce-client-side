import Highlights from 'components/Nav/Highlights'
import IndexSwiper from 'components/Functions/IndexSwiper'
import NewProducts from 'components/Containers/NewProducts'
import TopProducts from 'components/Containers/TopProducts'

export default function HomePage(){
    return(
        <div className='flex flex-col mb-4'>
            <Highlights/>
            <IndexSwiper/>
            <NewProducts/>
            <TopProducts/>
        </div>
    )
}