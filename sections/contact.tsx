'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Contact.module.css';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        toast.success('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setError('❌ Failed to send message. Please try again.');
        toast.error('❌ Failed to send message. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className={`${styles.contactSection} dark:${styles.dark}`}>
      <ToastContainer />
      
      {/* Contact Me Heading */}
      <h2 className={styles.heading}>Contact Me</h2>

      {/* Contact Form Section */}
      <div className={`${styles.formContainer} dark:${styles.dark}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} dark:${styles.dark}`}
            />
          </div>

          <div>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} dark:${styles.dark}`}
            />
          </div>

          <div>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} dark:${styles.dark}`}
            />
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Get in Touch Section */}
      <div className={styles.contactInfoBox}>
        <h3>Get in Touch</h3>
        <div className={styles.contactInfo}>
          <a href="tel:+9745348929" className={styles.contactLink}>📞 Call</a>
          <a href="mailto:sudippandey619@example.com" className={styles.contactLink}>📧 Email</a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialLinksBox}>
        <h3>Connect with me</h3>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook facebook"></i> {/* Facebook Icon */}
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp whatsapp"></i> {/* WhatsApp Icon */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
