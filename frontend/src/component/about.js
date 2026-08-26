import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="hero-wrapper">
        <div className="hero-grid">
          {/* Main About Glass Card */}
          <motion.div
            className="about-box"
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <motion.div
              className="hero-developer-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="hero-status-dot"></span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              About Me
            </motion.h1>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hi, I’m <span className="highlight">Praveen</span>, a 2nd-year IT student at Chennai Institute of Technology.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I’m passionate about building modern web applications using the MERN stack.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I enjoy learning new technologies and working on real-world projects to improve my skills.
            </motion.p>
          </motion.div>

          {/* Right Side Code Terminal Preview */}
          <motion.div
            className="about-terminal-box"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={13} />
                <span>praveen.config.js</span>
              </div>
            </div>

            <div className="terminal-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-string">"Praveen"</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-string">"Full Stack Developer"</span>,<br />
                  &nbsp;&nbsp;education: <span className="code-string">"Chennai Institute of Technology"</span>,<br />
                  &nbsp;&nbsp;stack: [<span className="code-string">"MongoDB"</span>, <span className="code-string">"Express"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>],<br />
                  &nbsp;&nbsp;status: <span className="code-string">"Building & Innovating 🚀"</span><br />
                  &#125;;
                </code>
              </pre>
            </div>

            <div className="terminal-footer">
              <div className="floating-tag">
                <Sparkles size={13} color="#a855f7" />
                <span>MERN Stack Dev</span>
              </div>
              <div className="floating-tag">
                <Cpu size={13} color="#38bdf8" />
                <span>IT Dept</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}