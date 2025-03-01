import { Service } from '@/types/Service'
import { Link } from '@inertiajs/react'
import React from 'react'

function ServicePreview({ service, className }: { service: Service, className?: string }) {

    if (service.content && service.content.length > 200) {
        service.content = service.content.slice(0, 200) + '...'
    }
  return (
      <div className={className + ' w-full h-full'} key={service.id}>
          <div className='w-full bg-[#913E49] p-8 h-full rounded-md flex flex-col justify-between'>
              <div>
                  <p className='text-white'>{service.name}</p>
                  <p className='text-white mt-4'>
                      {service.content}
                  </p>
              </div>
              <div className='flex justify-between mt-8'>
                  <Link href={`/service/${service.id}`} className='hover:underline text-white'>
                      Discover More
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default ServicePreview