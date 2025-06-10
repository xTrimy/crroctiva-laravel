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
import { motion } from "motion/react"
import AnimatedInsightElement from '@/components/AnimatedInsightElement';
import { t } from 'i18next';

function Home({ blogs, partners, services, work, homeData }: { blogs: BlogPost[], partners: Partner[], services: Service[], work: WorkItem[], homeData: HomePage}) {
   
    return (
        <>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default bg-black' id="home">
                <img src={homeData?.hero.image} alt="" className='absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40' />
                <div className='lg:w-1/2 lg:text-start text-center relative'>
                    <motion.h1 variants={{ hidden: {opacity:0, y:'100%'}, visible: {opacity:1, y:0, transition:{delay:0.5}} }} initial="hidden"
                    whileInView="visible" viewport={{ once: true }}
                    className='lg:text-5xl text-3xl font-bold'>{homeData?.hero.title}</motion.h1>
                    <motion.p 
                    variants={{ hidden: { opacity: 0, y: '100%' }, visible: { opacity: 1, y: 0, transition: { delay: 0.8 } }, }} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className='lg:text-xl mt-6'>{homeData?.hero.content}</motion.p>
                </div>
            </div>
            <div className='w-full mb-8 bg-[#913E49] text-white p-inline-default lg:py-8 py-4 flex lg:flex-nowrap flex-wrap justify-between items-center'>
                <h2 className='text-3xl font-bold lg:py-8 py-4 lg:w-auto w-full lg:text-start text-center' id="about">
                    {t('Insights')}
                </h2>
                <motion.div 
                variants={{ 
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren:1.5 } },
                 }}
                initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className='flex lg:justify-normal justify-center lg:w-auto w-full sm:flex-nowrap flex-wrap'>
                    {homeData?.insights.map((insight) => 
                        <motion.div variants={{ hidden: { opacity: 0, y:'100%' }, visible:{opacity:1, y: 0} }} key={insight.id} className='border-r-1 border-r-white p-4 text-center sm:w-auto w-full'>
                            <p className='text-sm'>{insight.title}</p>
                            <AnimatedInsightElement number={insight.number} />
                        </motion.div>)}
                </motion.div>
            </div>
            <div className=' w-full p-inline-default py-8 items-stretch' id="about">
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: '100%' }, visible: { opacity: 1, y: 0 } }} initial="hidden" viewport={{ once: true, margin: "-50px" }}
                    whileInView="visible"
                    className='text-3xl font-bold text-center'>
                    {t('Our Services')}
                </motion.h2>
                <motion.p variants={{ hidden: { opacity: 0, y: '100%' }, visible: { opacity: 1, y: 0 } }} initial="hidden" viewport={{ once: true, margin: "-50px" }}
                    whileInView="visible"
                    className='text-gray-600 text-center w-72 mt-4 mx-auto'>{t('Discover our suite of software solutions')}</motion.p>
                <ServiceCarousel services={services} />

            </div>
            <div className='items-center bg-[#D9F9F3] flex p-inline-default py-8 lg:justify-between justify-center flex-wrap lg:flex-nowrap '>
                <h1 className='text-gray-500 md:text-4xl text-3xl font-bold lg:w-1/3'>{t('Our Partners')}</h1>
                <div className='flex flex-wrap gap-8 lg:justify-normal justify-center'>
                    {partners.map((partner) => <div className='md:w-36 md:h-24 w-24 h-16 '>
                        <img src={partner.image} alt={"Crroctiva Partner " + partner.name} className='w-full h-full'  />
                    </div>)}
                  
                </div>
            </div>

            <div className='p-inline-default py-8' id="company">
                <motion.h2 
                    variants={{ hidden: { opacity: 0, y: '100%' }, visible: { opacity: 1, y: 0 } }} initial="hidden" viewport={{ once: true, margin: "-50px" }}
                    whileInView="visible"
                className='text-3xl font-bold text-center'>
                    {t('Our Work')}
                </motion.h2>
                <motion.p variants={{ hidden: { opacity: 0, y: '100%' }, visible: { opacity: 1, y: 0 } }} initial="hidden" viewport={{ once: true, margin: "-50px" }}
                    whileInView="visible" 
                    className='text-gray-600 text-center w-72 mt-4 mx-auto'>
                        {t('Discover our portfolio of successful projects that showcase our expertise and innovation.')}
                        </motion.p>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1.5 } },
                    }}
                    initial="hidden"
                    whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className={(work.length >= 3 ? "lg:grid-cols-3" : (work.length == 2?"lg:grid-cols-2":""))+' grid grid-cols-1 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center'}>
                    { work.map((work) =>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: '100%' },
                                visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
                            }}
                            key={work.id}>
                        <WorkPreview work={work} />
                        </motion.div>)}
                </motion.div>
            </div>
            <Link href="/work" >
                <Button className='mx-auto block' >{t('Discover More')}</Button>
            </Link>

            <div className='p-inline-default py-8' id="company">
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: '100%' }, visible: { opacity: 1, y: 0 } }} initial="hidden" viewport={{ once: true, margin: "-50px" }}
                    whileInView="visible"
                    className='text-3xl font-bold text-center'>
                    {t('Blog')}
                </motion.h2>
                <motion.p variants={{ hidden: { opacity: 0, y: '100%' }, visible: { opacity: 1, y: 0 } }} initial="hidden" viewport={{ once: true, margin: "-50px" }}
                    whileInView="visible"
                    className='text-gray-600 text-center w-72 mt-4 mx-auto'>
                        {t('Explore our latest blog posts to stay updated with industry trends, insights, and expert opinions.')}
                    </motion.p>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration:1.5} },
                    }}
                    initial="hidden"
                    whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className={(blogs.length >= 3 ? "lg:grid-cols-3" : (blogs.length == 2 ? "lg:grid-cols-2" : "")) +' grid grid-cols-1 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl lg:max-w-full mx-auto'}>
                    {
                    blogs.map(
                        (blog) => 
                        <motion.div
                            variants={{
                                hidden: { opacity: 0,y:'100%' },
                                visible: { opacity: 1, y:0, transition: { duration: 1.5 } },
                            }}
                        key={blog.id}>
                            <PostPreview
                            
                            id={blog.id} image={blog.previewImage} text={convert(blog.body, { selectors: [{ selector: 'img', format: 'skip' }] })} />
                        </motion.div>
                    )}
                </motion.div>
            </div>
            <Link href="/blog" >
                <Button className='mx-auto block' >{t('Discover More Blog Posts')}</Button>
            </Link>

        </>
    )
}
Home.layout = (page: any) => <BaseLayout children={page} title={t('Home')}></BaseLayout>

export default Home