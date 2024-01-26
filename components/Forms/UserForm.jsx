'use client'

import { useIsSignedInStore } from 'global/IsSignedIn'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { UserFormSchema } from './UserFormSchema'

export default function UserForm(){
    const setIsSignedIn = useIsSignedInStore(state => state.setIsSignedIn)

    return(
        <>
            <Formik
                initialValues={{
                    full_name: '',
                    phone_number: '',
                    password: '',
                    cityId: '',
                    address: ''

                }}
                onSubmit={(values, {setSubmitting,resetForm}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        resetForm()
                    }, 500)
                }}
                // validationSchema={UserFormSchema}
            >
                {({isSubmitting}) => (
                    <Form className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='full_name' type='text' className='input-primary w-full pl-4' placeholder='Doly adyňyz'/>
                            <ErrorMessage name='full_name' component='span' className='text-xs text-red-500 flex items-center'/>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='phone_number' type='text' className='input-primary w-full pl-4' placeholder='El telefon belgiňiz'/>
                            <ErrorMessage name='phone_number' component='span' className='text-xs text-red-500 flex items-center'/>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='password' type='password' className='input-primary w-full pl-4' placeholder='Parol dörediň'/>
                            <ErrorMessage name='password' component='span' className='text-xs text-red-500 flex items-center'/>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <Field name='address' type='text' className='input-primary w-full pl-4' placeholder='Adresyňyz'/>
                            <ErrorMessage name='address' component='span' className='text-xs text-red-500 flex items-center'/>
                        </div>
                        <button
                            type='submit'
                            onClick={() => setIsSignedIn(true)}
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