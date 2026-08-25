import Link from 'next/link';
import Image from 'next/image';
import css from './page.module.css';

export default function Home() {
  return (
    <div>
      <header>
        <div className={`container ${css.headerContainer}`}>
          <div className={css.logo}>
            <Link href="/">
              <Image src="/Logo.webp" alt="Logo" width={177} height={43} />
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
            <Link href="#" className={css.authButton + ' ' + css.loginButton}>
              Login
            </Link>
            <Link href="#" className={css.authButton}>
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className={`container`}>
          <h1>Welcome to US Power Seller</h1>
        </div>
      </main>
    </div>
  );
}
