import { markdownToTxt } from 'markdown-to-txt';
import { convert } from 'html-to-text';
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
import Button from '@/components/Button';
import { MoveRight } from 'lucide-react'
import { Link } from '@inertiajs/react';
import BaseLayout from '@/layouts/BaseLayout';
import { BlogPost } from '@/types/BlogPost';
import PostPreview from '@/components/PostPreview';
import { Partner } from '@/types/Partner';
import { Service } from '@/types/Service';
function Home({blogs, partners, services}: {blogs: BlogPost[], partners: Partner[], services: Service[]}) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <BaseLayout>
            <div className='w-full lg:py-48 py-36  text-white relative px-2 lg:px-4 xl:px-8' id="home">
                <div className='lg:w-1/2 lg:text-start text-center'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>"Innovative Software<br /> Solutions for a Digital World"</h1>
                    <p className='lg:text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                    <Button className='mt-12'>Discover More</Button>
                </div>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>
            <div className='w-full mb-8 bg-red-900 text-white px-2 lg:px-4 xl:px-8 lg:py-8 py-4 flex lg:flex-nowrap flex-wrap justify-between items-center'>
                <h2 className='text-3xl font-bold lg:py-8 py-4 lg:w-auto w-full lg:text-start text-center' id="about">
                    Insights
                </h2>
                <div className='flex lg:justify-normal justify-center lg:w-auto w-full sm:flex-nowrap flex-wrap'>
                    <div className='border-r-1 border-r-white p-4 text-center sm:w-auto w-full'>
                        <p className='text-sm'>Projects</p>
                        <div className='text-3xl font-bold mt-2'>100+</div>
                    </div>
                    <div className='border-r-1 border-r-white p-4 text-center sm:w-auto w-full'>
                        <p className='text-sm'>Clients</p>
                        <div className='text-3xl font-bold mt-2'>100+</div>
                    </div>
                    <div className=' p-4 text-center sm:w-auto w-full'>
                        <p className='text-sm'>Team</p>
                        <div className='text-3xl font-bold mt-2'>100+</div>
                    </div>
                </div>
            </div>
            <div className=' w-full px-2 lg:px-4 xl:px-8 py-8 items-stretch' id="about">
                <h2 className='text-3xl font-bold text-center'>
                    Our Services
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='mt-8 select-none'>
                    <Carousel responsive={responsive} showDots={true} infinite={true} className='py-8 z-20' >
                        {services.map((service) => <div className='w-full px-2'>
                            <div className='w-full bg-red-900 p-8 rounded-md justify-center items-center'>
                                <p className='text-white'>{service.name}</p>
                                <p className='text-white mt-4'>
                                    {service.content}
                                </p>
                                <Link href={`/service/${service.id}`}>
                                    <p className='mt-8 text-white cursor-pointer'>
                                        Discover More
                                    </p>
                                </Link>
                            </div>
                        </div>)}
                    </Carousel>
                </div>

            </div>
            <div className='items-center bg-cyan-100 flex px-2 lg:px-4 xl:px-8 py-8 lg:justify-between justify-center flex-wrap lg:flex-nowrap '>
                <h1 className='text-gray-500 md:text-4xl text-3xl font-bold lg:w-1/3'>Partners</h1>
                <div className='flex flex-wrap gap-8 lg:justify-normal justify-center'>
                    {partners.map((partner) => <div className='md:w-36 md:h-24 w-24 h-16 '>
                        <img src={partner.image} alt={"Crroctiva Partner " + partner.name} className='w-full h-full'  />
                    </div>)}
                  
                </div>
            </div>

            <div className='px-2 lg:px-4 xl:px-8 py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Our Work
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                        <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <Link href="/work" >
                            <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                            <img src={CompanyFinanceImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                            <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                                <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                                <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                    <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <Link href="/work" >
                            <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={CompanyITImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
                        <Link href="/work" >
                            <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                        <img src={ThirdCompanyImage} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='xl:text-xl lg:text-lg'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Link href="/work" >
                <Button className='mx-auto block' >Discover More</Button>
            </Link>

            <div className='px-2 lg:px-4 xl:px-8 py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Blog
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                    {
                    blogs.map(
                        (blog) => <PostPreview id={blog.id} image={blog.previewImage} key={blog.id} text={convert(blog.body, { selectors: [{ selector: 'img', format: 'skip' }]})} />
                    )}
                </div>
            </div>
            <Link href="/blog" >
                <Button className='mx-auto block' >Discover More Blog Posts</Button>
            </Link>

        </BaseLayout>
    )
}

export default Home