import CompanyFinanceImage from '../assets/company-finance.png'
import CompanyITImage from '../assets/it-company.png'
import ThirdCompanyImage from '../assets/third-company.png'
import HeroImage from '../assets/Hero section2.png'
import 'react-multi-carousel/lib/styles.css';
import BaseLayout from '@/layouts/BaseLayout'
import { BlogPost } from '@/types/BlogPost';
import '../../css/blog.scss'
import { Service } from '@/types/Service';
import NoImage from '../assets/no-image.jpeg'
import { Head, usePage } from '@inertiajs/react';
import { GeneralSiteData } from '@/types/GeneralSiteData';
import { t } from 'i18next';
function Post({ service }: {service: Service}) {
    const { generalData } = usePage<{ generalData: GeneralSiteData }>().props;
    
    return (
        <>
        <Head title={service.name + " - " + t('Services') + " | " + generalData.title} />
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default' id="home">
                <div className='lg:w-1/2 lg:text-start text-center'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{service.name}</h1>
                    <p className='lg:text-xl mt-6'>"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."</p>
                </div>
                <img src={HeroImage} alt="" className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
            </div>
            <div className='py-8 p-inline-default flex flex-col gap-12 lg:gap-8'>
                        <div className='flex gap-2 lg:gap-8 justify-center text-center lg:text-start lg:justify-between lg:odd:flex-row-reverse flex-wrap lg:flex-nowrap'>
                            <div className='w-[100%] lg:w-[500px] xl:w-[600px] 2xl:w-[600px] h-[300px] lg:h-[400px] shrink-0 rounded-lg overflow-hidden'>
                                <img src={service.image??NoImage} className='w-full h-full object-cover object-center' alt="" />
                            </div>
                            <div>
                                <p className='text-center lg:text-justify max-w-6xl'>{service.content}</p>
                            </div>

                        </div>
            </div>
            <div className='grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full grid p-inline-default gap-4'>
          
                {service.features?.map((feature, index) => (
                    <div key={feature.id} className='col-span-1 row-span-1 p-8 rounded-md bg-[#913E49] text-white'>
                        <div className=' drop-shadow-md '>
                            <img width={50} height={50} className='object-contain object-left' src={feature.icon} alt={feature.name + " icon"} />
                            <h1 className='text-xl font-bold mb-4'>{feature.name}</h1>
                            <p className='text-xl'>{feature.content}</p>
                        </div>
                    </div>
                ))}
            </div>
      

        </>
    )
}

Post.layout = (page: any) => <BaseLayout children={page}></BaseLayout>

export default Post