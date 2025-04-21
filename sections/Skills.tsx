'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import styles from '../styles/skills.module.css';

const skills = [
  { name: 'HTML', logo: '/skills/html.png', percent: 95 },
  { name: 'CSS', logo: '/skills/css.png', percent: 90 },
  { name: 'JavaScript', logo: '/skills/js.png', percent: 85 },
  { name: 'React', logo: '/skills/react.png', percent: 80 },
  { name: 'Next.js', logo: '/skills/nextjs.png', percent: 75 },
  { name: 'Tailwind CSS', logo: '/skills/tailwind.png', percent: 85 },
  { name: 'MongoDB', logo: '/skills/mongodb.png', percent: 70 },
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section className={styles.skillsSection} id="skills" ref={ref}>
      <h2 className={styles.skillsTitle}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className={styles.placeholderCard}></div>
              ))
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
                    <circle
                      cx="50%"
                      cy="50%"
                      r="30"
                      stroke="#e5e7eb"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="30"
                      stroke="url(#grad)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={188.4}
                      strokeDashoffset={
                        hasAnimated ? 188.4 - (188.4 * skill.percent) / 100 : 188.4
                      }
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
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className={styles.skillLogo}
                  />
                </div>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.progressWrapper}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: hasAnimated ? `${skill.percent}%` : '0%',
                    }}
                  >
                    <span className={styles.barPercentageInside}>{skill.percent}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
      </div>

      {/* Rocket Animation */}
      {inView && (
        <div className={styles.rocketWrapper}>
          <motion.div
            className={styles.rocket}
            animate={{ x: ['-100%', '100%'], y: ['100%', '-100%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            🚀
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Skills;
