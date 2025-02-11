import Header from '../../components/Subsite/Header'
import CompanyFinanceImage from '../../assets/company-finance.png'
import CompanyITImage from '../../assets/it-company.png'
import ThirdCompanyImage from '../../assets/third-company.png'
import HeroImage from '../../assets/Hero section2.png'
import Carousel from 'react-multi-carousel';
import AmazonLogo from '../../assets/svg/Amazon.svg';
import GoogleLogo2 from '../../assets/svg/Google.svg';
import pwcLogo from '../../assets/svg/PWC.svg';
import HuaweiLogo from '../../assets/svg/Huawei.svg';
import Logo from '../../assets/seat.png';
import FacebookLogo from '../../assets/svg/Facebook.png'
import LinkedInLogo from '../../assets/svg/LinkedIn.png'
import TwitterLogo from '../../assets/svg/TwitterX.png'
import 'react-multi-carousel/lib/styles.css';
function SubHome() {
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
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Header />
            <div className='w-full py-48 text-white relative pl-2 lg:pl-4 xl:pl-8' id="home">
            <div className='w-1/2'>
                    <h1 className='text-5xl font-bold'>"Innovative Software<br/> Solutions for a Digital World"</h1>
                    <p className='text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                    <button className='py-4 px-6 bg-red-900 text-white cursor-pointer rounded-md mt-12'>Discover More</button>
            </div>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>
            <div className='w-full mb-8 bg-red-900 text-white px-2 lg:px-4 xl:px-8 py-8 flex justify-between items-center'>
                <h2 className='text-3xl font-bold py-8' id="about">
                    Insights
                </h2>
                <div className='flex'>
                    <div className='border-r-1 border-r-white p-4 text-center'>
                        <p className='text-sm'>Projects</p>
                        <div className='text-3xl font-bold mt-2'>100+</div>
                    </div>
                    <div className='border-r-1 border-r-white p-4 text-center'>
                        <p className='text-sm'>Clients</p>
                        <div className='text-3xl font-bold mt-2'>100+</div>
                    </div>
                    <div className=' p-4 text-center'>
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
                    <Carousel responsive={responsive} showDots={true} infinite={true}  className='py-8 z-20' >
                    <div className='w-full px-2'>
                        <div className='w-full bg-red-900 p-8 rounded-md justify-center items-center'>
                            <p className='text-white'>Antivirus solutions</p>
                            <p className='text-white mt-4'>
                                    Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. 
                            </p>
                            <p className='mt-8 text-white cursor-pointer'>
                                Discover More 
                            </p>
                        </div>
                    </div>
                        <div className='w-full px-2'>
                            <div className='w-full bg-red-900 p-8 rounded-md justify-center items-center'>
                                <p className='text-white'>Antivirus solutions</p>
                                <p className='text-white mt-4'>
                                    Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses.
                                </p>
                                <p className='mt-8 text-white cursor-pointer'>
                                    Discover More
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-2'>
                            <div className='w-full bg-red-900 p-8 rounded-md justify-center items-center'>
                                <p className='text-white'>Antivirus solutions</p>
                                <p className='text-white mt-4'>
                                    Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses.
                                </p>
                                <p className='mt-8 text-white cursor-pointer'>
                                    Discover More
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-2'>
                            <div className='w-full bg-red-900 p-8 rounded-md justify-center items-center'>
                                <p className='text-white'>Antivirus solutions</p>
                                <p className='text-white mt-4'>
                                    Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses.
                                </p>
                                <p className='mt-8 text-white cursor-pointer'>
                                    Discover More
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-2'>
                            <div className='w-full bg-red-900 p-8 rounded-md justify-center items-center'>
                                <p className='text-white'>Antivirus solutions</p>
                                <p className='text-white mt-4'>
                                    Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses.
                                </p>
                                <p className='mt-8 text-white cursor-pointer'>
                                    Discover More
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            
            </div>
            <div className='items-center bg-cyan-100 flex px-2 lg:px-4 xl:px-8 py-8 justify-between '>
                <h1 className='text-gray-500 text-4xl font-bold w-1/3'>Partners</h1>
                <div className='flex flex-wrap gap-8'>
                    <div className='w-36 h-24 '>
                        <img src={HuaweiLogo} className='w-full h-full' alt="" />
                    </div>
                    <div className='w-36 h-24'>
                        <img src={AmazonLogo} className='w-full h-full' alt="" />
                    </div>
                    <div className='w-36 h-24'>
                        <img src={GoogleLogo2} className='w-full h-full' alt="" />
                    </div>
                    <div className='w-36 h-24'>
                        <img src={pwcLogo} className='w-full h-full' alt="" />
                    </div>
                    <div className='w-36 h-24'>
                        <img src={HuaweiLogo} className='w-full h-full' alt="" />
                    </div>
                    <div className='w-36 h-24'>
                        <img src={GoogleLogo2} className='w-full h-full' alt="" />
                    </div>
                    <div className='w-36 h-24'>
                        <img src={pwcLogo} className='w-full h-full' alt="" />
                    </div>
                </div>
            </div>
          
            <div className='px-2 lg:px-4 xl:px-8 py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Our Work
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='flex gap-4 mt-4'>
                    <div className='w-1/3 h-72 py-56 relative'>
                        <img src={CompanyFinanceImage} className='object-cover rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='bg-black w-full h-full opacity-50 top-0 left-0 z-10 absolute'></div>
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4'>Discover More</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-72 py-56 relative'>
                        <img src={CompanyITImage} className='object-cover rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='bg-black w-full h-full opacity-50 top-0 left-0 z-10 absolute'></div>
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4'>Discover More</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-72 py-56 relative'>
                        <img src={ThirdCompanyImage} className='object-cover rounded-md absolute w-full h-full top-0 right-0' alt="" />
                        <div className='bg-black w-full h-full opacity-50 top-0 left-0 z-10 absolute'></div>
                        <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4'>Discover More</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='py-4 px-12 hover:bg-red-900 border border-red-900 text-red-900 hover:text-white transition-colors cursor-pointer rounded-md mt-4 mx-auto block'>Discover More</button>
            
            <div className='px-2 lg:px-4 xl:px-8 py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Blog
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='flex gap-4 mt-4'>
                    <div className='w-1/3 p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full h-96'>
                            <img src={CompanyFinanceImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                    <div className='w-1/3 p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full h-96'>
                            <img src={CompanyITImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                    <div className='w-1/3 p-8 relative bg-cyan-100 rounded-md'>
                        <div className='w-full h-96'>
                            <img src={ThirdCompanyImage} className='object-cover rounded-md w-full h-full' alt="" />
                        </div>
                        <div className=' drop-shadow-md mt-4 text-gray-500'>
                            <p className='text-xl'>Become Mobile And Accessible With A Smart And Flexible Wireless Network Option For Your Company’s Indoor And Outdoor Spaces – Even your Staff’s Commuter Buses. </p>
                            <p className='mt-4 cursor-pointer hover:underline'>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='py-4 px-12 hover:bg-red-900 border border-red-900 text-red-900 hover:text-white transition-colors cursor-pointer rounded-md mt-4 mx-auto block'>Discover More Blog Posts</button>

            <footer className='flex  px-2 lg:px-4 xl:px-8 py-8 bg-red-900 mt-12 justify-between'>
                <div className='w-1/3'>
                    <div className='flex items-center'>
                        <img src={Logo} alt='logo' className='h-8' />
                        <p className='w-36 text-left'>Lorem ipsum Interiors</p>
                    </div>
                    <p className='text-white'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum non quae modi neque dicta placeat. Quam explicabo nemo, tempore rem laudantium magni accusamus nobis ratione, veritatis iure quaerat sed dolores.
                    </p>
                </div>
                <div className=' pl-8 flex flex-row-reverse gap-8'>
                        <ul>
                            <li className='text-white text-lg'>Location</li>
                            <li className='text-white text-sm'>Location Link</li>
                            <li className='text-white text-sm'>Phone number</li>
                        </ul>
                        <ul>
                            <li className='text-white text-lg'>Our Companies</li>
                            <li className='text-white text-sm'>Crroctiva financial</li>
                            <li className='text-white text-sm'>Crroctiva Software</li>
                            <li className='text-white text-sm'>Crroctiva Hardware</li>
                            <li className='text-white text-sm'>FAQs</li>
                        </ul>
                        <ul>
                            <li className='text-white text-lg'>Links</li>
                            <li className='text-white text-sm'>Home</li>
                            <li className='text-white text-sm'>About Us</li>
                            <li className='text-white text-sm'>Our Companies</li>
                            <li className='text-white text-sm'>FAQs</li>
                        </ul>
                </div>
                <div className='flex gap-4'>
                    {/* social media links */}
                    <div>
                        <img src={LinkedInLogo} alt="" />
                    </div>
                    <div>
                        <img src={FacebookLogo} alt="" />
                    </div>
                    <div>
                        <img src={TwitterLogo} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SubHome