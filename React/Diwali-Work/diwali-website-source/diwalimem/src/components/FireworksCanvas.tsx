import { useEffect, useRef } from 'react';

type FireworksCanvasProps = {
  trigger: number;
  auto?: boolean;
  className?: string;
};

type Rocket = { x: number; y: number; vx: number; vy: number; targetY: number; color: string; style: 'burst' | 'star' | 'fountain' };
type Particle = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string; size: number; gravity: number };

const PALETTE = ['#ffd77a', '#ff9c55', '#f4788e', '#d89cff', '#89daf2', '#fff0bf'];

export function FireworksCanvas({ trigger, auto = false, className = '' }: FireworksCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const launchRef = useRef<((pattern?: Rocket['style']) => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const host = canvas?.parentElement;
    if (!canvas || !context || !host) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particles: Particle[] = [];
    const rockets: Rocket[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let interval: number | undefined;
    let active = true;
    let running = false;

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const burst = (rocket: Rocket) => {
      const fountain = rocket.style === 'fountain';
      const count = fountain ? 34 : rocket.style === 'star' ? 74 : 58;
      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.12;
        const speed = fountain ? 1.2 + Math.random() * 3.2 : 1.1 + Math.random() * (rocket.style === 'star' ? 5.2 : 4.2);
        const life = 45 + Math.random() * 34;
        particles.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: fountain ? -Math.abs(Math.sin(angle) * speed) - 0.7 : Math.sin(angle) * speed,
          life,
          maxLife: life,
          color: Math.random() > 0.28 ? rocket.color : PALETTE[Math.floor(Math.random() * PALETTE.length)],
          size: 1.1 + Math.random() * 1.8,
          gravity: fountain ? 0.045 : 0.032,
        });
      }
    };

    const launch = (pattern?: Rocket['style']) => {
      const style = pattern ?? (Math.random() > 0.83 ? 'fountain' : Math.random() > 0.55 ? 'star' : 'burst');
      const x = width * (0.15 + Math.random() * 0.7);
      rockets.push({
        x,
        y: height + 4,
        vx: (Math.random() - 0.5) * 1.15,
        vy: -(4.4 + Math.random() * 2.1),
        targetY: height * (0.16 + Math.random() * 0.4),
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        style,
      });
    };
    launchRef.current = launch;

    const render = () => {
      if (!active) {
        running = false;
        frame = 0;
        return;
      }
      context.clearRect(0, 0, width, height);
      for (let i = rockets.length - 1; i >= 0; i -= 1) {
        const rocket = rockets[i];
        rocket.x += rocket.vx;
        rocket.y += rocket.vy;
        rocket.vy += 0.035;
        context.beginPath();
        context.moveTo(rocket.x, rocket.y + 12);
        context.lineTo(rocket.x - rocket.vx * 1.4, rocket.y);
        context.strokeStyle = `${rocket.color}bb`;
        context.lineWidth = 1.5;
        context.shadowBlur = 10;
        context.shadowColor = rocket.color;
        context.stroke();
        if (rocket.y <= rocket.targetY || rocket.vy > -0.15) {
          burst(rocket);
          rockets.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.vx *= 0.993;
        particle.life -= 1;
        const opacity = Math.max(0, particle.life / particle.maxLife);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * (0.45 + opacity * 0.55), 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = opacity;
        context.shadowBlur = 11;
        context.shadowColor = particle.color;
        context.fill();
        context.globalAlpha = 1;
        if (particle.life <= 0) particles.splice(i, 1);
      }
      context.shadowBlur = 0;
      if (particles.length > 700) particles.splice(0, particles.length - 700);
      frame = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(render);
    };
    const pauseLoop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      running = false;
      context.clearRect(0, 0, width, height);
    };
    startLoop();

    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) {
        if (auto && !prefersReduced && rockets.length === 0 && particles.length === 0) launch();
        startLoop();
      } else {
        pauseLoop();
      }
    });
    observer.observe(host);
    if (auto && !prefersReduced) {
      launch();
      interval = window.setInterval(() => {
        if (active) launch();
      }, 2450);
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (interval !== undefined) window.clearInterval(interval);
      resizeObserver.disconnect();
      observer.disconnect();
      launchRef.current = null;
    };
  }, [auto]);

  useEffect(() => {
    if (trigger === 0) return;
    launchRef.current?.('star');
    window.setTimeout(() => launchRef.current?.('burst'), 160);
    window.setTimeout(() => launchRef.current?.('fountain'), 320);
  }, [trigger]);

  return <canvas ref={canvasRef} className={`fireworks-canvas ${className}`} aria-hidden="true" />;
}
