import React from 'react'
import Contact from '../Contact/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    const footerData = [
        {
            heading: 'Home',
            links: ['About', 'Vision', 'Team'],
        },
        {
            heading: 'Read',
            links: ['Resources', 'FAQ', 'Blog'],
        },
        {
            heading: 'Get Help',
            links: ['Support', 'Contact', 'Help Center'],
        },
    ];
    return (
        <div>
            <Contact />
            <footer className='bg-teal-50 text-black p-8 flex items-center justify-between mt-8 h-64  '>
                <div className='flex items-center gap-44 '>
                    {/* //left side icon */}
                    <div className='flex-items-center ml-28'>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faHouseMedical} className='h-7 w-7 text-green-900' />
                            <h1 className='text-xl font-bold mr-2'>Swasya</h1>
                        </div>
                        <div>
                            <span className='ml-6'>&copy; Swasya 2023</span>
                        </div>


                    </div>

                    {/* //right side */}
                    <div className='flex ml-auto gap-28 '>
                        {
                            footerData.map((section, index) => (
                                <div key={index} className='ml-4 '>
                                    <h2 className='text-sm font-bold'>{section.heading}</h2>
                                    <ul className='list-none pl-0 '>
                                        {
                                            section.links.map((link, linkIndex) => (
                                                <li key={linkIndex} className='mt-2 mb-2 '>
                                                    <a href="#" className='text-black'>{link}</a>
                                                </li>
                                            ))}

                                    </ul>
                                </div>
                            ))}

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
