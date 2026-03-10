import React from 'react';
import { cn } from '../../utils/cn';

interface StickerCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    color?: 'coral' | 'lilac' | 'mint' | 'sky' | 'sand' | 'dark' | 'card';
    variant?: 'solid' | 'outline';
    hoverEffect?: boolean;
}

export const StickerCard = React.forwardRef<HTMLDivElement, StickerCardProps>(
    ({ children, className, color = 'card', variant = 'solid', hoverEffect = true, ...props }, ref) => {

        const colorStyles = {
            coral: 'bg-accent-coral text-dark',
            lilac: 'bg-accent-lilac text-dark',
            mint: 'bg-accent-mint text-dark',
            sky: 'bg-accent-sky text-dark',
            sand: 'bg-accent-sand text-dark',
            dark: 'bg-dark text-white',
            card: 'bg-card text-white'
        };

        const outlineStyles = 'bg-transparent border-2 border-gray-700 text-white';

        const baseStyles = 'relative rounded-[2.5rem] border-2 border-[#0d0d0d] overflow-hidden transition-transform duration-300';

        // Solid shadow effect
        const shadowStyles = variant === 'solid' ? 'shadow-[8px_8px_0px_#0d0d0d]' : '';

        // Hover micro-interaction
        const hoverStyles = hoverEffect ? 'hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#0d0d0d]' : '';

        return (
            <div
                ref={ref}
                className={cn(
                    baseStyles,
                    variant === 'solid' ? colorStyles[color] : outlineStyles,
                    variant === 'solid' && shadowStyles,
                    hoverStyles,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

StickerCard.displayName = 'StickerCard';
