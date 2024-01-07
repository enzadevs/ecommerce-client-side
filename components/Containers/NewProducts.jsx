import Link from 'next/link'
import ProductContainer from './ProductContainer/ProductContainer'

export default function NewProducts(){
    const i = [1,2,3,4,5,6,7,8,9,10]
    
    return(
        <div className='flex flex-col max-width'>
            <div className='flex-row-center h-12'>
                <h2 className='text-xl text-fancy-600 font-bold my-2'>Täze harytlar</h2>
                <Link href='/new' className='button-small ml-auto'>Ählisi</Link>
            </div>
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