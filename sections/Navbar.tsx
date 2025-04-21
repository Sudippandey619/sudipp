// components/Navbar.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

 const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', !isDark);
};

  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a style={{ textDecoration: 'none' }}>
            <h1>Sudip</h1>
          </a>
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="#about" className={styles.navLink}>About</Link>
        <Link href="#projects" className={styles.navLink}>Projects</Link>
        <Link href="#skills" className={styles.navLink}>Skills</Link>
        <Link href="#contact" className={styles.navLink}>Contact</Link>

        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
