'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menu = [
  {
    href: '/book',
    name: '서재',
  },
  {
    href: '/feed',
    name: '피드',
  },
  {
    href: '/team',
    name: '모임',
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex h-full justify-between items-center px-2 sm:px-6">
      <section className="flex h-full">
        <Link href="/" className="hidden sm:block">
          <h1 className="flex items-center h-full text-2xl font-bold">
            BookTok
          </h1>
        </Link>
        <nav className="flex">
          <ul className="flex h-full gap-8 ml-0 sm:ml-10">
            {menu.map(item => (
              <li
                key={item.href}
                className="relative flex h-full items-center whitespace-nowrap"
              >
                <Link href={item.href}>{item.name}</Link>
                {pathName === item.href ? (
                  <div className="absolute bottom-0 w-full h-[4px] bg-[#89CFF0] rounded-t-xl" />
                ) : (
                  <></>
                )}
              </li>
            ))}
            {/* <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li> */}
          </ul>
        </nav>
      </section>
      <Link
        className="bg-[#89CFF0] whitespace-nowrap text-white py-2 px-6 rounded hover:brightness-110"
        href="/auth/login"
      >
        로그인
      </Link>
    </div>
  );
}
