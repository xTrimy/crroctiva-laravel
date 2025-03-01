import CompanyFinanceImage from '../assets/company-finance.png'
import CompanyITImage from '../assets/it-company.png'
import ThirdCompanyImage from '../assets/third-company.png'
import HeroImage from '../assets/Hero section2.png'
import 'react-multi-carousel/lib/styles.css';
import BaseLayout from '@/layouts/BaseLayout'
import { BlogPost } from '@/types/BlogPost';
import '../../css/blog.scss'
function Post({post}: {post: BlogPost}) {
    return (
        <>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default' id="home">
                <div className='lg:w-1/2 lg:text-start text-center'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>"Innovative Software<br /> Solutions for a Digital World"</h1>
                    <p className='lg:text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                </div>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>

            <div className='p-inline-default py-8 text-gray-500 text-center' id="blogPost">
                <div dangerouslySetInnerHTML={{ __html:  post.body }} className='text-center' />
            </div>

        </>
    )
}

Post.layout = (page: any) => <BaseLayout children={page}></BaseLayout>

export default Post