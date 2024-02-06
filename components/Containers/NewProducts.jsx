import ProductContainer from './ProductContainer/ProductContainer'

export default async function NewProducts(){
    const res = await fetch('http://localhost:5000/products', {
        method: 'GET',
        cache: 'no-store'
    })
    const products = await res.json()

    return(
        <div className='flex flex-col max-width'>
            <h2 className='bg-grey-50 rounded-[4px] center text-lg text-fancy-700 font-semibold my-2 px-2 h-10 w-fit'>Täze harytlar 🔥</h2>
            <div className='grid-container'>
                {products?.map(item => {
                    return(
                        <ProductContainer
                            key={item.id}
                            productInfo={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}