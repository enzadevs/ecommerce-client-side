'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'styles/swiper.css'

export default function IndexSwiper(){
    return(
        <div className='bg-grey-50 text-fancy-600 h-[360px] w-full'>
            <Swiper
                navigation
                pagination={true}
                modules={[Navigation,Pagination,Autoplay]}
                className='h-full max-width'
                loop='true'
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                >
                    <SwiperSlide>
                        <span className='center h-full w-full'>
                            Slider 1
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='center h-full w-full'>
                            Slider 2
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='center h-full w-full'>
                            Slider 3
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='center h-full w-full'>
                            Slider 4
                        </span>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}