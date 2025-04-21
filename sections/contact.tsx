'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import styles from '../styles/contact.module.css';

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
    <section id="contact" className={styles.contactSection}>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.contactWrapper}
      >
        <div className={styles.infoBox}>
          <h3 className={styles.infoBoxTitle}>Get in Touch</h3>
          <a href="tel:+9745348929" className={styles.contactLink}>📞 +9745348929</a>
          <a href="mailto:sudippandey619@example.com" className={styles.contactLink}>📧 sudippandey619@example.com</a>

          <h3 className={styles.infoBoxTitle}>Connect with me</h3>
          <div className={styles.socialIcons}>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </motion.a>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2 className={styles.contactTitle}>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
              <label className={styles.label}>Name</label>
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
              <label className={styles.label}>Email</label>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              />
              <label className={styles.label}>Message</label>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
