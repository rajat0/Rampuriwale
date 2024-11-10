"use client"

import React from 'react'
//import Image from 'next/image'
import photo from '../sectionone/IMG_1.png'
import about from '../../../assets/about.png'
import nishanone from '../../../assets/nishanone.png'
import samadhione from '../../../assets/samadhione.png'
import { useState } from 'react'
import Image from 'next/image'

const images = [
    photo,
    about,
    nishanone,
    samadhione
];

function HomeSection() {
    //  const [currentImage, setCurrentImage] = useState(images[0])
    const [currentImage, setCurrentImage] = useState(images[0])
    const [zoom, setZoom] = useState(false)

    const handleAnimation = () => {
        setCurrentImage((prevImage) => {
            const currentIndex = images.indexOf(prevImage);
            return images[(currentIndex + 1) % images.length];
        });
    }
    return (


        <div className="relative  transition-all duration-300 cursor-pointer filter ">
            <div className=''>
                <div className='h-screen w-full bg-gray-900  overflow-y-hidden'
                    onAnimationIteration={handleAnimation}>
                    <Image
                        className='h-full w-full object-cover animate-zoom'
                        src={currentImage}
                        alt="image description"
                    >
                    </Image>
                </div>

            </div>
        </div>
    )
}

export default HomeSection
