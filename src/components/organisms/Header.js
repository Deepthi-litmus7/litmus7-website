// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-8 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        {/* <img src="/logo.png" alt="Logo" className="w-12 h-auto sm:w-16" /> */}

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/who-we-are" className="text-gray-700 hover:text-gray-900">
            Who we are
          </Link>
          <Link href="/what-we-do" className="text-gray-700 hover:text-gray-900">
            What we do
          </Link>
          <Link href="/future-of-retail" className="text-gray-700 hover:text-gray-900">
            Future of Retail
          </Link>
        </nav>
      </div>

      {/* Contact Button */}
      <div className="space-x-4 flex items-center">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
          Get in Touch
        </button>
        {/* Mobile Menu Icon for smaller screens */}
        <button className="md:hidden">
          {/* <img src="/menu-icon.svg" alt="Menu" className="w-6 h-6" /> */}
        </button>
      </div>
    </header>
  );
}
