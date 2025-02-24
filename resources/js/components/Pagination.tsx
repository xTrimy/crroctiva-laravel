import { PaginationType } from '@/types/PaginationType'
import { Link } from '@inertiajs/react'
import React from 'react'

function Pagination({ pagination }: { pagination: PaginationType }) {
    let params = new URLSearchParams(window.location.search)
    let page = parseInt(params.get('page') ?? '1')
    let url = window.location.pathname
    return (
        <div className='flex justify-center mt-8'>
            <ul className='flex'>
                {
                    page > 1 &&
                    <Link href={`${
                        url
                        }?page=${
                        page - 1
                        }`} className='mx-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-l-md'>Previous</Link>
                }
                {
                    Array.from({ length: pagination.pageCount }, (_, i) =>{
                        if(i+1 === page){
                            return <div key={i} className='mx-1 px-3 py-2 bg-red-900 text-white rounded-md'>{i + 1}</div>
                            }else{
                            return <Link key={i} href={`${url
                                }?page=${i + 1
                                }`} className='mx-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-md'>{i + 1}</Link>
                            }
                    })
                }
                {
                    page < pagination.pageCount &&
                    <Link href={`${url
                        }?page=${page + 1
                        }`} className='mx-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-r-md'>Next</Link>
                }
            </ul>
        </div>
    )
}

export default Pagination