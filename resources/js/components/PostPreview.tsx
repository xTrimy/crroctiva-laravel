import { Link } from '@inertiajs/react'
import React, { useEffect } from 'react'
import NoImage from '../assets/no-image.jpeg'
import { t } from 'i18next'
function PostPreview({ id, image, text }: { id: number, image: string, text?: string }) {
    if (text && text.length > 200) {
        text = text.slice(0, 200) + '...'
    }
    return (
        <div className='mx-auto max-w-xl w-full p-8 relative bg-[#D9F9F3] rounded-md'>
            <Link href={`/post/${id}`}>
                <div className='w-full xl:h-96 lg:h-72 h-72 overflow-hidden rounded-md bg-black relative'>
                    <div className='w-full h-full flex justify-center items-center text-2xl absolute top-0 left-0 text-white text-bold'>
                        <p>
                            {t('Read More')}
                        </p>
                    </div>
                    <img src={image ?? NoImage} className='object-cover w-full h-full hover:scale-110 transition-all hover:opacity-50 absolute top-0 left-0' alt="" />
               
                </div>
            </Link>
            <div className=' drop-shadow-md mt-4 text-gray-500'>
                <p className='text-xl'>{text}</p>
                <Link href={`/post/${id}`}>
                    <p className='mt-4 cursor-pointer hover:underline'>{t('Discover More')}</p>
                </Link>
            </div>
        </div>
    )
}

export default PostPreview