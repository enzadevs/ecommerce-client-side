'use client'

import { useRouter } from 'next/navigation'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { UserFormSchema } from './UserFormSchema'

export default function UserForm(){
    const router = useRouter()

    return(
        <>
            <Formik
                initialValues={{
                    fullName: '',
                    phoneNumber: '',
                    password: '',
                    address: ''

                }}
                onSubmit={(values, {setSubmitting,resetForm}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        resetForm()
                    }, 500)
                }}
                validationSchema={UserFormSchema}
            >
                {({isSubmitting}) => (
                    <Form className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='fullName' type='text' className='custom-input-primary w-full pl-4' placeholder='Doly adyňyz'/>
                            <ErrorMessage name='fullName' component='span' className='text-xs text-red-600 flex items-center'/>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='phoneNumber' type='text' className='custom-input-primary w-full pl-4' placeholder='El telefon belgiňiz'/>
                            <ErrorMessage name='phoneNumber' component='span' className='text-xs text-red-600 flex items-center'/>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='password' type='password' className='custom-input-primary w-full pl-4' placeholder='Parol dörediň'/>
                            <ErrorMessage name='password' component='span' className='text-xs text-red-600 flex items-center'/>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='address' type='text' className='custom-input-primary w-full pl-4' placeholder='Adresyňyz'/>
                            <ErrorMessage name='address' component='span' className='text-xs text-red-600 flex items-center'/>
                        </div>
                        <button
                            onClick={() => console.log(true)}
                            disabled={isSubmitting} 
                            className='button-outline center'>
                            Ýatda sakla
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}