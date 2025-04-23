'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = ['about', 'projects', 'skills', 'contact'];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    setIsDarkMode(!isDark);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <nav className={styles.navbar}>
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className={styles.logoLink}>
          Sudip Pandey
        </Link>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`${styles.links} ${styles.mobile}`}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {SECTIONS.map((sec, idx) => (
              <motion.div key={sec} custom={idx} initial="hidden" animate="visible" variants={linkVariants}>
                <Link
                  href={`/#${sec}`}
                  className={`${styles.navLink} ${activeSection === sec ? styles.activeLink : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle Theme"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.links}>
        {SECTIONS.map((sec, idx) => (
          <motion.div key={sec} custom={idx} initial="hidden" animate="visible" variants={linkVariants}>
            <Link
              href={`/#${sec}`}
              className={`${styles.navLink} ${activeSection === sec ? styles.activeLink : ''}`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          </motion.div>
        ))}
        <motion.button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle Theme"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </motion.button>
      </div>

      <div className={styles.menuIcon} onClick={() => setIsMenuOpen(open => !open)}>
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="28" width="28">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="28" width="28">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
