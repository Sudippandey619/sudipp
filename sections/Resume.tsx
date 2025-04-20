import React from 'react';
import styles from '../styles/resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Resume = () => {
  return (
    <section
      id="resume"
      className={`${styles.resumeSection}`}
    >
      <h2 className={styles.heading}>My Resume</h2>

      <div className="flex flex-col items-center">
        <p className={styles.description}>
          You can download my resume in PDF format by clicking the button below. It includes my education, experience, projects, and skills summary.
        </p>

        <Link
          href="/SudipPandey_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadBtn}
        >
          <FontAwesomeIcon icon={faDownload} />
          Download Resume
        </Link>
      </div>
    </section>
  );
};

export default Resume;
