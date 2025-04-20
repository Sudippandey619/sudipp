import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import styles from '../styles/hero.module.css';

const roles = [
  'React Developer',
  'Freelancer',
  'Tech Enthusiast',
  'Next.js Lover',
];

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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

  return (
    <section className={styles.heroSection}>
      {/* Left Side */}
      <div className={styles.left}>
        <h1 className={styles.title}>Hi, I’m Sudip Pandey 👋</h1>
        <h2 className={styles.role}>{text}</h2>
        <p className={styles.description}>
          I build fast, modern web experiences using HTML, CSS, React, and Next.js.
          Passionate about freelancing, job opportunities, and growing my personal brand.
        </p>

        <div className={styles.buttons}>
          <a href="/SudipPandey_Resume.pdf" download className={styles.resumeBtn}>
            Download Resume <FaArrowDown />
          </a>
          <a href="#contact" className={styles.talkBtn}>
            Let’s Talk
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/Sudippandey619" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:sudippandey619@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.imageWrapper}>
        <Image
  src="/sudip.png"
  alt="Sudip Pandey"
  layout="fill"
  objectFit="cover"
  objectPosition="top"
  priority/>
        </div>
      </div>

      
      {/* Scroll Arrow */}
      <div className={styles.scrollArrow}>
        <a href="#skills"><FaArrowDown size={24} /></a>
      </div>
    </section>
  );
};

export default Hero;
