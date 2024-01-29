import ProductContainer from 'components/Containers/ProductContainer/ProductContainer'

export default async function NewStuffPage(){
    const res = await fetch('http://localhost:5000/products', {
        method: 'GET',
        cache: 'no-store'
    })
    const products = await res.json()

    return(
        <div className='flex flex-col gap-4 my-4 max-width'>
            <h2 className='bg-grey-50 rounded-[4px] center text-xl text-fancy-700 font-bold px-2 h-10 w-fit'>Täze harytlar</h2>
            <div className='grid-container'>
                {/* {products.map(item => {
                    return(
                        <ProductContainer
                            key={item.id}
                            productInfo={item}
                        />
                    )
                })} */}
                {Array.from({ length: 17 }).map((_, index) => (
                    <ProductContainer
                        key={index}
                        productInfo={products[0]}
                    />
                ))}
            </div>
        </div>
    )
}