import React from 'react'
import Vision from '../Vision/Vision'
import health from '../assets/integrated-health.jpg'
function Services() {
    const services = [
        {
            image: 'https://img.freepik.com/premium-vector/patient-doctors-office-cartoon_18591-2267.jpg',
            heading: 'Integrated Health Solution for Hospitals and Patients',
            paragraph: 'HealthTech solution is a cutting-edge service that leverages technology to provide innovative healthcare solutions and improve patient outcomes',

        },
        {
            image: 'https://t4.ftcdn.net/jpg/04/06/44/25/360_F_406442538_nGMpPB0W5SR0IBVeSTK0Rl7nuBMcStb5.jpg',
            heading: 'Integrated Health Solution for Hospitals and Patients',
            paragraph: 'HealthTech solution is a cutting-edge service that leverages technology to provide innovative healthcare solutions and improve patient outcomes',

        },
        {
            image: 'https://img.freepik.com/premium-vector/medical-teamwork-doctors-office_18591-19439.jpg?size=626&ext=jpg',
            heading: 'Integrated Health Solution for Hospitals and Patients',
            paragraph: 'HealthTech solution is a cutting-edge service that leverages technology to provide innovative healthcare solutions and improve patient outcomes',

        },
    ]
    return (
        <div>
            <Vision />
            <div className='w-full bg-teal-50 flex flex-col gap-3 mt-52    '>
                <div className='flex items-center justify-between mt-6 gap-10'>
                    <div className='flex items-center justify-center p-3 ml-32'>
                        <h1 className='text-2xl font-bold'>Our Services</h1>
                    </div>
                    <div className='flex items-center justify-center p-2 mr-32'>
                        <button className='text-white text-sm bg-green-900 p-3 px-3 rounded-md mt-2'>View all Services</button>
                    </div>
                </div>
                <div className='flex items-center justify-center w-6/12 ml-80  '>
                    {
                        services.map((service) => (
                            <div className='flex flex-col items-center justify-start gap-3 p-2 md:gap-2 '>
                                <div className='flex items-center justify-center md:justify-start'>
                                    <img src={service.image} alt="image" className='object-cover w-10/12  h-64' />
                                </div>
                                <div className='w-10/12 mx-auto mr-6 '>
                                    <h1 className='text-md font-bold'>{service.heading}</h1>
                                </div>
                                <div className='mt-1  mx-auto mr-12 '>
                                    <p className='text-sm ml-6 w-64'>{service.paragraph}</p>
                                </div>
                                <div className='flex items-center justify-start mr-52 w-32 cursor-pointer'>
                                    <a className='text-green-900 ml-8' href="">Read more</a>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Services
