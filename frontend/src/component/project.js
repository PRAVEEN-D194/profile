import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, FolderGit2 } from 'lucide-react';

const GithubIcon = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Project() {
  const [project, setproject] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/project`)
      .then((res) => {
        setproject(res.data.project || []);
      })
      .catch((error) => console.log(error));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Mouse 3D Tilt calculation on desktop
  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="projects-section">
      <div className="section-header">
        <div className="section-badge">
          <FolderGit2 size={14} />
          <span>FEATURED WORKS</span>
        </div>
        <h1 id="headding">My Projects</h1>
        <p className="section-subtitle">
          A showcase of full-stack applications built with modern web technologies.
        </p>
      </div>

      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {project.map((p) => {
          const techList = p.tech ? p.tech.split(',').map((t) => t.trim()) : [];
          return (
            <motion.div
              key={p._id || p._i || p.title}
              className="card"
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image Container with Hover Zoom */}
              <div className="card-img-wrapper">
                <img src={`/image/${p.image}`} alt={p.title} />
                <div className="card-img-overlay" />
              </div>

              <h3>{p.title}</h3>
              <p>{p.description}</p>

              {/* Tech Badges */}
              {techList.length > 0 && (
                <div className="tech-badge-container">
                  {techList.map((techItem, idx) => (
                    <span key={idx} className="tech-badge">
                      {techItem}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="card-links">
                {p.githubLink && (
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                )}
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive"
                  >
                    <ExternalLink size={15} />
                    <span>Live</span>
                  </a>
                )}
              </div>

              {/* Created Date */}
              {p.createdAt && (
                <div className="card-created-date">
                  <Calendar size={13} />
                  <span>Created: {new Date(p.createdAt).toLocaleDateString()}</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}