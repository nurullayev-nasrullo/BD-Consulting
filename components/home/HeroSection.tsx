'use client';

import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const colors = ['#0B3C5D', '#328CC1', '#006400', '#90EE90'];

    const createParticles = () => {
      const particleCount = Math.floor(canvas.width * canvas.height / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(11, 60, 93, ${(100 - distance) / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      particles.length = 0;
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    createParticles();
    animateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] mt-5 md:mt-0">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8">
          <span className="bg-clip-text text-white">
            Transforming Business
          </span>
          <br className="mb-2" />
          Through Intelligent Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Leverage data-driven insights and cutting-edge methodologies to optimize your 
          business performance, enhance processes, and drive digital innovation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;