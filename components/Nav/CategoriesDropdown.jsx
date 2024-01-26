'use client'

import Link from 'next/link'
import SlButton from '@shoelace-style/shoelace/dist/react/button'
import SlDropdown from '@shoelace-style/shoelace/dist/react/dropdown'
import SlMenu from '@shoelace-style/shoelace/dist/react/menu'
import SlMenuItem from '@shoelace-style/shoelace/dist/react/menu-item'
import {TbCategory2} from 'react-icons/tb'
import {AiOutlineDesktop} from 'react-icons/ai'
import {PiTShirtLight,PiDressLight} from 'react-icons/pi'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {TbMoodKid} from 'react-icons/tb'
import {IoHomeOutline} from 'react-icons/io5'
import '@shoelace-style/shoelace/dist/themes/light.css'

export default function CategoriesDropdown(){
    return(
        <>
            <div className='hidden md:flex md:gap-2'>
                <SlDropdown>
                    <SlButton slot='trigger' caret><TbCategory2 slot='prefix' className='text-violet-700 icons'/>Ähli bölümler</SlButton>
                    <SlMenu style={{maxWidth: '300px'}}>
                        <SlMenuItem>
                            <Link href='/categories' className='nav-link'>Ine menu</Link>
                        </SlMenuItem>
                        <SlMenuItem>
                            <Link href='/' className='nav-link'>Ine menu</Link>
                        </SlMenuItem>
                        <SlMenuItem>
                            <Link href='/' className='flex-row-center gap-2'><AiOutlineDesktop className='icons'/>Elektronika</Link>
                            <SlMenu slot='submenu'>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                            </SlMenu>
                        </SlMenuItem>
                        <SlMenuItem>
                            <Link href='/' className='flex-row-center gap-2'><PiTShirtLight className='icons'/>Erkek egin-eşik</Link>
                            <SlMenu slot='submenu'>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                            </SlMenu>
                        </SlMenuItem>
                        <SlMenuItem>
                            <Link href='/' className='flex-row-center gap-2'><PiDressLight className='icons'/>Aýal egin eşik</Link>
                            <SlMenu slot='submenu'>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                            </SlMenu>
                        </SlMenuItem>
                        <SlMenuItem>
                            <Link href='/' className='flex-row-center gap-2'><TbMoodKid className='icons'/>Çagalar üçin</Link>
                            <SlMenu slot='submenu'>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                            </SlMenu>
                        </SlMenuItem>
                        <SlMenuItem>
                            <Link href='/' className='flex-row-center gap-2'><MdOutlineHealthAndSafety className='icons'/>Saglyk</Link>
                            <SlMenu slot='submenu'>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                            </SlMenu>
                        </SlMenuItem>
                        <SlMenuItem>
                            <Link href='/' className='flex-row-center gap-2'><IoHomeOutline className='icons'/>Hojalyk serişdeleri</Link>
                            <SlMenu slot='submenu'>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                                <SlMenuItem><Link href='/'>Sub category</Link></SlMenuItem>
                            </SlMenu>
                        </SlMenuItem>
                    </SlMenu>
                </SlDropdown>
            </div>
        </>
    )
}

// i can directly style these components if i disable their builtin styles