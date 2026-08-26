import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <div className="section-badge">
          <MessageSquare size={14} />
          <span>GET IN TOUCH</span>
        </div>
        <h1>Contact Me</h1>
        <p className="section-subtitle">
          Feel free to reach out for opportunities or collaboration.
        </p>
      </div>

      <motion.div
        className="contact-card-wrapper"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="contact-box">
          <div className="contact-info-list">
            <div className="contact-info-item">
              <Mail size={18} color="#38bdf8" />
              <span>
                <strong>Email:</strong>{' '}
                <a href="mailto:praveend12321@gmail.com" className="interactive">
                  praveend12321@gmail.com
                </a>
              </span>
            </div>

            <div className="contact-info-item">
              <MapPin size={18} color="#a855f7" />
              <span>
                <strong>Location:</strong> Kanchipuram, Tamil Nadu, India
              </span>
            </div>
          </div>

          <div>
            <a
              href="mailto:praveend2103@gmail.com"
              className="send-email-btn interactive"
            >
              <Send size={18} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}