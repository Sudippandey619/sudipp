'use client';

import { useEffect, useRef } from 'react';

interface FireworksCanvasProps {
  show: boolean;
}

const FireworksCanvas: React.FC<FireworksCanvasProps> = ({ show }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!show || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle logic
    const particles: any[] = [];

    class Particle {
      x: number;
      y: number;
      speed: number;
      angle: number;
      radius: number;
      color: string;
      alpha: number;
      decay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 5 + 2;
        this.angle = Math.random() * 2 * Math.PI;
        this.radius = 2 + Math.random() * 3;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.alpha = 1;
        this.decay = 0.01 + Math.random() * 0.015;
      }

      update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.alpha -= this.decay;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const launch = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height / 2;
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) particles.splice(i, 1);
      });

      if (Math.random() < 0.05) {
        launch();
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [show]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 999, pointerEvents: 'none' }} />;
};

export default FireworksCanvas;
