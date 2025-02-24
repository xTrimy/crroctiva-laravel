import Header from '../components/Header'
import CompanyFinanceImage from '../assets/company-finance.png'
import CompanyITImage from '../assets/it-company.png'
import ThirdCompanyImage from '../assets/third-company.png'
import HeroImage from '../assets/Hero section2.png'
import Carousel from 'react-multi-carousel';
import AmazonLogo from '../assets/svg/Amazon.svg';
import GoogleLogo2 from '../assets/svg/Google.svg';
import pwcLogo from '../assets/svg/PWC.svg';
import HuaweiLogo from '../assets/svg/Huawei.svg';

import 'react-multi-carousel/lib/styles.css';
import Button from '@/components/Button'
import { MoveRight } from 'lucide-react'
import Footer from '@/components/Footer'
function Home() {
    return (
        <>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default' id="home">
                <div className='lg:w-1/2 lg:text-start text-center'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>"Innovative Software<br /> Solutions for a Digital World"</h1>
                    <p className='lg:text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                </div>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>

            <div className='p-inline-default py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Our Work
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={CompanyFinanceImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={CompanyITImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={ThirdCompanyImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={CompanyFinanceImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={CompanyITImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={ThirdCompanyImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home