import React from 'react'
import icons from '../assets/Icons.png'
import image1 from '../assets/image 1.png'
import image2 from '../assets/image 2.png'
import image3 from '../assets/image 3.png'
import image4 from '../assets/image 4.png'
import icons1 from '../assets/Icons (2).png'
import icons2 from '../assets/Icons (3).png'

const Service = () => {
  return (
    <div className='bg-hero-pattern bg-contain bg-center bg-no-repeat min-h-screen  mt-[6%] font-Montserrat relative'>
        <div className='bg-[#FFEFE5] absolute top-[-5%] left-[5%] right-[5%] bottom-[-5%] p-5 rounded-3xl'>
            <div className='flex flex-row justify-between pt-3 px-2'>
                <div className='flex flex-row justify-between items-center gap-5 text-xl'>
                    <button className='border border-black px-4 py-2 rounded-full font-semibold'>Our Service</button>
                    <h2 className='font-bold'>Elevate Your Dinning Experience</h2>
                </div>
               <button className='bg-[#FA6000] hover:bg-[#ea580c] rounded-full w-[20%] px-4 py-3 text-white inline-flex gap-3 font-bold shadow-xl hover:shadow-2xl relative'>
                    Discover Resturants
                    <img src={icons} alt="arrow" className='w-[10%] absolute top-3 right-3'/>
                </button>
            </div>
            <div className='w-[90%] flex flex-row gap-3 mt-6'>
                <img src={image1} alt="" className='w-[90%]'/>
                <img src={image2} alt="" className='w-[90%] '/>
                <img src={image3} alt="" className='w-[90%] '/>
                <img src={image4} alt="" className='w-[80%] '/>
            </div>
            <div className='flex flex-row justify-between mt-5'>
                <div className='w-[50%] flex flex-row gap-4'>
                    <img src={icons1} alt="" className='w-8 h-8'/>
                    <img src={icons2} alt="" className='w-8 h-8'/>
                </div>
                <div className='text-sm text-right w-[100%] leading-relaxed'>
                    Experience the seamless convenience of ordering from a diverse selection of restaurants, customizable meals, and real-time tracking—making your dining experience not only enjoyable but effortless. Activate the flavors of Enugu, and let GoChow revolutionize your meals, all from your pocket.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service