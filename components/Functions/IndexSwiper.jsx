'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'styles/swiper.css'

export default function IndexSwiper(){
    return(
        <div className='max-width'>
            <div className='border border-grey-100 rounded-lg text-fancy-600 h-[180px] md:h-[220px] lg:h-[250px] w-full'>
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
                                <Image
                                    src='https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/4b2990c5-bb77-11ee-8aa4-8a0872cd8e04.jpeg'
                                    alt='image'
                                    height={0}
                                    width={0}
                                    style={{ height: 'auto' ,width: '100%' }}
                                    className=''
                                    sizes='00v'
                                >
                                </Image>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span className='center h-full w-full'>
                                <Image
                                    src='https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/6fe8bee8-6765-11ee-a265-e628f547e943.jpeg'
                                    alt='image'
                                    height={0}
                                    width={0}
                                    style={{ height: 'auto' ,width: '100%' }}
                                    className=''
                                    sizes='00v'
                                >
                                </Image>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span className='center h-full w-full'>
                                <Image
                                    src='https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/ddc5843a-a64c-11ee-9712-a25375223e3c.jpeg'
                                    alt='image'
                                    height={0}
                                    width={0}
                                    style={{ height: 'auto' ,width: '100%' }}
                                    className=''
                                    sizes='00v'
                                >
                                </Image>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span className='center h-full w-full'>
                                <Image
                                    src='https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/68e29f43-bc52-11ee-993e-de5a5993a24a.jpeg'
                                    alt='image'
                                    height={0}
                                    width={0}
                                    style={{ height: 'auto' ,width: '100%' }}
                                    className=''
                                    sizes='00v'
                                >
                                </Image>
                            </span>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}