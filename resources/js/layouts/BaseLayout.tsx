import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoadingContext from '@/context/LoadingContext';
import { GeneralSiteData } from '@/types/GeneralSiteData';
import { Service } from '@/types/Service';
import { Head, router, usePage } from '@inertiajs/react'
import { ArrowUp } from 'lucide-react';
import { createContext, RefObject, use, useEffect, useRef, useState } from 'react'
import MoonLoader from "react-spinners/MoonLoader";

export default function Layout({ children, title }: { children: React.ReactNode, title?: string }) {
    
    let mainRef = useRef<HTMLElement|null>(null);
    let backToTop = useRef<HTMLDivElement|null>(null);
    const { generalData } = usePage<{ generalData: GeneralSiteData }>().props;
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        router.on('start', () => {
            setIsLoading(true);
        });
        router.on('finish', () => {
            setIsLoading(false);
        });
        backToTop.current?.classList.add('opacity-0', 'translate-y-20');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                backToTop.current?.classList.remove('opacity-0', 'translate-y-20');
                backToTop.current?.classList.add('opacity-100', '-translate-y-0');
            } else {
                backToTop.current?.classList.remove('opacity-100', '-translate-y-0');
                backToTop.current?.classList.add('opacity-0', 'translate-y-20');
            }
        });
    }, [])

    useEffect(() => {
        if (isLoading) {
            mainRef.current?.classList.add('opacity-50');
        } else {
            mainRef.current?.classList.remove('opacity-50');
        }
    }, [isLoading]);

    return (
        <LoadingContext.Provider value={{ isLoading: isLoading, setLoading: setIsLoading }}>
            <Head>
                <title>{title ? `${title} - ${generalData.title}` : generalData.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={generalData.description} />
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
        <main ref={mainRef} className='transition-all duration-300'>
            <div
            ref={backToTop}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} className='back-to-top fixed bottom-12 right-12 w-16 h-16 bg-[#913E49] text-white cursor-pointer flex items-center justify-center rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#913E49]'>
                <ArrowUp size={32}  />
            </div>
            <div className='w-full h-full'>
                    <Header  />
                {children}
                <Footer />
            </div>
        </main>
        {
            isLoading && (
                <div className='fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center'>
                    <MoonLoader
                        color="#913E49"
                        size={100}
                        aria-label="Loading Spinner"
                    />
                </div>
            )
        }
        </LoadingContext.Provider>
    )
}