'use client';

import Link from 'next/link';
import Image from 'next/image';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <div className={css.logoWrapper}>
          <Link className={css.logo} href="/">
            <Image
              className={css.logoImage}
              src="/Logo.webp"
              alt="Logo"
              width={177}
              height={43}
              loading="eager"
            />
          </Link>
        </div>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>Home</li>
            <li className={css.navItem}>About</li>
            <li className={css.navItem}>Services</li>
            <li className={css.navItem}>Contact</li>
            <li className={css.navItem}>Blog</li>
            <li className={css.navItem}>FAQ</li>
          </ul>
        </nav>
        <div className={css.auth}>
          <Link
            href="/login"
            className={css.authButton + ' ' + css.loginButton}
          >
            Login
          </Link>
          <Link href="/register" className={css.authButton}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
