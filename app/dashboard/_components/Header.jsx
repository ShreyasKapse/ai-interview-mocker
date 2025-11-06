"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path);
    })
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/logo (4).svg'} alt='logo' width={160} height={100}   />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>
            <a href='/dashboard'>
            Dashboard
            </a>
            </li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/about' && 'text-primary font-bold'}`}><a href='/about'>Aboutus</a></li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/howitswork' && 'text-primary font-bold'}`}><a href='/howitswork'>How its works?</a></li>
        </ul>
        <UserButton/>
    </div>
  )
}
