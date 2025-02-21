'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const path = usePathname();
    console.log(path);

  return (
    <>
  {/* ========== HEADER ========== */}
  <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
    <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
      <div className="px-4 md:px-0 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="../templates/personal/index.html"
            aria-label="Preline"
          >
        My React App
          </a>
        </div>
        {/* End Logo */}
        <div className="md:hidden">
          {/* Toggle Button */}
          <button
            type="button"
            className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            id="hs-navbar-header-floating-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-header-floating"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-header-floating"
          >
            
          </button>
          {/* End Toggle Button */}
        </div>
      </div>
      <div
        id="hs-navbar-header-floating"
        className="hidden hs-collapse overflow-hidden transition-all duration-300 grow md:block"
        aria-labelledby="hs-navbar-header-floating-collapse"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
          <Link
            className={"py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 font-medium text-gray-800 focus:outline-none" + 
              (path === '/home' ? 'border-neutral-200 text-neutral-200' : 'border-transparent text-neutral-400')}
            href="/home"
          >
            Home
          </Link>
          <Link
            className={"py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 font-medium text-gray-800 focus:outline-none" + 
              (path === '/login' ? 'border-neutral-200 text-neutral-200' : 'border-transparent text-neutral-400')}
            href="/login"
          >
            Login
          </Link>
          <Link
          className={"py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 font-medium text-gray-800 focus:outline-none" + 
            (path === '/signup' ? 'border-neutral-200 text-neutral-200' : 'border-transparent text-neutral-400')}
          href="/signup"
        >
          Signup
        </Link>

        <Link
        className={"py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 font-medium text-gray-800 focus:outline-none" + 
          (path === '/about' ? 'border-neutral-200 text-neutral-200' : 'border-transparent text-neutral-400')}
        href="/about"
      >
        About
        </Link>
        </div>
      </div>
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
</>

  )
}

export default Navbar