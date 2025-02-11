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
            <div className='w-full lg:py-48 py-36 text-white relative px-2 lg:px-4 xl:px-8' id="home">
                <div className='lg:w-1/2 lg:text-start text-center'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>"Innovative Software<br /> Solutions for a Digital World"</h1>
                    <p className='lg:text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                </div>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>

            <div className='px-2 lg:px-4 xl:px-8 py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Blog
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                    <div className='lg:w-1/3 max-w-xl w-full p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full xl:h-96 lg:h-72 h-72 '>
                            <img src={CompanyFinanceImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                    <div className='lg:w-1/3 max-w-xl w-full p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full xl:h-96 lg:h-72 h-72 '>
                            <img src={CompanyITImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                    <div className='lg:w-1/3 max-w-xl w-full p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full xl:h-96 lg:h-72 h-72 '>
                            <img src={ThirdCompanyImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                    <div className='lg:w-1/3 max-w-xl w-full p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full xl:h-96 lg:h-72 h-72 '>
                            <img src={CompanyFinanceImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                    <div className='lg:w-1/3 max-w-xl w-full p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full xl:h-96 lg:h-72 h-72 '>
                            <img src={CompanyITImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                    <div className='lg:w-1/3 max-w-xl w-full p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full xl:h-96 lg:h-72 h-72 '>
                            <img src={ThirdCompanyImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home