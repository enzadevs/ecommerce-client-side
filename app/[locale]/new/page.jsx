import IndexSwiper from 'components/Functions/IndexSwiper'
import ProductContainer from 'components/Containers/ProductContainer/ProductContainer'

export default function NewStuffPage(){
    const i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,36]

    return(
        <div className='flex flex-col gap-4 py-4 max-width'>
            <h2 className='h2-headers'>Täze harytlar</h2>
            <IndexSwiper/>
            <div className='grid-template-rows'>
                {i.map(item => {
                    return(
                        <ProductContainer key={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}