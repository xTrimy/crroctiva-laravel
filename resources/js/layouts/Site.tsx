import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect } from 'react';
import { Outlet } from 'react-router'
import { useLocation } from "react-router";

function Site() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Site