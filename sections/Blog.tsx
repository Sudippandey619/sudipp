import Link from 'next/link';
import styles from '../styles/Blog.module.css';

const blogPosts = [
  {
    title: 'Getting Started with React and Next.js',
    slug: 'react-nextjs-getting-started',
    summary: 'Learn the basics of building powerful web apps using React and Next.js.',
    date: 'April 15, 2025',
  },
  {
    title: 'Tips to Improve Your CSS Skills',
    slug: 'css-improvement-tips',
    summary: 'Sharpen your design skills with these practical CSS tips.',
    date: 'April 10, 2025',
  },
  {
    title: 'How to Freelance as a Developer',
    slug: 'freelance-developer-guide',
    summary: 'A quick guide to finding freelance work and building your personal brand.',
    date: 'April 5, 2025',
  },
];

const Blog = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <h2 className={styles.heading}>My Blog</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`${styles.post} dark:${styles.dark}`}
          >
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={`${styles.postDate} dark:${styles.postDateDark}`}>{post.date}</p>
            <p className={styles.postSummary}>{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
