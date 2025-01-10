"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

const links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/Men' },
    { name: 'Women', href: '/Women' },
    { name: 'Teens', href: '/Teens' }
]

export default function Navbar() {
    const pathname = usePathname()
    const { handleCartClick } = useShoppingCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Toggle menu visibility on mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='mb-8 border-b'>
            <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
                {/* Logo */}
                <Link href="/">
                    <h1 className='text-2xl md:text-4xl font-bold'>
                        Next <span className='text-primary'>Commerce</span>
                    </h1>
                </Link>

                {/* Hamburger Icon for Mobile */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className='text-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Navbar Links (Desktop version) */}
                <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link className='text-lg font-semibold text-primary' href={link.href}>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Shopping Cart Button */}
                <div className='flex divide-x border-r sm:border-l'>
                    <Button variant={"outline"} onClick={() => handleCartClick()} className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'>
                        <ShoppingBag />
                        <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
                            Cart
                        </span>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu (when hamburger is clicked) */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-6 shadow-lg`}>
                <nav>
                    {links.map((link, idx) => (
                        <div key={idx} className="py-2">
                            {pathname === link.href ? (
                                <Link className='text-lg font-semibold text-primary' href={link.href}>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    )
}
