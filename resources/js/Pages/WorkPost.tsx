import CompanyFinanceImage from '../assets/company-finance.png'
import CompanyITImage from '../assets/it-company.png'
import ThirdCompanyImage from '../assets/third-company.png'
import HeroImage from '../assets/Hero section2.png'
import 'react-multi-carousel/lib/styles.css';
import BaseLayout from '@/layouts/BaseLayout'
import { BlogPost } from '@/types/BlogPost';
import '../../css/blog.scss'
import { WorkItem } from '@/types/WorkItem';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
function WorkPost({work}: {work: WorkItem}) {
    return (
        <BaseLayout>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default bg-black' id="home">
                <img src={work.image} alt="" className='absolute w-full h-full top-0 left-0 object-cover opacity-40' />
                <div className='lg:w-1/2 lg:text-start text-center relative'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{work.title}</h1>
                    <p className='lg:text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                </div>
            </div>

            <div className='p-inline-default py-8 text-gray-500 text-center' id="blogPost">
                <BlocksRenderer content={work.content} />
            </div>

        </BaseLayout>
    )
}

export default WorkPost