'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'styles/swiper.css'

export default function IndexSwiper(){
    return(
        <div className='max-width'>
            <div className='border border-grey-100 rounded-lg text-fancy-600 h-[180px] md:h-[260px] lg:h-[360px] w-full'>
                <Swiper
                    navigation
                    pagination={true}
                    modules={[Navigation,Pagination,Autoplay]}
                    className='rounded-[4px] h-full w-full'
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
        </div>
    )
}