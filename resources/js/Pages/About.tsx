"use client";
import { AboutPage } from '@/types/AboutPage'
import BaseLayout from '@/layouts/BaseLayout'
import { t } from 'i18next'
function About({about}: {about?: AboutPage}) {
    return (
        <>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default bg-black' id="home">
                <img src={about?.hero.image} alt="" className='absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40' />
                <div className='lg:w-1/2 lg:text-start text-center relative'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{about?.hero.title}</h1>
                    <p className='lg:text-xl mt-6'>{about?.hero.content}</p>
                </div>
            </div>
            <div className='py-8 p-inline-default flex flex-col gap-12 lg:gap-8'>
                {
                    about?.sections.map((section, index) => (
                        <div className='flex gap-2 lg:gap-8 justify-center text-center lg:text-start lg:justify-between lg:odd:flex-row-reverse flex-wrap lg:flex-nowrap'>
                            <div className='w-[100%] lg:w-[500px] xl:w-[600px] 2xl:w-[600px] h-[300px] lg:h-[400px] shrink-0 rounded-lg overflow-hidden'>
                                <img src={section.image} className='w-full h-full object-cover object-center' alt="" />
                            </div>
                            <div>
                                <h2 className='text-4xl font-bold'>{section.title}</h2>
                                <p className='text-center lg:text-justify max-w-6xl mt-4'>{section.content}</p>
                            </div>
                           
                        </div>
                    ))
                }
            </div>
        </>
    )
}
About.layout = (page: any) => <BaseLayout children={page} title={t('About Us')}></BaseLayout>

export default About