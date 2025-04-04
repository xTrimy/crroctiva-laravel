import { useState } from 'react'
import Logo from '../assets/seat.png';
import Button from './Button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDown, ChevronDown, Menu } from 'lucide-react';
// import { NavLink, useLocation } from 'react-router';
import { Link, usePage } from '@inertiajs/react'
import { Service } from '@/types/Service';
function Header() {
    const { url, component } = usePage()
    const { navbar_services } = usePage<{ navbar_services: Service[] }>().props

    const [headerTop, setHeaderTop] = useState(false);
    const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);
    const handleClickScroll = (id: any, e: any) => {
        sidebarMenuOpen && setSidebarFunction(false);
        if (url === '/test') {
            e.preventDefault();
        } else {
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            setHeaderTop(true);
        } else {
            setHeaderTop(false);
        }
    });

    const setSidebarFunction = (value: boolean) => {
        setSidebarMenuOpen(value);
        // make the body unscrollable
        if (value) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    return (
        <>
            <div className={
                (headerTop ? 'py-4 shadow-md' : 'py-8') +
                ' bg-white flex justify-between items-center w-full p-inline-default fixed z-40 transition-all '}>
                <div className='flex items-center'>
                    <div className='ml-4 mr-8 lg:hidden w-8 h-8 bg-transparent rounded-full hover:bg-[#00000033] cursor-pointer transition-all flex justify-center items-center'>
                        <Menu onClick={() => { setSidebarFunction(!sidebarMenuOpen) }} />
                    </div>
                    <img src={Logo} alt='logo' className='h-8' />
                    <p className='w-36 text-left'>Lorem ipsum Interiors</p>
                </div>
                <div className={(sidebarMenuOpen ? 'left-0' : '-left-full') + ' ' + (headerTop ? 'mt-20' : 'mt-28') + ' lg:left-0 lg:max-w-none max-w-96 w-full lg:transition-none transition-all lg:translate-y-0 lg:translate-x-0 lg:mt-0 lg:py-0 py-8 lg:px-0 px-8 text-black lg:relative fixed lg:w-auto lg:h-auto h-screen top-0 lg:bg-transparent bg-white'}>
                    <ul className='flex lg:flex-row flex-col'>
                        <Link href="/" onClick={() => { setSidebarFunction(false) }} className=' cursor-pointer'>
                            <li className='py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors'>
                                Home
                            </li>
                        </Link>
                        <Link href="/about" onClick={() => { setSidebarFunction(false) }} className=' cursor-pointer'>
                            <li className='py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors'>
                                About Us
                            </li>
                        </Link>
                        <li className='relative mr-8'>
                            <button tabIndex={-1} className='group text-left w-full'>
                                <Link href="/services" onClick={() => { setSidebarFunction(false) }} className=' cursor-pointer lg:pointer-events-auto pointer-events-none'>
                                    <div className='py-2 px-4 bg-transparent flex items-center gap-2 hover:bg-[#00000033] rounded-md transition-colors'>
                                        <p>Services</p> <ChevronDown size={15} />
                                    </div>
                                </Link>
                                <ul className='lg:absolute top-full group-hover:border-b group-focus:border-b lg:group-hover:border-b-0 lg:group-focus:border-b-0 border-gray-400 overflow-hidden max-h-0 group-hover:max-h-max group-focus:max-h-max transition-all p-0 lg:rounded-md lg:bg-gray-200 lg:shadow-md lg:text-center group-hover:p-4 group-focus:p-4 left-1/2 lg:-translate-x-1/2'>
                                    {navbar_services.map((service) => (
                                        <Link href={`/service/${service.id}`} key={service.id} onClick={() => { setSidebarFunction(false) }} className=' cursor-pointer'>
                                            <li className='py-2 px-4 bg-transparent hover:bg-[#00000033] whitespace-nowrap rounded-md transition-colors'>
                                                {service.name}
                                            </li>
                                        </Link>
                                    ))}
                                    <Link href="/services" onClick={() => { setSidebarFunction(false) }} className=' cursor-pointer lg:hidden'>
                                        <li className='py-2 px-4 bg-transparent hover:bg-[#00000033] whitespace-nowrap rounded-md transition-colors'>
                                            All Services
                                        </li>
                                    </Link>
                                </ul>
                            </button>
                        </li>
                        <Link href="/work" onClick={() => { setSidebarFunction(false) }} className=' cursor-pointer'>
                            <li className='py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors'>
                                Our Work
                            </li>
                        </Link>
                        <Link href="/blog" onClick={() => { setSidebarFunction(false) }} className=' cursor-pointer'>
                            <li className='py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors'>
                                Blog
                            </li>
                        </Link>

                    </ul>



                </div>
                <div className='flex items-center'>
                    <Dialog >
                        <DialogTrigger> <div className='flex items-center'>
                            <button
                                onClick={() => { }}
                                className={` bg-[#913E49] text-white lg:py-4 lg:px-6 px-6 py-2 text-nowrap cursor-pointer rounded-md
      hover:bg-white group hover:text-red-900 group-hover:text-red-900 group-hover:bg-white border-2 border-red-900 transition-all

      `}>
                                <p className='group-hover:scale-105 transition-transform duration-700 group-hover:-translate-y-0.5'>
                                    Contact Us
                                </p>
                            </button>
                        </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Label</DialogTitle>
                                <DialogDescription>
                                    <div className='flex gap-2 w-full mt-4'>
                                        <label className='flex-grow'>
                                            <p className='mb-2'>First Name</p>
                                            <Input placeholder="First name" />
                                        </label>
                                        <label className='flex-grow'>
                                            <p className='mb-2'>Last Name</p>
                                            <Input placeholder="Last name" />
                                        </label>
                                    </div>
                                    <label className='flex-grow mt-4 block'>
                                        <p className='mb-2'>Email Address</p>
                                        <Input placeholder="Email address" />
                                    </label>
                                    <label className='flex-grow mt-4 block'>
                                        <p className='mb-2'>Message</p>
                                        <Textarea placeholder="Your message..." rows={10} cols={10} className='resize-none' />
                                    </label>
                                    <Button className='mt-4 w-full py-2'>Submit</Button>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div
                onClick={() => { setSidebarFunction(false) }}
                className={(sidebarMenuOpen ? 'block backdrop-blur-md' : 'hidden backdrop-blur-0') + ' w-full h-full fixed bg-[#000000AA]  delay-75 transition-all top-0 left-0 z-30'}></div>
        </>
    )
}

export default Header