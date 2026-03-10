import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../utils/cn';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
    ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
        const buttonRef = useRef<HTMLButtonElement>(null);
        const textRef = useRef<HTMLSpanElement>(null);

        // Merge provided ref with local ref
        const mergedRef = (node: HTMLButtonElement) => {
            buttonRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
        };

        useEffect(() => {
            const button = buttonRef.current;
            if (!button) return;

            const handleMouseMove = (e: MouseEvent) => {
                const { left, top, width, height } = button.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                // Magnetism strength
                const maxDist = 20;

                gsap.to(button, {
                    x: (mouseX / width) * maxDist,
                    y: (mouseY / height) * maxDist,
                    duration: 0.4,
                    ease: 'power2.out',
                });

                if (textRef.current) {
                    gsap.to(textRef.current, {
                        x: (mouseX / width) * (maxDist * 0.5),
                        y: (mouseY / height) * (maxDist * 0.5),
                        duration: 0.4,
                        ease: 'power2.out',
                    });
                }
            };

            const handleMouseLeave = () => {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: 'elastic.out(1, 0.3)'
                });

                if (textRef.current) {
                    gsap.to(textRef.current, {
                        x: 0,
                        y: 0,
                        duration: 0.7,
                        ease: 'elastic.out(1, 0.3)'
                    });
                }
            };

            button.addEventListener('mousemove', handleMouseMove);
            button.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                button.removeEventListener('mousemove', handleMouseMove);
                button.removeEventListener('mouseleave', handleMouseLeave);
            };
        }, []);

        const baseStyles = 'relative inline-flex items-center justify-center font-sans font-semibold transition-colors overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent-coral focus:ring-offset-2 focus:ring-offset-dark';

        const variants = {
            primary: 'bg-accent-coral text-dark border-2 border-dark shadow-[4px_4px_0px_#1a1a1a] hover:bg-white',
            secondary: 'bg-white text-dark border-2 border-dark shadow-[4px_4px_0px_#1a1a1a] hover:bg-accent-lilac',
            outline: 'bg-transparent text-white border-2 border-gray-600 hover:border-white'
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm rounded-full',
            md: 'px-6 py-3 text-base rounded-[2rem]',
            lg: 'px-8 py-4 text-lg rounded-[2.5rem]'
        };

        return (
            <button
                ref={mergedRef}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                <span ref={textRef} className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);

MagneticButton.displayName = 'MagneticButton';
