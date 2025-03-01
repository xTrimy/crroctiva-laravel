import { Service } from '@/types/Service';
import { Link } from '@inertiajs/react';
import React from 'react'
import Carousel from 'react-multi-carousel';
import ServicePreview from './ServicePreview';

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
                  return <ServicePreview className='px-2' service={service} key={service.id} />
              })}
          </Carousel>
      </div>
  )
}

export default ServiceCarousel