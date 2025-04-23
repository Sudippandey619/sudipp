'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import rocketFire from '../public/lotties/rocketFire.json';

import styles from '../styles/Skills.module.css';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const skills = [
  { name: 'HTML', logo: '/skills/html.png', percent: 95 },
  { name: 'CSS', logo: '/skills/css.png', percent: 90 },
  { name: 'JavaScript', logo: '/skills/js.png', percent: 85 },
  { name: 'React', logo: '/skills/react.png', percent: 80 },
  { name: 'Next.js', logo: '/skills/next.png', percent: 75 },
  { name: 'Tailwind CSS', logo: '/skills/tailwind.png', percent: 85 },
  { name: 'MongoDB', logo: '/skills/Mongodb.png', percent: 70 },
  { name: 'C', logo: '/skills/c.png', percent: 85 },
  { name: 'C++', logo: '/skills/cpp.png', percent: 80 },
  { name: 'Python', logo: '/skills/Py.png', percent: 88 },
  { name: 'Django', logo: '/skills/django.png', percent: 73 },
  { name: 'node.js', logo: '/skills/node.png', percent: 85 },
  { name: 'Express', logo: '/skills/express.png', percent: 90 },
];

const Skills = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showRocket, setShowRocket] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      if (audioRef.current && !isMuted) {
        audioRef.current.play().catch((err) => console.error('Audio play error:', err));
      }
    }
  }, [inView, hasAnimated, isMuted]);

  const handleMuteUnmute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch((err) => console.error('Audio play error:', err));
      } else {
        audioRef.current.pause();
      }
    }
    setIsMuted(!isMuted);
  };

  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const size = Math.random() * 2 + 1;
      stars.push(
        <div
          key={i}
          className={styles.starParticle}
          style={{
            left: `${left}%`,
            bottom: '-10px',
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <section className={styles.skillsSection} id="skills" ref={ref}>
      <div className={styles.cosmicBackground}></div>
      {generateStars()}
      <h2 className={styles.skillsTitle}>My Skills</h2>

      <div className={styles.skillsGrid} style={{ zIndex: 2 }}>
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, idx) => <div key={idx} className={styles.placeholderCard}></div>)
          : skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
              >
                <div className={styles.logoRing}>
                  <svg className={styles.ringSvg}>
                    <circle cx="50%" cy="50%" r="30" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="30"
                      stroke="url(#grad)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={188.4}
                      strokeDashoffset={hasAnimated ? 188.4 - (188.4 * skill.percent) / 100 : 188.4}
                      strokeLinecap="round"
                      className={styles.progressRing}
                      style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Image src={skill.logo} alt={skill.name} width={40} height={40} className={styles.skillLogo} />
                </div>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.progressWrapper}>
                  <div
                    className={styles.progressBar}
                    style={{ width: hasAnimated ? `${skill.percent}%` : '0%' }}
                  >
                    <span className={styles.barPercentageInside}>{skill.percent}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
      </div>

      {inView && showRocket && (
        <div className={styles.rocketWrapper}>
          <motion.div
            className={styles.rocket}
            animate={{
              x: ['0vw', '100vw'],
              y: ['100vh', '0vh'],            }}
            transition={{ duration: 12, ease: 'easeInOut' }}
            onAnimationStart={() => {
              if (audioRef.current && !isMuted) {
                audioRef.current.play().catch((err) => console.error('Audio play error:', err));
              }
            }}
            onAnimationComplete={() => setShowRocket(false)}
          >
            <div className={styles.rocketWithFire}>
              <Lottie animationData={rocketFire} loop className={styles.fireTrail} />
              <div className={styles.cloudTrail}></div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Mute/Unmute Buttons */}
      <button className={styles.muteButton} onClick={handleMuteUnmute}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>

      <audio ref={audioRef} src="/sounds/rocket.mp3" preload="auto" />
    </section>
  );
};

export default Skills;
