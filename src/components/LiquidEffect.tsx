'use client';

import { useEffect, useRef } from 'react';

export default function LiquidEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const touchX = useRef(0);
  const touchY = useRef(0);
  const particles = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number; maxLife: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      createParticles(e.clientX, e.clientY);
    };

    // Handle touch movement
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchX.current = e.touches[0].clientX;
        touchY.current = e.touches[0].clientY;
        createParticles(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 1,
          life: 1,
          maxLife: Math.random() * 0.5 + 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const particle = particles.current[i];

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.15; // gravity
        particle.life -= particle.maxLife / 60;

        if (particle.life <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        // Draw particle with liquid blob effect
        const size = Math.max(2, 8 * particle.life);
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, size);
        gradient.addColorStop(0, `rgba(33, 112, 94, ${particle.life * 0.6})`); // teal
        gradient.addColorStop(0.5, `rgba(16, 185, 129, ${particle.life * 0.4})`); // emerald
        gradient.addColorStop(1, `rgba(16, 185, 129, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw liquid blob at cursor
      const x = mouseX.current || touchX.current;
      const y = mouseY.current || touchY.current;

      const blobSize = 40;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, blobSize);
      gradient.addColorStop(0, 'rgba(33, 112, 94, 0.4)');
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.2)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, blobSize, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950"
    />
  );
}
