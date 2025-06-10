"use client";
import 'react-multi-carousel/lib/styles.css';
import BaseLayout from '@/layouts/BaseLayout'
import { PaginationType } from '@/types/PaginationType'
import Pagination from '@/components/Pagination'
import WorkPreview from '@/components/WorkPreview'
import { WorkItem } from '@/types/WorkItem'
import { WorkPage } from '@/types/WorkPage'
import { t } from 'i18next';
function Work({ workPageData, workItems, pagination }: { workPageData: WorkPage, workItems: WorkItem[], pagination: PaginationType}) {
    return (
        <>
            <div className='w-full lg:py-48 py-36 text-white relative p-inline-default bg-black' id="home">
                <img src={workPageData?.hero.image} alt="" className='absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40' />
                <div className='lg:w-1/2 lg:text-start text-center relative'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>{workPageData?.hero.title}</h1>
                    <p className='lg:text-xl mt-6'>{workPageData?.hero.content}</p>
                </div>
            </div>

            <div className='p-inline-default py-8' id="company">
                <h2 className='text-3xl font-bold text-center'>
                    {t('Our Work')}
                </h2>
                <p className='text-gray-600 text-center w-72 mt-4 mx-auto'>
                    {t('Discover our portfolio of successful projects that showcase our expertise and innovation.')}
                </p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl md:max-w-full mx-auto'>
                    {
                        workItems.map((item) => (
                            <WorkPreview work={item} key={item.id}/>
                        ))
                    }
                </div>
            </div>
            <Pagination pagination={pagination} />
        </>
    )
}

Work.layout = (page: any) => <BaseLayout children={page} title={t('Our Work')}></BaseLayout>

export default Work