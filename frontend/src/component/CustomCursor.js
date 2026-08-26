import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Use refs for high-frequency physics positioning
  const mousePos = useRef({ x: -100, y: -100 });
  const hudPos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });
  
  const coreRef = useRef(null);
  const hudRef = useRef(null);
  const auraRef = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    // Touch device detection
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Immediately update core position for zero-lag responsiveness
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) ${
          isMouseDown ? 'scale(0.75)' : ''
        }`;
      }
    };

    const onMouseDown = (e) => {
      setIsMouseDown(true);
      // Spawn click ripple
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const onMouseUp = () => {
      setIsMouseDown(false);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const interactive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.card') ||
        target.closest('.skill-card') ||
        target.closest('.about-box') ||
        target.closest('.contact-box') ||
        target.closest('.nav-link') ||
        target.closest('.interactive');

      if (interactive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, isMouseDown]);

  // High-performance Lerp Loop for outer HUD rings and glowing energy aura
  useEffect(() => {
    if (isTouch) return;

    const renderLoop = () => {
      // Lerp HUD rings (smooth follow)
      hudPos.current.x += (mousePos.current.x - hudPos.current.x) * 0.2;
      hudPos.current.y += (mousePos.current.y - hudPos.current.y) * 0.2;

      // Lerp Aura (delayed follow)
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * 0.09;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * 0.09;

      if (hudRef.current) {
        hudRef.current.style.transform = `translate3d(${hudPos.current.x}px, ${hudPos.current.y}px, 0)`;
      }

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animFrameId.current);
  }, [isTouch]);

  // Clean up finished ripples after animation completes
  const removeRipple = (id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  if (isTouch || !isVisible) return null;

  return (
    <div className="arc-cursor-container">
      {/* Outer Glowing Energy Aura */}
      <div
        ref={auraRef}
        className={`arc-cursor-aura ${isHovered ? 'hovered' : ''}`}
      />

      {/* Center Energy Core */}
      <div
        ref={coreRef}
        className={`arc-cursor-core ${isHovered ? 'hovered' : ''}`}
      />

      {/* Sci-Fi Arc Reactor / Technological HUD Rotating Rings */}
      <div
        ref={hudRef}
        className={`arc-cursor-hud ${isHovered ? 'hovered' : ''}`}
      >
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="arcGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="arcGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Outer Ring 1: Segmented Tech HUD Ring (Clockwise) */}
          <g className="svg-hud-ring-cw">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#arcGrad1)"
              strokeWidth="2.5"
              strokeDasharray="18 8 6 8 30 10"
              opacity="0.85"
            />
            {/* Tech Corner Ticks */}
            <circle cx="50" cy="6" r="1.5" fill="#38bdf8" />
            <circle cx="50" cy="94" r="1.5" fill="#38bdf8" />
            <circle cx="6" cy="50" r="1.5" fill="#a855f7" />
            <circle cx="94" cy="50" r="1.5" fill="#a855f7" />
          </g>

          {/* Middle Ring 2: Counter-Clockwise Segmented Energy Shield */}
          <g className="svg-hud-ring-ccw">
            <circle
              cx="50"
              cy="50"
              r="33"
              fill="none"
              stroke="url(#arcGrad2)"
              strokeWidth="2"
              strokeDasharray="14 10 4 10"
              opacity="0.75"
            />
          </g>

          {/* Inner Ring 3: Fast Inner Arc & Target Crosshair HUD Accent */}
          <g className="svg-hud-ring-fast">
            <circle
              cx="50"
              cy="50"
              r="22"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              opacity="0.9"
            />
          </g>

          {/* Target Crosshair Accent on Hover */}
          {isHovered && (
            <g opacity="0.9" stroke="#ffffff" strokeWidth="1.5">
              <line x1="50" y1="36" x2="50" y2="42" />
              <line x1="50" y1="58" x2="50" y2="64" />
              <line x1="36" y1="50" x2="42" y2="50" />
              <line x1="58" y1="50" x2="64" y2="50" />
            </g>
          )}
        </svg>
      </div>

      {/* Click Pulse Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="arc-click-ripple"
          style={{
            transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0)`,
          }}
          onAnimationEnd={() => removeRipple(ripple.id)}
        />
      ))}
    </div>
  );
}