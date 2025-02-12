import { WorkItem } from '@/types/WorkItem'
import { Link } from '@inertiajs/react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import {  MoveRight } from 'lucide-react'
import React from 'react'

function WorkPreview({work}: {work: WorkItem}) {
  return (
      <div className='lg:w-1/3 w-full max-w-xl h-72 xl:py-56 lg:py-36 relative group overflow-hidden rounded-md cursor-pointer'>
          <Link href={`/work/${work.id}`}>
              <div className='bg-black w-full h-full top-0 left-0 absolute'></div>
              <img src={work.image} className='object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0' alt="" />
              <div className='absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20'>
                  <p className='xl:text-xl lg:text-lg'>
                        {work.title}
                  </p>
                  <div className='flex items-center mt-4 gap-1 group-hover:gap-3 transition-all'>
                      <p>Discover More</p><MoveRight size={18} className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all' />
                  </div>
              </div>
          </Link>
      </div>
  )
}

export default WorkPreview