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
import ServiceCarousel from '@/components/ServiceCarousel';
import WorkPreview from '@/components/WorkPreview';
import { WorkItem } from '@/types/WorkItem';
import { HomePage } from '@/types/HomePage';
function Home({ blogs, partners, services, work, homeData }: { blogs: BlogPost[], partners: Partner[], services: Service[], work: WorkItem[], homeData: HomePage}) {
   
    return (
        <BaseLayout>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default bg-black' id="home">
                <img src={homeData?.hero.image} alt="" className='absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40' />
                <div className='lg:w-1/2 lg:text-start text-center relative'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{homeData?.hero.title}</h1>
                    <p className='lg:text-xl mt-6'>{homeData?.hero.content}</p>
                </div>
            </div>
            <div className='w-full mb-8 bg-red-900 text-white p-inline-default lg:py-8 py-4 flex lg:flex-nowrap flex-wrap justify-between items-center'>
                <h2 className='text-3xl font-bold lg:py-8 py-4 lg:w-auto w-full lg:text-start text-center' id="about">
                    Insights
                </h2>
                <div className='flex lg:justify-normal justify-center lg:w-auto w-full sm:flex-nowrap flex-wrap'>
                    {homeData?.insights.map((insight) => 
                        <div key={insight.id} className='border-r-1 border-r-white p-4 text-center sm:w-auto w-full'>
                            <p className='text-sm'>{insight.title}</p>
                            <div className='text-3xl font-bold mt-2'>{insight.number}+</div>
                        </div>)}
                </div>
            </div>
            <div className=' w-full p-inline-default py-8 items-stretch' id="about">
                <h2 className='text-3xl font-bold text-center'>
                    Our Services
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <ServiceCarousel services={services} />

            </div>
            <div className='items-center bg-cyan-100 flex p-inline-default py-8 lg:justify-between justify-center flex-wrap lg:flex-nowrap '>
                <h1 className='text-gray-500 md:text-4xl text-3xl font-bold lg:w-1/3'>Partners</h1>
                <div className='flex flex-wrap gap-8 lg:justify-normal justify-center'>
                    {partners.map((partner) => <div className='md:w-36 md:h-24 w-24 h-16 '>
                        <img src={partner.image} alt={"Crroctiva Partner " + partner.name} className='w-full h-full'  />
                    </div>)}
                  
                </div>
            </div>

            <div className='p-inline-default py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Our Work
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='flex gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'>
                    { work.map((work) => <WorkPreview work={work} key={work.id} />)}
                </div>
            </div>
            <Link href="/work" >
                <Button className='mx-auto block' >Discover More</Button>
            </Link>

            <div className='p-inline-default py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    Blog
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>Discover our suite of software solutions designed to transform your business.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl lg:max-w-full mx-auto'>
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