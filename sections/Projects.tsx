import React from 'react';
import styles from '../styles/projects.module.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my projects and resume built using Next.js and Tailwind CSS.',
    link: '#'
  },
  {
    title: 'Task Manager App',
    description: 'A full-stack app for managing daily tasks built with MERN stack.',
    link: '#'
  },
  {
    title: 'Blog CMS',
    description: 'A dynamic blog content management system powered by Markdown and Next.js.',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className={`${styles.projectsSection} py-20 px-8`}>
      <div className={styles.projectsWrapper}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectCard}`}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                className={styles.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
