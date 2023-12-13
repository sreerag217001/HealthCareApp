import React from 'react'
import Home from '../Home/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faPills } from '@fortawesome/free-solid-svg-icons'


function Vision() {

    return (
        <div>
            <Home />
            <div className=' w-full flex items-center justify-center mt-24'>
                <div className='  w-4/12   flex items-center justify-center flex-col gap-6 p-4 '>
                    <div className='flex items-center justify-center w-6/12 p-4 text-4xl text-green-900'>
                        <FontAwesomeIcon icon={faUserDoctor} />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-center'>Confirmed Doctor Appointment,clinical procedure scheduling,schedule next consultation with token</p>
                    </div>
                    <button className='bg-green-900 p-1 px-3 text-white rounded-md'>Appointment</button>
                </div>
                <div className='w-4/12   flex items-center justify-center flex-col gap-6 p-4 '>
                    <div className='flex items-center justify-center w-6/12 p-4 text-4xl text-green-900'>
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-center'>Store and Access Patient History/Past Records with ease Stored securly in the ABHA database</p>
                    </div>
                    <button className='bg-green-900 p-1 px-3 text-white rounded-md'>Appointment</button>
                </div>
                <div className='w-4/12   flex items-center justify-center flex-col gap-6 p-4  '>
                    <div className='flex items-center justify-center w-6/12 p-4 text-4xl text-green-900'>
                        <FontAwesomeIcon icon={faPills} />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-center'>Track Patients ongoing and past prescriptions,Before consulting with the patient to treat the patient better.</p>
                    </div>
                    <button className='bg-green-900 p-1 px-3 text-white rounded-md'>Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Vision
