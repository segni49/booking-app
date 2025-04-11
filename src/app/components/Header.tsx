import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'
import { FaSignOutAlt,FaBuilding } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-gray-100">
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image className="h-12 w-12" src={logo} alt="Bookit" priority= {true} />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Rooms
              </Link>
            
              <a
                href="/bookings.html"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Bookings
              </a>
              <a
                href="/add-room.html"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Add Room
              </a>
            </div>
          </div>
        </div>
 
        <div className="ml-auto">
          <div className="ml-4 flex items-center md:ml-6">
            <a href="my-rooms.html">
              <FaBuilding className='inline mr-1'/> My Rooms
            </a>
            <a
              href="login.html"
              className="mx-3 text-gray-800 hover:text-gray-600"
            >
              <FaSignOutAlt className='inline mr-1'/> Sign Out
            </a>
          </div>
        </div>
      </div>
    </nav>

  
    <div className="md:hidden">
      <nav className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <Link
          href="/"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
        >
          Rooms
        </Link>
   
        <a
          href="/bookings.html"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
        >
          Bookings
        </a>
        <a
          href="/add-room.html"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
        >
          Add Room
        </a>
      </nav>
    </div>
  </header>

  )
}
