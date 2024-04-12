import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                'inline-flex items-center px-4 py-2 bg-light-card border border-transparent rounded-md font-semibold text-xs text-blue-dark uppercase ' + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
