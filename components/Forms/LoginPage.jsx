import Image from 'next/image'
import UserForm from 'components/Forms/UserForm'
import FancyImage from 'public/assets/woman-with-shopping-bags-jumping.jpg'

export default function LoginPage(){
    return(
        <div className='center h-[768px]'>
            <div className='border-2 border-grey-100 rounded-xl flex-row-center w-[768px]'>
                <div className='rounded-xl relative flex-[50%] max-w-[50%] h-[512px]'>
                    <Image
                        src={FancyImage}
                        alt='photo of jumping woman with bags'
                        height={0}
                        width={0}
                        className='object-cover rounded-l-xl z-[-2]'
                        fill
                        sizes='50vw'
                    >
                    </Image>
                </div>
                <div className='flex flex-col items-center gap-4 flex-[50%] max-w-[50%] px-4'>
                    <h2 className='text-grey-900 text-xl font-bold'>Online dükanymyza hoş geldiňiz!</h2>
                    <UserForm/>
                </div>
            </div>
        </div>
    )
}