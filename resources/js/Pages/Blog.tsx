"use client";

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
import { convert } from 'html-to-text';

import 'react-multi-carousel/lib/styles.css';
import Button from '@/components/Button'
import { MoveRight } from 'lucide-react'
import Footer from '@/components/Footer'
import BaseLayout from '@/layouts/BaseLayout'
import { BlogPost } from '@/types/BlogPost'
import { BlogPage } from '@/types/BlogPage'
import PostPreview from '@/components/PostPreview'
import { PaginationType } from '@/types/PaginationType'
import Pagination from '@/components/Pagination'
import { t } from 'i18next'
function Blog({blogPageData, blogPosts, pagination}: {blogPageData: BlogPage, blogPosts: BlogPost[], pagination: PaginationType}) {
    return (
        <>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default bg-black' id="home">
                <img src={blogPageData?.hero.image} alt="" className='absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40' />
                <div className='lg:w-1/2 lg:text-start text-center relative'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{blogPageData?.hero.title}</h1>
                    <p className='lg:text-xl mt-6'>{blogPageData?.hero.content}</p>
                </div>
            </div>

            <div className='p-inline-default py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    {t('Blog')}
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>{t('Explore our latest blog posts to stay updated with industry trends, insights, and expert opinions.')}</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl md:max-w-full mx-auto'>
                    {
                        blogPosts.map((post) => (
                            <PostPreview id={post.id} image={post.previewImage} key={post.id} text={convert(post.body, { selectors: [{ selector: 'img', format: 'skip' }] })} />
                        ))
                    }
                </div>
            </div>
            <Pagination pagination={pagination} />
        </>
    )
}

Blog.layout = (page: any) => <BaseLayout children={page} title='Blog'></BaseLayout>

export default Blog