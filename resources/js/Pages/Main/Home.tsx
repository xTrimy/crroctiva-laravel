import AboutUsImage from '../assets/about-us-hero.png'
import CompanyFinanceImage from '../assets/company-finance.png'
import CompanyITImage from '../assets/it-company.png'
import ThirdCompanyImage from '../assets/third-company.png'
import HeroImage from '../assets/Hero.png'
import GoogleLogo from '../assets/client-google.png'
import AppleLogo from '../assets/client-apple.png'
import NvidiaLogo from '../assets/client-nvidia.png'
import Button from '@components/Button'
function Home() {
    
    return (
        <>
            <div className='w-full py-48 text-white text-center relative' id="home">
                <h1 className='text-4xl'>TODAY'S IDEAS FUEL TOMORROW'S SUCCESS</h1>
                <p className='text-xl mt-6'>Bringing expertise and vision to your business</p>
                <Button className='px-8 mt-12'>Discover More</Button>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>
            <div className='flex lg:flex-nowrap flex-wrap flex-row-reverse justify-center lg:justify-between w-full px-2 lg:px-4 xl:px-8 py-8 items-stretch' id="about">
                <div className='lg:w-1/2 w-2/3 max-w-md lg:h-auto lg:mb-0 mb-9'>
                    <div className='object-contain relative overflow-hidden w-full h-full'>
                        <img src={AboutUsImage} alt="" className='object-contain lg:object-right lg:absolute w-full h-full right-0' />
                    </div>
                </div>
                <div className=' lg:w-1/2 max-w-xl w-full lg:text-start text-center'>
                    <h2 className='text-3xl font-bold'>
                        About Us
                    </h2>

                    <p className='mt-8'>At Crroctiva Solutions, we redefine the scope of technology services by integrating software, financial, and network solutions to revolutionize your business operations. As your strategic partner, we tailor our expertise across these domains to meet your unique needs, leading you on a transformative digital journey.</p>
                    <p className='mt-8'>We don't just execute projects; we transform the way you interact with your customers, manage services, and streamline operations. Our innovative solutions tackle complex challenges, enhance organizational capabilities, and have a profound impact across industries and communities.</p>
                    <Button className='mt-12'>Learn More</Button>
                </div>
             

            </div>
            <div className='px-2 lg:px-4 xl:px-8 py-8' id="company">
                <h2 className='text-3xl font-bold lg:text-start text-center'>
                    Our Companies
                </h2>
                <div className='flex gap-12 lg:gap-4 mt-4 flex-wrap lg:flex-nowrap justify-center'>
                    <div className='lg:w-1/3 w-full max-w-xl lg:h-72 lg:py-56 h-96 relative group cursor-pointer  '>
                        <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-black overflow-hidden'>
                            <img src={CompanyFinanceImage} className='object-cover object-center rounded-lg absolute w-full h-full group-hover:scale-110 hover:opacity-75 transition-all top-0 right-0' alt="" />
                        </div>
                        <div className='absolute translate-y-1/2 bottom-0 left-1/2 -translate-x-1/2'>
                            <Button >Learn More</Button>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl lg:h-72 lg:py-56 h-96 relative group cursor-pointer  '>
                        <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-black overflow-hidden'>
                            <img src={CompanyITImage} className='object-cover object-center rounded-lg absolute w-full h-full group-hover:scale-110 hover:opacity-75 transition-all top-0 right-0' alt="" />
                        </div>
                        <div className='absolute translate-y-1/2 bottom-0 left-1/2 -translate-x-1/2'>
                            <Button >Learn More</Button>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl lg:h-72 lg:py-56 h-96 relative group cursor-pointer  '>
                        <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-black overflow-hidden'>
                            <img src={ThirdCompanyImage} className='object-cover object-center rounded-lg absolute w-full h-full group-hover:scale-110 hover:opacity-75 transition-all top-0 right-0' alt="" />
                        </div>
                        <div className='absolute translate-y-1/2 bottom-0 left-1/2 -translate-x-1/2'>
                            <Button >Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 lg:px-4 xl:px-8 py-16' id="clients">
                <h2 className='text-3xl font-bold lg:text-start text-center'>
                    Clients
                </h2>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 relative'>
                        <img src={GoogleLogo} className='object-cover rounded-md absolute w-full h-full top-0 right-0' alt="" />
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 relative'>
                        <img src={AppleLogo} className='object-cover rounded-md absolute w-full h-full top-0 right-0' alt="" />
                    </div>
                    <div className='lg:w-1/3 w-full max-w-xl h-72 relative'>
                        <img src={NvidiaLogo} className='object-cover rounded-md absolute w-full h-full top-0 right-0' alt="" />
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Home