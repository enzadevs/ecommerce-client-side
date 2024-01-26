import IndexSwiper from 'components/Functions/IndexSwiper'
import NewProducts from 'components/Containers/NewProducts'
import Groceries from 'components/Containers/Groceries'

export default function HomePage(){
    return(
        <div className='flex flex-col gap-4 my-4'>
            <IndexSwiper/>
            <NewProducts/>
            <Groceries/>
        </div>
    )
}