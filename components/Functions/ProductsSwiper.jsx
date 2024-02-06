'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'styles/swiper2.css'

export default function ProductsSwiper({images}){
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return(
        <div className='w-full'>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                    swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='rounded-[4px] h-96 w-full'
                >
                {images.map(item => (
                    <SwiperSlide key={undefined}>
                        <div className='relative h-full w-full'>
                            <Image
                                src={'http://localhost:5000/images/' + item}
                                alt='image of product'
                                className='object-contain'
                                fill
                                sizes='100vw'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={12}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='thumbs rounded-[4px] mt-4 h-20 md:h-32 w-full'
                >
                {images.map(item => (
                    <SwiperSlide key={undefined}>
                        <button className='relative h-full w-full'>
                            <Image
                                src={'http://localhost:5000/images/' + item}
                                alt='thumbnail of currently selected image'
                                className='border border-grey-400 rounded-[4px] object-cover'
                                fill
                                sizes='100vw'
                            />
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}