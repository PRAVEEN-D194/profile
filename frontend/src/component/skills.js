import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench, Cpu } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming',
      icon: <Code size={20} color="#38bdf8" />,
      skills: ['Python', 'C++', 'C'],
    },
    {
      title: 'Frontend',
      icon: <Layout size={20} color="#0ea5e9" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend',
      icon: <Server size={20} color="#a855f7" />,
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      icon: <Database size={20} color="#6366f1" />,
      skills: ['MongoDB'],
    },
    {
      title: 'Tools',
      icon: <Wrench size={20} color="#10b981" />,
      skills: ['Git', 'GitHub'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  return (
    <section id="skills">
      <div className="section-header">
        <div className="section-badge">
          <Cpu size={14} />
          <span>TECHNICAL PROFICIENCY</span>
        </div>
        <h1 id="headding">My Skills</h1>
        <p className="section-subtitle">
          Technologies and tools I work with to build robust digital products.
        </p>
      </div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((cat, idx) => (
          <motion.div key={idx} className="skill-card" variants={cardVariants}>
            <h3>
              {cat.icon}
              <span>{cat.title}</span>
            </h3>
            <ul>
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}