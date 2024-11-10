'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import about from "../../../assets/about.png"
import 'swiper/css';
import '/Users/rajat/Desktop/sportanalytik/src/App.css'


function ProductSlider() {
    return (
        <div className='flex md:flex-row flex-col md:h-auto h-72 gap-4 my-4 ' >
            <div className=" text md:[writing-mode:vertical-lr] text-center text-4xl md:text-6xl uppercase md:pb-0 md:pb-4 p-4"> Events</div>
            <div className='  h-full bg-gray-200 w-full relative'>
                <Image src={about} className="h-full w-full" alt="event"></Image>
                <div className='absolute bottom-0 items-center bg-gray-900 w-full opacity-50 text-2xl p-4 text-center uppercase'>आवला नवमी </div>

            </div>

            <div className=' h-full bg-gray-200 w-full relative '>
                <Image src={about} className="h-full w-full" alt="event"></Image>
                <div className='absolute bottom-0 items-center bg-gray-900 w-full opacity-50 py-4 text-2xl p-4 text-center uppercase' >गुरु पूर्णिमा </div>

            </div>

            <div className='  h-full bg-gray-200 w-full  relative '>
                <Image src={about} className="h-full w-full" alt="event"></Image>
                <div className='absolute bottom-0 items-center bg-gray-900 w-full opacity-50 py-4 text-2xl p-4 text-center uppercase'>शरद पूर्णिमा </div>

            </div>




        </div>
    )
}

export default ProductSlider
/**
 * 
 *  <div className='p-2 pt-5 flex justify-between items-center h-full'>
                <div className='p-4 h-full bg-gray-200 '>
                    <Image src={about} className="h-auto w-full"></Image>
                </div>
                <div className=' p-4 h-full bg-gray-200 '>
                    <Image src={about} className="h-auto w-full"></Image>
                </div>
                <div className=' p-4 h-full bg-gray-200  '>
                    <Image src={about} className="h-auto w-full"></Image>
                </div>

            </div>




              <Swiper
                modules={Autoplay} // Use Swiper modules
                spaceBetween={10} // Space between slides
                slidesPerView={1} // Number of slides visible at once
                autoplay={{
                    delay: 3000, // 3 seconds between slides
                    disableOnInteraction: false, // Continue autoplay even if user interacts
                }}
                loop={true} // Infinite loop
            >
                <SwiperSlide>
                    <div className='pl-10 h-full bg-gray-200 w-1/3 relative'>
                        <Image src={about} className="h-full w-full"></Image>
                        <div className='absolute bottom-0 items-center bg-gray-900 w-full opacity-50 py-4' pr-4cd>Nishan Divas</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pl-10 h-full bg-gray-200 w-1/3 relative'>
                        <Image src={about} className="h-full w-full"></Image>
                        <div className='absolute bottom-0 items-center bg-gray-900 w-full opacity-50 py-4' pr-4cd>Nishan Divas</div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pl-10 h-full bg-gray-200 w-1/3 relative'>
                        <Image src={about} className="h-full w-full"></Image>
                        <div className='absolute bottom-0 items-center bg-gray-900 w-full opacity-50 py-4' pr-4cd>Nishan Divas</div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


 */