import { useState } from 'react'
import Logo from '../../assets/seat.png';
function Header() {

    const [headerTop, setHeaderTop] = useState(false);

    const handleClickScroll = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }; 
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            setHeaderTop(true);
        } else {
            setHeaderTop(false);
        }
    });
  return (
    <div className={ 
          (headerTop ? 'py-4 shadow-md' : 'py-8') +
         ' bg-white flex justify-between items-center w-full p-inline-default  fixed z-40 transition-all'}>
        <div className='flex items-center'>
            <img src={Logo} alt='logo' className='h-8' />
            <p className='w-36 text-left'>Lorem ipsum Interiors</p>
        </div>
        <div className='flex text-black lg:relative absolute'>
              <a onClick={() => handleClickScroll("home")}  className='mr-8 cursor-pointer'>Home</a>
              <a onClick={() => handleClickScroll("about")}  className='mr-8 cursor-pointer'>About Us</a>
              <a onClick={() => handleClickScroll("company")}  className='mr-8 cursor-pointer'>Our companies</a>
              <a onClick={() => handleClickScroll("clients")}  className='mr-8 cursor-pointer'>FAQs</a>
        </div>
        <div className='flex items-center'>
            <a href='#' target='_blank' className='mr-4'>
                <button className='py-4 px-6 bg-[#913E49] text-white cursor-pointer rounded-md'>Contact Us</button>
            </a>
        </div>

    </div>
  )
}

export default Header