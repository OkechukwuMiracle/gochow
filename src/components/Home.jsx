import React from 'react'
import bg from '../assets/Frame 93.png'
import iconcall from '../assets/Icons (1).png'

const Home = () => {
  return (
    <div className='bg-[#FBFAF9] w-[100%] font-Montserrat p-6 flex flex-row gap-5'>
        <div className='w-[50%] flex flex-col text-left justify-center'>
          <h1 className='font-bold text-[45px]'>Experience <span className='text-[#FA6000]'>Ultimate </span><br />Convenience</h1>
		  <p className='text-[#674F41] text-[18px] w-[82%] leading-relaxed'>Discover GoChow, your essential food delivery app connecting you to Enugu's favourite restaurants. With just a few explore a diverse selection of cuisines prepared to satisfy your cravings at any time.</p>
		  <button className='bg-[#FA6000] hover:bg-[#ea580c] rounded-full w-[30%] hover:w-[35%] px-4 py-3 text-white inline-flex gap-3 mt-6 font-bold hover:shadow-xl relative'>Ready to order?
			 <img src={iconcall} alt="" className='w-[10%] absolute top-4 right-3'/>
			</button>
        </div>
		<div>
			<img src={bg} alt=""  className='w-[90%]'/>
		</div>
    </div>
  )
}

export default Home
