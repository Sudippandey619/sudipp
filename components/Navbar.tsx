// Navbar.tsx
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaSun as RawFaSun, FaMoon as RawFaMoon } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/navbar.module.css'; // Import CSS Module

const FaSun: IconType = RawFaSun;
const FaMoon: IconType = RawFaMoon;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? 'dark' : ''}`}>
      <Link href="/">
        <h1>Sudip</h1>
      </Link>

      <div className="flex items-center gap-6">
        <Link href="#about" className="text-purple-700 dark:text-purple-300 hover:underline">About</Link>
        <Link href="#projects" className="text-purple-700 dark:text-purple-300 hover:underline">Projects</Link>
        <Link href="#skills" className="text-purple-700 dark:text-purple-300 hover:underline">Skills</Link>
        <Link href="#contact" className="text-purple-700 dark:text-purple-300 hover:underline">Contact</Link>
        
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={styles['theme-toggle']}
        >
          {/* {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />} */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
