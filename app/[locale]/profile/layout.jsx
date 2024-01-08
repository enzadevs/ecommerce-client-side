export default function ProfileLayout({dashboard,login}){
    const isLoggedIn = false

    return(
        <div className='min-h-[70vh] max-width'>
            {isLoggedIn ? dashboard : login}
        </div>
    )
}