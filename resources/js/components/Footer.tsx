import { Link } from '@inertiajs/react';
import Logo from '../assets/seat.png';
import FacebookLogo from '../assets/svg/Facebook.png'
import LinkedInLogo from '../assets/svg/LinkedIn.png'
import TwitterLogo from '../assets/svg/TwitterX.png'

function Footer() {

  return (
      <footer className='flex p-inline-default py-8 bg-[#913E49] mt-12 justify-between lg:flex-nowrap flex-wrap'>
          <div className='lg:w-1/3 w-full'>
              <div className='flex items-center md:justify-normal justify-center'>
                  <img src={Logo} alt='logo' className='h-8' />
                  <p className='lg:w-36 text-start'>Lorem ipsum Interiors</p>
              </div>
              <p className='text-white md:text-start text-center lg:max-w-none max-w-xl mx-auto md:mx-0'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum non quae modi neque dicta placeat. Quam explicabo nemo, tempore rem laudantium magni accusamus nobis ratione, veritatis iure quaerat sed dolores.
              </p>
              <hr className='md:hidden mt-8 border-red-500 opacity-50' />
          </div>
          <div className='lg:pl-8 flex gap-8 lg:mt-0 mt-8 md:flex-nowrap flex-wrap justify-center md:justify-normal w-full md:w-auto'>
              <ul className='block md:w-auto w-full text-center md:text-start'>
                  <li className='text-white text-lg'>Links</li>
                  <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                    <Link href="/">
                        Home
                    </Link>
                  </li>
                  <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                    <Link href="/about">
                        About Us
                    </Link>
                    </li>
                  <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                    <Link href="/services">
                        Services
                    </Link>
                  </li>
                    <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                        <Link href="/work">
                            Our Work
                        </Link>
                    </li>
                    <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
              </ul>
              <ul className='block md:w-auto w-full text-center md:text-start'>
                  <li className='text-white text-lg'>Our Companies</li>
                  <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                      <a href='#'>Crroctiva financial</a>
                    </li>
                  <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                      <a href='#'>Crroctiva Software</a>
                    </li>
                  <li className='text-white text-sm hover:underline w-fit mx-auto md:mx-0'>
                      <a href='#'>Crroctiva Hardware</a>
                    </li>
              </ul>
           
              <hr className='md:hidden block w-full border-red-500 opacity-50' />
          </div>
          <div className='flex gap-4 lg:self-auto self-end md:w-auto w-full md:mt-0 mt-8 md:justify-normal justify-center'>
              {/* social media links */}
              <div>
                <a href="#">
                    <img src={LinkedInLogo} alt="" className='lg:w-auto lg:h-auto w-8 h-8' />
                </a>
              </div>
              <div>
                  <a href="#">
                      <img src={FacebookLogo} alt="" className='lg:w-auto lg:h-auto w-8 h-8' />
                  </a>
              </div>
              <div>
                  <a href="#">
                      <img src={TwitterLogo} alt="" className='lg:w-auto lg:h-auto w-8 h-8' />
                  </a>
              </div>
          </div>
      </footer>
  )
}

export default Footer