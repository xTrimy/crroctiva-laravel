import { Service } from '@/types/Service';
import { Link } from '@inertiajs/react';
import React from 'react'
import Carousel from 'react-multi-carousel';

function ServiceCarousel({services}: {services: Service[]}) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


  return (
      <div className='mt-8 select-none'>
          <Carousel responsive={responsive} showDots={true} infinite={true} className='py-8 z-20' >
              {services.map((service) => {
                  if (service.content && service.content.length > 200) {
                      service.content = service.content.slice(0, 200) + '...'
                  }
                  return <div className='w-full px-2' key={service.id}>
                      <div className='w-full bg-red-900 p-8 rounded-md justify-center items-center'>
                          <p className='text-white'>{service.name}</p>
                          <p className='text-white mt-4'>
                              {service.content}
                          </p>
                          <Link href={`/service/${service.id}`}>
                              <p className='mt-8 text-white cursor-pointer'>
                                  Discover More
                              </p>
                          </Link>
                      </div>
                  </div>
              })}
          </Carousel>
      </div>
  )
}

export default ServiceCarousel