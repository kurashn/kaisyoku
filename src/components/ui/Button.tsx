import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
 size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
 return (
 <button
 ref={ref}
 className={cn(
 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main disabled:pointer-events-none disabled:opacity-50',
 {
 'bg-main text-white hover:bg-main-hover': variant === 'primary',
 'bg-navy-900 text-white hover:bg-navy-800': variant === 'secondary',
 'border border-navy-200 bg-transparent hover:bg-navy-100 text-navy-900 ': variant === 'outline',
 'hover:bg-navy-100 text-navy-900 ': variant === 'ghost',
 'h-9 px-4 text-sm': size === 'sm',
 'h-11 px-8 text-base': size === 'md',
 'h-14 px-10 text-lg': size === 'lg',
 },
 className
 )}
 {...props}
 />
 );
 }
);

Button.displayName = 'Button';

export { Button, cn };
