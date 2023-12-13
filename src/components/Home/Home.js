import React from 'react'
import Header from '../Header/Header'

import health from '../assets/myhealth.avif'
function Home() {
    return (
        <div className='bg-teal-50 '>
            <Header />
            <div className='container mx-24 mt-14 p-4 w-8/12 flex gap-x-10 justify-between  '>
                <div className='md:w-3/4'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4 ml-8'>Integrated HealthCare Solution for Hospitals and Patients</h1>
                    <p className='text-gray-800 w-96 text-sm mt-8 font-medium font-sans ml-8 '>Swasya: Empowering healthCare through government backed ABHA technology seamlessly itegrating hospitals and patients for enhanced medical care</p>
                    <button className='bg-green-900 text-white px-4 py-2 mt-8 rounded-md ml-8'>Get started</button>
                </div>
                <div className=' md-ml-8 '>
                    <img src={health} alt="Healthcare solution" className='w-full h-auto md:h-full ml-24  ' />
                </div>
            </div>
        </div>
    )
}

export default Home
