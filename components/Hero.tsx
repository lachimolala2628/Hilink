import React from 'react'
import Image from 'next/image'
import Camp from '../public/camp.svg'
import Star from '../public/star.svg'
import Play from '../public/play.svg'
import Close from '../public/close.svg'
import Button from './Button'

const Hero = () => {
    return (
        <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image src={Camp} alt={'Camp'} width={50} height={50} className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]' />
                <h1 className='bold-52 lg:bold-88'>Wild Horizons Camping</h1>
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
                    Discover the thrill of the great outdoors with Wild Horizons Camping. Our expert team ensures every adventure is unforgettable, offering top-notch gear and breathtaking destinations. Embrace nature’s wonders and create lasting memories!
                </p>
                <div className='my-11 flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {
                            Array(5).fill(1).map((_, index) => (
                                <Image src={Star} alt={'Star'} key={index} width={24} height={24} />
                            ))
                        }
                    </div>
                    <p className='bold-16 lg:bold-20 text-blue-70'>
                        198k
                        <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
                    </p>
                </div>
                <div className='flex flex-col w-full gap-3 sm:flex-row'>
                    <Button type='button' title='Download App' variant='btn_green' />
                    <Button type='button' title='How we work?' variant='btn_white_text' icon={Play} />
                </div>
            </div>
            <div className='relative flex flex-1 items-start'>
                <div className='relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20'>Location</p>
                            <Image src={Close} alt={'close'} width={24} height={24} />
                        </div>
                        <p className='bold-20 text-white'>Banff National Park</p>
                    </div>
                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>Distance</p>
                            <p className='bold-20 text-white'>173.28 mi</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>Elevation</p>
                            <p className='bold-20 text-white'>5.040 Km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero