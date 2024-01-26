import IndexSwiper from 'components/Functions/IndexSwiper'
import ProductContainer from 'components/Containers/ProductContainer/ProductContainer'

export default function SalesPage(){
    return(
        <div className='flex flex-col gap-4 mt-4 max-width'>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>Arzanlaşyk !</h2>
            <IndexSwiper/>
            <div className='grid-container'>
                
            </div>
        </div>
    )
}