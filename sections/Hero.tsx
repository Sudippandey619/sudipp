'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/hero.module.css';
import { motion } from 'framer-motion';

const roles = ['React Developer', 'Freelancer', 'Tech Enthusiast', 'Next.js Lover'];

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [socialsVisible, setSocialsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      setText(currentRole.slice(0, charIndex + 1));

      if (charIndex < currentRole.length) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const handleResumeHover = () => setSocialsVisible(true);
  const handleResumeLeave = () => setSocialsVisible(false);

  return (
    <section className={styles.heroSection}>
      {/* Left Side */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>Hi, I’m Sudip Pandey 👋</h1>
        <h2 className={styles.role}>{text}</h2>
        <p className={styles.description}>
          I build fast, modern web experiences using HTML, CSS, React, and Next.js.
          Passionate about freelancing, job opportunities, and growing my personal brand.
        </p>

        <div className={styles.buttons}>
          <a
            href="/SudipPandey_Resume.pdf"
            style={{ textDecoration: 'none' }}
            className={styles.resumeBtn}
            onMouseEnter={handleResumeHover} // Show socials when hovered
            onMouseLeave={handleResumeLeave} // Hide socials when not hovered
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10.4a.5.5 0 0 1 1 0V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V10.4a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L4.854 7.646a.5.5 0 1 0-.708.708l3.5 3.5z" />
            </svg>
          </a>

          <a href="#contact" style={{ textDecoration: 'none' }} className={styles.talkBtn}>
            Let’s Talk 💬
          </a>
        </div>

        {/* Social Links */}
<div className={styles.socials}>
  <a href="https://github.com/Sudippandey619" target="_blank" rel="noopener noreferrer">
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38..." />
    </svg>
  </a>
  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4..." />
    </svg>
  </a>
  <a href="mailto:sudippandey619@gmail.com">
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2..." />
    </svg>
  </a>
</div>

      </motion.div>
      
      {/* Right Side */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/sudip.png"
            alt="Sudip Pandey"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </div>
      </motion.div>
      
      {/* Scroll Arrow */}
      <div className={styles.scrollArrow}>
        <a href="#skills">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 12a.5.5 0 0 1-.374-.155l-4.5-5a.5.5..." />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
