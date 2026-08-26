import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ShieldCheck, X, Maximize2 } from 'lucide-react';

export default function Certificate() {
  const [certificate, setcertificate] = useState([]);
  const [activeModalImage, setActiveModalImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/certificate`)
      .then((res) => {
        setcertificate(res.data.certificate || []);
      })
      .catch((error) => console.log(error));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="certificates-section">
      <div className="section-header">
        <div className="section-badge">
          <Award size={14} />
          <span>CREDENTIALS & CERTIFICATIONS</span>
        </div>
        <h1 id="headding">My Certificates</h1>
        <p className="section-subtitle">
          Verified certifications and professional achievements.
        </p>
      </div>

      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {certificate.map((c) => (
          <motion.div key={c._id || c.title} className="card cert-card" variants={cardVariants}>
            {/* Verified Badge Seal */}
            <div className="cert-verified-seal">
              <ShieldCheck size={13} />
              <span>VERIFIED</span>
            </div>

            {/* Image Container with Zoom & Expand Modal */}
            <div
              className="card-img-wrapper cert-img-wrapper interactive"
              onClick={() => setActiveModalImage(`/image/${c.image}`)}
            >
              <img src={`/image/${c.image}`} alt={c.title} />
              <div className="card-img-overlay" />
              <div className="cert-zoom-hint">
                <Maximize2 size={18} />
                <span>Click to Expand</span>
              </div>
            </div>

            <h3>{c.title}</h3>

            <div className="cert-meta">
              {c.issuer && (
                <span className="cert-meta-item">
                  <CheckCircle2 size={13} />
                  <span><strong>Issuer:</strong> {c.issuer}</span>
                </span>
              )}

              <span className="cert-meta-item">
                <Calendar size={13} />
                <span>
                  <strong>Date:</strong>{' '}
                  {c.issueDate
                    ? new Date(c.issueDate).toLocaleDateString()
                    : 'N/A'}
                </span>
              </span>
            </div>

            <p>{c.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Certificate Image Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                onClick={() => setActiveModalImage(null)}
                aria-label="Close image preview"
              >
                <X size={24} />
              </button>
              <img src={activeModalImage} alt="Certificate preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}