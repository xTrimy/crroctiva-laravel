import CompanyFinanceImage from '../assets/company-finance.png'
import CompanyITImage from '../assets/it-company.png'
import ThirdCompanyImage from '../assets/third-company.png'
import HeroImage from '../assets/Hero section2.png'
import 'react-multi-carousel/lib/styles.css';
import BaseLayout from '@/layouts/BaseLayout'
import { BlogPost } from '@/types/BlogPost';
import '../../css/blog.css'
import { Service } from '@/types/Service';
import NoImage from '../assets/no-image.jpeg'
function Post({ service }: {service: Service}) {
    return (
        <BaseLayout>
            <div className='w-full lg:py-48 py-36 text-white relative px-2 lg:px-4 xl:px-8' id="home">
                <div className='lg:w-1/2 lg:text-start text-center'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{service.name}</h1>
                    <p className='lg:text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                </div>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>
            <div className='flex lg:flex-nowrap flex-wrap flex-row-reverse justify-center lg:justify-between w-full px-2 lg:px-4 xl:px-8 py-8 items-stretch' id="about">
                <div className='lg:w-1/2 w-2/3 max-w-md lg:h-auto lg:mb-0 mb-9'>
                    <div className='object-contain relative overflow-hidden w-full h-full'>
                        <img src={service.image ?? NoImage} alt="" className='object-contain lg:object-right w-full h-full right-0' />
                    </div>
                </div>
                <div className=' lg:w-1/2 max-w-xl w-full lg:text-start text-center'>
                    <p className='mt-8'>{service.content}</p>
                </div>
            </div>
            <div className='grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full grid px-2 lg:px-4 xl:px-8 gap-4'>
          
                {service.features?.map((feature, index) => (
                    <div key={feature.id} className='col-span-1 row-span-1 p-8 rounded-md bg-[#33BDD7] text-white'>
                        <div className=' drop-shadow-md '>
                            <img width={50} height={50} className='object-contain object-left' src={feature.icon} alt={feature.name + " icon"} />
                            <h1 className='text-xl font-bold mb-4'>{feature.name}</h1>
                            <p className='text-xl'>{feature.content}</p>
                        </div>
                    </div>
                ))}
            </div>
      

        </BaseLayout>
    )
}

export default Post