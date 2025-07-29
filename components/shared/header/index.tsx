import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import Menu from './menu';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt={`${APP_NAME} logo`}
            width={48}
            height={48}
            priority = {true}
          />
          <span className="hidden lg:block ml-3 text-2xl font-bold">
            {APP_NAME}
          </span>
        </Link>
        <Menu/>
      </div>
    </header>
  );
};

export default Header;