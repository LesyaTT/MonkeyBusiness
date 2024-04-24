import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 rounded-lg bg-light-card hover:bg-dark-card checked:bg-dark-card hover:checked:bg-dark-card checked:focus:bg-dark-card ' +
                className
            }
        />
    );
}
