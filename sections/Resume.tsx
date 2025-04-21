import React, { useState } from 'react';
import styles from '../styles/resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Resume = () => {
  const [downloadClicked, setDownloadClicked] = useState(false);

  const handleDownloadClick = () => {
    setDownloadClicked(true);
    // You can add analytics tracking here
    // For example, if using Google Analytics:
    // window.gtag('event', 'download', { event_category: 'resume', event_label: 'pdf' });
  };

  return (
    <section id="resume" className={`${styles.resumeSection} p-6`}>
      <h2 className={`${styles.heading} text-3xl font-bold text-center mb-6`}>My Resume</h2>

      {/* Resume Preview Section */}
      <div className="text-center mb-6">
        <p className="text-lg text-gray-700 mb-4">
          Here's a quick preview of my qualifications:
        </p>
        <ul className="list-disc pl-6 text-left">
          <li>Education: Bachelor's in Computer Science</li>
          <li>Experience: 3+ years in full-stack web development</li>
          <li>Skills: React, Node.js, MongoDB, Python, Django, etc.</li>
        </ul>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-col items-center space-y-4">
        <p className={styles.description}>
          You can download my resume in PDF format by clicking one of the buttons below. It includes my education, experience, projects, and skills summary.
        </p>
        
        <div className="flex space-x-4">
          {/* PDF Download Button */}
          <Link
            href="/SudipPandey_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.downloadBtn} bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-300 ease-in-out`}
            onClick={handleDownloadClick}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download PDF</span>
          </Link>

          {/* DOCX Download Button */}
          <Link
            href="/SudipPandey_Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.downloadBtn} bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-300 ease-in-out`}
            onClick={handleDownloadClick}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download DOCX</span>
          </Link>
        </div>
      </div>

      {/* Download Confirmation */}
      {downloadClicked && (
        <p className="text-green-600 text-center mt-4">Download Started!</p>
      )}
    </section>
  );
};

export default Resume;
