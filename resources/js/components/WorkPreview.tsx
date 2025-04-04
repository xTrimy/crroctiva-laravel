import { WorkItem } from '@/types/WorkItem'
import { Link } from '@inertiajs/react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import {  MoveRight } from 'lucide-react'
import Atropos from 'atropos';

import React, { useEffect } from 'react'

function WorkPreview({work}: {work: WorkItem}) {
    useEffect(()=>{
        document.querySelectorAll('.work-element').forEach((element) => {
            Atropos({
                // pass unique element here
                el: element as HTMLElement,
                // rest of parameters
                activeOffset: 40,
                shadowScale: 0.4,
                rotateTouch: false,
            });
        })
        console.log('x');
    },[])
  return (
    <div className='atropos work-element'>
        <div className=' mx-auto w-full max-w-xl h-auto aspect-square relative group rounded-md cursor-pointer'>
            <div className="atropos-scale">
                <div className="atropos-rotate">
                    <div className="atropos-inner">
                        <Link href={`/work/${work.id}`}>
                            <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
                              <img src={work.image} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
                              <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20' data-atropos-offset="5">
                                <p className='xl:text-xl lg:text-lg'>
                                    {work.title}
                                </p>
                                <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                                    <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkPreview