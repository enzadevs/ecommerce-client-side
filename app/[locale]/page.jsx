import Highlights from 'components/Nav/Highlights'
import IndexSwiper from 'components/Functions/IndexSwiper'
import NewProducts from 'components/Containers/NewProducts'
import DailyProducts from 'components/Containers/DailyProducts'
import Groceries from 'components/Containers/Groceries'

export default function HomePage(){
    return(
        <div className='flex flex-col gap-4 mb-4'>
            <Highlights/>
            <IndexSwiper/>
            <NewProducts/>
            <DailyProducts/>
            <Groceries/>
        </div>
    )
}