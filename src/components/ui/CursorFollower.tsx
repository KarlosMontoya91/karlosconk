import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CursorFollower = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if device supports hover
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice || !cursorRef.current) return;

        // Make cursor visible
        gsap.set(cursorRef.current, { autoAlpha: 1 });

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let isHovering = false;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // Use a quickSetter for better performance if just setting direct values
        // But we want easing, so we'll use a ticker

        gsap.ticker.add(() => {
            // Linear interpolation for smooth trailing
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;

            gsap.set(cursorRef.current, {
                x: cursorX - (isHovering ? 24 : 10),
                y: cursorY - (isHovering ? 24 : 10),
            });
        });

        const onMouseEnterInterative = () => {
            isHovering = true;
            gsap.to(cursorRef.current, {
                scale: 2.5,
                backgroundColor: 'rgba(255, 182, 182, 0.2)', // Accent coral but faded
                border: '1px solid rgba(255, 182, 182, 0.8)',
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const onMouseLeaveInteractive = () => {
            isHovering = false;
            gsap.to(cursorRef.current, {
                scale: 1,
                backgroundColor: '#ffb6b6', // Coral
                border: '0px solid transparent',
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Attach listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnterInterative);
            el.addEventListener('mouseleave', onMouseLeaveInteractive);
        });

        // Handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        if (node instanceof HTMLElement) {
                            const newInteractives = node.querySelectorAll('a, button, [role="button"]');
                            newInteractives.forEach((el) => {
                                el.addEventListener('mouseenter', onMouseEnterInterative);
                                el.addEventListener('mouseleave', onMouseLeaveInteractive);
                            });

                            if (node.matches('a, button, [role="button"]')) {
                                node.addEventListener('mouseenter', onMouseEnterInterative);
                                node.addEventListener('mouseleave', onMouseLeaveInteractive);
                            }
                        }
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnterInterative);
                el.removeEventListener('mouseleave', onMouseLeaveInteractive);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-5 h-5 rounded-full bg-accent-coral pointer-events-none z-[9999] opacity-0 mix-blend-difference hidden md:block"
            style={{ willChange: 'transform' }}
        />
    );
};
