import React from 'react'
import Customer from '../Customers/Customer'
import profile from '../assets/profile1.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Contact() {

    return (
        <div>
            <Customer />
            <div className='flex mt-24 mr-28 '>
                <div className='flex flex-col ml-36 '>


                    <div className='max-w-md mx-auto p-6 bg-orange-100 shadow-md mt-10 w-96 h-20 '>
                        <div className='flex items-center mb-4'>
                            <div className='rounded-full overflow-hidden mr-4 animate-pulse'>
                                <img src={profile} alt="profile" className='w-12 h-12 object-cover' />
                            </div>
                            <div>
                                <h2 className='text-lg font-bold'>Talk to Us</h2>
                                <p className='text-green-800 font-bold'>+91 88231893900</p>
                            </div>
                        </div>


                    </div>
                    <div className='max-w-md mx-auto p-6 bg-orange-100 shadow-md mt-10 w-96 h-20 '>
                        <div className='flex items-center mb-4'>
                            <div className='rounded-full overflow-hidden mr-4'>
                                <FontAwesomeIcon icon={faEnvelope} className='w-8 h-8' />
                            </div>
                            <div>
                                <h2 className='text-lg font-bold '>Email Address</h2>
                                <p className='text-green-900'>swasy.tech@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>



                <div className='max-w-md mx-auto p-6 bg-orange-100 shadow-md mt-2  '>
                    <h1 className='text-2xl font-bold text-center mb-4'>Leave Us a Message</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="firstName" className='block text-sm font-normal text-gray-600'>FirstName</label>
                            <input type="text id='firstName' name='firstName' className='mt-1 p-2 w-full border rounded-md placeholder:'enter name' " />
                        </div>
                        <div>
                            <label htmlFor="lastName" className='block text-sm font-normal text-gray-600'>lastName</label>
                            <input type="text id='lastName' name='lastName' className='mt-1 p-2 w-full border rounded-md placeholder:'enter name' " />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div>
                            <label htmlFor="email" className='block text-sm font-normal text-gray-600'>Email</label>
                            <input type="email" id='email' name='email' className='mt-1 p-2 w-full h-5 border ' />
                        </div>
                        <div>
                            <label htmlFor="phone" className='block text-sm font-normal text-gray-600 '>Phone number</label>
                            <input type="number" id='phone' name='phone' className='mt-1 p-2 w-full border  h-5' />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="subject" className='block text-sm font-normal text-gray-600'>Subject</label>
                        <input type="text" id='subject' name='subject' className='mt-1 p-2 w-full h-5 border ' />
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="message" className='block text-sm font-normal text-gray-600'>Message</label>
                        <textarea name="message" id="message" cols="3" rows="3" className='mt-1 p-2 w-full border'></textarea>
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='py-1 px-1 bg-amber-500 text-black text-sm font-bold rounded-md w-full uppercase'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
