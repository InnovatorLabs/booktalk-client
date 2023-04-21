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
    <div className="flex h-full justify-between items-center px-6">
      <section className="flex h-full">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold">BookTok</h1>
        </Link>
        <nav className="flex">
          <ul className="flex h-full gap-8 ml-10">
            {menu.map(item => (
              <li key={item.href} className="relative flex h-full items-center">
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
        className="bg-[#89CFF0] text-white py-1 px-5 rounded"
        href="/auth/login"
      >
        로그인
      </Link>
    </div>
  );
}
