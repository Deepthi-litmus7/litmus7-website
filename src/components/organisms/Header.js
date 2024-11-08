import Link from 'next/link';
import Button from '../atoms/Button';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-8 shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/litmus7-white-logo.svg" alt="Logo" className="w-12 h-auto sm:w-16" />
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

      <div className="space-x-4 flex items-center">
        <Button text={"Get in Touch"} className={"bg-gray-800  text-white px-4 py-2 rounded-full"}/>
        <button className="md:hidden">
          <img src="/menu-icon.svg" alt="Menu" className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
