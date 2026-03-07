"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, value => value * 0.2); // Parallax effect

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouseX = 0;
        let mouseY = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;
            opacity: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = Math.random() * 2 + 0.5;
                this.density = (Math.random() * 30) + 1;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update(mousePos: { x: number, y: number }) {
                const dx = mousePos.x - this.x;
                const dy = mousePos.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        const dx = this.x - this.baseX;
                        this.x -= dx / 20;
                    }
                    if (this.y !== this.baseY) {
                        const dy = this.y - this.baseY;
                        this.y -= dy / 20;
                    }
                }

                // Twinkle effect
                if (Math.random() > 0.98) {
                    this.opacity = Math.random() * 0.6 + 0.2;
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000);
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update({ x: mouseX, y: mouseY });
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ y: yTransform }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ opacity: 0.6 }}
            />
        </motion.div>
    );
}
