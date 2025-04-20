'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/skills.module.css'; // Import the CSS module

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Next.js', level: 70 },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);
  const rocketControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fly = async () => {
      while (true) {
        await rocketControls.start({
          x: ['-100%', '100%'],
          y: ['100%', '-100%'],
          rotate: [0, 45],
          transition: { duration: 4, ease: 'easeInOut' },
        });
        await rocketControls.set({ x: '-100%', y: '100%', rotate: 0 });
      }
    };
    fly();
  }, [rocketControls]);

  return (
    <section
      id="skills"
      className={`${styles.skillsSection} py-16 px-4`}
    >
      <h2 className={`${styles.skillsTitle} text-3xl font-bold mb-12 text-center`}>🚀 My Skills</h2>

      {/* Flying Rocket Animation */}
      <div className={styles.rocketAnimationWrapper}>
        <motion.div
          className="absolute w-16 h-16 z-10"
          animate={rocketControls}
        >
          <Image src="/rocket.png" alt="Rocket" width={64} height={64} />
        </motion.div>
      </div>

      {/* Skills Progress Bars */}
      <div className="space-y-6 max-w-xl mx-auto mt-8 px-4">
      {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.skillCard}>
              <div className="flex justify-between mb-1 text-sm sm:text-base">
                <div className={styles.skillTextWrapper}>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.skillBarWrapper}>
                <motion.div
                  className={`${styles.skillBar}`}
                  initial={{ width: 0 }}
                  animate={{ width: loaded ? `${skill.level}%` : 0 }}
                  transition={{ duration: 1 + index * 0.9 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
