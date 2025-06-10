import LoadingContext from '@/context/LoadingContext';
import { router, usePage } from '@inertiajs/react';
import axios from 'axios';
import { ChevronDown, Globe } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { route } from 'ziggy-js';
import i18n from "i18next";
import { Locale } from '@/types/Locale';
import { useLocalStorage } from 'usehooks-ts';

function LanguageSelection() {
    const { locale, locales } = usePage<{ locale: string, locales: Locale[] }>().props;
    const { currentURL } = usePage<{ currentURL: string }>().props;
    const { setLoading } = useContext(LoadingContext);
    const [localeStore, setLocaleValue, removeLocaleValue] = useLocalStorage('locale', locale);
    console.log('LanguageSelection rendered with locale:', locale, 'and locales:', locales);
    const handleLanguageChange = (newLocale: string) => {
        if (setLoading) {
            setLoading(true);
        }
        axios.get(route('setLocale', { locale: newLocale })).then((data) => {
            router.visit(
                window.location.pathname + window.location.search,
                {
                preserveUrl: true,
                replace: false,
                preserveScroll: true,
                onSuccess: () => {
                    changeDirection(locale);
                    setLocaleValue(newLocale);
                    i18n.changeLanguage(newLocale).then(() => {
                        if (setLoading) {
                            setLoading(false);
                        }
                    });
                    
                },
            }
        
        );
        });
    }
    useEffect(() => {
        setLocaleValue(locale);
        i18n.changeLanguage(locale).then(() => {
            changeDirection(locale);
    });
    }, []);

    useEffect(() => {
        changeDirection(locale);
    }, [locale]);
    function changeDirection(locale: string) {
        if (locale === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        }
        else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }
    return (
        <div className='flex items-center gap-2 text-gray-500 cursor-pointer'>
            <Globe />
            
            <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className=' bg-transparent outline-none'
            >
                {locales.map((loc) => (
                    <option key={loc.code} value={loc.code}>
                        {loc.name}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default LanguageSelection