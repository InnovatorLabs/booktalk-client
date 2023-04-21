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
    <div className="flex justify-between items-center px-6">
      <section className="flex">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold">BookTok</h1>
        </Link>
        <nav>
          <ul className="flex gap-8 p-4 ml-10">
            {menu.map(item => (
              <li
                key={item.href}
                className={pathName === item.href ? 'font-bold' : 'font-normal'}
              >
                <Link href={item.href}>{item.name}</Link>
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
