import React from 'react'
import { btnLinks } from '../constants'

const Links = () => (
    <section className="mt-8 md:mt-3 flex flex-row justify-center">
        <div className='mt-3 w-full mx-8'>
        <ul className="list-none">
            {btnLinks.map((btnLink, index) => (
                <li key={btnLink.id} className='font-poppins hover:cursor-pointer text-[16px] py-[24px] px-[32px] mb-5 rounded-[8px] text-center bg-gray-200'>
                    <a href={btnLink.goto} id={btnLink.id}>{btnLink.label}</a>
                </li>
            ))}
        </ul>
        </div>
    </section>
  )


export default Links