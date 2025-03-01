import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { router } from '@inertiajs/react'
import { RefObject, use, useEffect, useRef, useState } from 'react'
import MoonLoader from "react-spinners/MoonLoader";

export default function Layout({ children }) {

    let mainRef = useRef<HTMLElement|null>(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        router.on('start', () => {
            mainRef.current?.classList.add('opacity-50');
            setIsLoading(true);
        });

        router.on('finish', () => {
            mainRef.current?.classList.remove('opacity-50');
            setIsLoading(false);
        });
    }, [])

    return (
        <>
        <main ref={mainRef} className='transition-all duration-300'>
            <div className='w-full h-full'>
                <Header />
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
        </>
    )
}