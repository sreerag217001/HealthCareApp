import React from 'react'
import Aboutus from '../AboutUs/Aboutus'
import hospitality from '../assets/hospitality.webp'
function Customer() {
    return (
        <div>
            <Aboutus />
            <div className='flex items-center justify-center mt-16'>
                <div className='flex gap-10 items-center justify-center '>
                    <div className='flex items-center justify-center'>
                        <img className='w-72 h-52 object-cover' src={hospitality} alt="" />
                    </div>

                    <div className='flex flex-col gap-8 items-center justify-center  '>
                        <div className='flex items-center justify-center'>
                            <h1 className='text-5xl font-bold'>Happy Customers</h1>
                        </div>
                        <div className='flex items-center justify-center max-w-md mx-auto ml-12'>
                            <p className='text-sm font-medium'>We provide a seamless and secure integration platform that bridges the gap between hospitals and patience,ensuring efficient and reliable healthcare services, backed by government support</p>
                        </div>
                        <div className='flex items-center justify-center p-3'>
                            <button className='bg-green-900 text-white text-sm p-4 rounded-md mr-56 cursor-pointer border-none'>View all Testimonials</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
