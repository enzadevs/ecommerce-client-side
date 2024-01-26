import Image from 'next/image'
import UserForm from 'components/Forms/UserForm'
import FancyImage from 'public/assets/woman-with-shopping-bags-jumping.jpg'

export default function LoginPage(){
    return(
        <div className='center h-fit sm:h-[700px] max-width'>
            <div className='sm:shadow-md sm:border border-grey-100 rounded-[4px] sm:flex sm:flex-row sm:items-center sm:w-[750px]'>
                <div className='hidden sm:block rounded-[4px] relative flex-[50%] max-w-[50%] h-[512px]'>
                    <Image
                        src={FancyImage}
                        alt='photo of jumping woman with bags'
                        height={0}
                        width={0}
                        className='object-cover rounded-l-[4px] z-[-2]'
                        fill
                        sizes='50vw'
                    >
                    </Image>
                </div>
                <div className='flex flex-col items-center gap-2 py-8 px-4 sm:flex-[50%] sm:max-w-[50%]'>
                    <h2 className='text-center text-fancy-700 text-xl font-bold'>Online dükanymyza hoş geldiňiz!</h2>
                    <UserForm/>
                </div>
            </div>
        </div>
    )
}