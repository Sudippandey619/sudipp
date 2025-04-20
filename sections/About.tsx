import React from 'react';
import styles from '../styles/about.module.css';
import { useTheme } from 'next-themes';
import  Style  from '../styles/about.module.css';

export default function About() {
  const { theme } = useTheme();

  return (
    <section className={`${styles.aboutSection} ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I'm a self-motivated developer who loves solving problems and building powerful web applications.
          With experience across the full stack, I specialize in modern technologies like React, Next.js,
          Node.js, and MongoDB. My goal is to create meaningful digital experiences that make people's lives better.
        </p>
      </div>
    </section>
  );
}
