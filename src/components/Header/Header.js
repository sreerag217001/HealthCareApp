import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons'
function Header() {
    const navItems = [
        {
            display: 'Home', path: '/'
        },
        {
            display: 'Vision', path: '/'
        },
        {
            display: 'Services', path: '/'
        },
        {
            display: 'About Us', path: '/'
        },
    ]
    return (
        <nav className='bg-white p-1 shadow-sm h-14 md:w-full'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center space-x-4'>
                    <div className='text-green-800 flex justify-between'>
                        <FontAwesomeIcon icon={faHouseMedical} className='h-7 w-14 mt-2 ' />
                        <div>
                            <h1 className='text-green-900 mt-2 font-bold text-2xl'>Swasya</h1>
                        </div>
                    </div>
                    <div className='hidden md:flex space-x-10'>
                        {
                            navItems.map((item, index) => (
                                <a className='ml-6 mt-3 ' key={index} href="">{item.display}</a>
                            ))
                        }
                    </div>
                </div>
                {/* Right side */}
                <div className='flex items-center space-x-4 mr-10'>
                    <button className='bg-green-900 text-white text-sm px-3 py-1  rounded-md'>Login</button>
                    <button className='bg-green-900 text-white text-sm px-3 py-1 rounded-md'>Register</button>
                </div>
                <div className='md:hidden'>
                    <i className='fas fa bars text-white text-2xl cursor-pointer'></i>
                </div>
            </div>
        </nav>
    );
}

export default Header
