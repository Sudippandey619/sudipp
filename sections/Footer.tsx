// Footer.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/footer.module.css';
import FireworksCanvas from './FireworksCanvas';

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [showPopup, setShowPopup] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowPopup(true);
      setShowFireworks(true);

      const popupTimeout = setTimeout(() => {
        setShowPopup(false);
      }, 4000); // message duration

      const fireworksTimeout = setTimeout(() => {
        setShowFireworks(false);
      }, 5000); // fireworks duration

      return () => {
        clearTimeout(popupTimeout);
        clearTimeout(fireworksTimeout);
      };
    }
  }, [inView]);

  return (
    <footer className={styles.footer} ref={ref}>
      <p>© 2025 Sudip Pandey. All rights reserved.</p>

      {showPopup && (
        <div className={styles.popupMessage}>
          🎉 Congratulations! You’ve reached the end. Thanks for scrolling!
        </div>
      )}

      {showFireworks && <FireworksCanvas show={showFireworks} />}
    </footer>
  );
};

export default Footer;