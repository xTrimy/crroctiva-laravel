import 'react-multi-carousel/lib/styles.css';
import BaseLayout from '@/layouts/BaseLayout'
import { Service } from '@/types/Service';
import ServicePreview from '@/components/ServicePreview';
import { ServicesPage } from '@/types/ServicesPage';
import { t } from 'i18next';
function Services({ servicesPageData, services }: { servicesPageData: ServicesPage, services: Service[]}) {
    return (
        <>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default bg-black' id="home">
                <img src={servicesPageData?.hero.image} alt="" className='absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40' />
                <div className='lg:w-1/2 lg:text-start text-center relative'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{servicesPageData?.hero.title}</h1>
                    <p className='lg:text-xl mt-6'>{servicesPageData?.hero.content}</p>
                </div>
            </div>

            <div className='p-inline-default py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    {t('Our Services')}
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>{t('Discover our suite of software solutions')}</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl md:max-w-full mx-auto'>
                    {
                        services.map((item) => (
                            <ServicePreview service={item} key={item.id}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

Services.layout = (page: any) => <BaseLayout children={page} title={t('Services')}></BaseLayout>

export default Services