import React from 'react'
import Services from '../Services/Services'
import doctor1 from '../assets/doctor1.jpg'
import doctor2 from '../assets/doctor2.jpg'
import doctor3 from '../assets/doctor3.jpg'
import doctor4 from '../assets/doctor 4.webp'
import doctor5 from '../assets/doctor5.avif'
function Aboutus() {
    return (
        <div>
            <Services />
            <div className='w-full bg-orange-200 flex flex-col gap-5 items-center justify-center'>
                <div className='flex items-center justify-center p-2 mt-10'>
                    <h1 className='font-bold text-2xl'>Gallery</h1>
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <div className='flex items-center justify-center '>
                            <img className='w-72 h-48 rounded-md object-cover' src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" alt="" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='w-72 h-48 rounded-md object-cover' src={doctor3} alt="" />
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='w-96 h-96 object-cover rounded-md' src={doctor2} alt="" />
                    </div>
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <div className='flex items-center justify-center '>
                        <img className='w-64 h-48 rounded-md object-cover ml-36' src={doctor1} alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='w-64 h-48 rounded-md object-cover ' src={doctor4} alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='w-64 h-48 rounded-md object-cover' src={doctor5} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Aboutus
