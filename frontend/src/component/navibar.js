import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navibar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight detection
      const sections = [
        { id: 'about', offset: document.getElementById('about')?.offsetTop },
        { id: 'skills', offset: document.getElementById('skills')?.offsetTop },
        { id: 'projects-section', offset: document.getElementById('projects-section')?.offsetTop },
        { id: 'certificates-section', offset: document.getElementById('certificates-section')?.offsetTop },
        { id: 'contact', offset: document.getElementById('contact')?.offsetTop },
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offset && scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About Me', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects-section', label: 'Projects', id: 'projects-section' },
    { href: '#certificates-section', label: 'Certificate', id: 'certificates-section' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#about" className="nav-brand">
          <div className="nav-logo-badge">
            <Code2 size={20} />
          </div>
          <span className="nav-brand-text">
            Praveen<span>.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setActiveSection(link.id)}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="active-nav-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu-drawer"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}