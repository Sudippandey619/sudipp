import Image from 'next/image';
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
        <a href="/SudipPandey_Resume.pdf" style={{ textDecoration: 'none' }} className={styles.resumeBtn}>            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              style={{ marginLeft: '8px' }}
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10.4a.5.5 0 0 1 1 0V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V10.4a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L4.854 7.646a.5.5 0 1 0-.708.708l3.5 3.5z"/>
            </svg>
          </a>
          <a href="#contact"  style={{ textDecoration: 'none' }} className={styles.talkBtn}>
            Let’s Talk  💬
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/Sudippandey619" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C3.7 14.09 3.22 12.81 3.22 12.81c-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.8.06 1.22.83 1.22.83.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 8 3.47a9.59 9.59 0 0 1 2.5.34c1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zM3.743 5.138c.837 0 1.356-.555 1.356-1.248-.015-.708-.52-1.248-1.342-1.248-.822 0-1.356.54-1.356 1.248 0 .693.519 1.248 1.327 1.248h.015zM13.458 13.394V9.359c0-2.154-1.148-3.156-2.679-3.156-1.233 0-1.788.688-2.099 1.172v-1.003H6.28c.03.664 0 7.225 0 7.225h2.4v-4.036c0-.216.016-.431.079-.586.173-.431.568-.878 1.231-.878.868 0 1.215.662 1.215 1.633v3.867h2.253z"/>
            </svg>
          </a>

          <a href="mailto:sudippandey619@gmail.com">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383v6.634l5.803-3.482L0 5.383zm6.761 3.985l-6.761 4.062A2 2 0 0 0 2 14h12a2 2 0 0 0 1.999-1.57l-6.76-4.062L8 9.417l-1.239-.049zM16 5.383l-5.803 3.152L16 12.017V5.383z"/>
            </svg>
          </a>
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
            priority
          />
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className={styles.scrollArrow}>
        <a href="#skills">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 12a.5.5 0 0 1-.374-.155l-4.5-5a.5.5 0 0 1 .748-.66L8 10.792l4.126-4.607a.5.5 0 1 1 .748.66l-4.5 5A.5.5 0 0 1 8 12z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
