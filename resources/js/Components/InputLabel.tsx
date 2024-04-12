import { LabelHTMLAttributes } from 'react';

export default function InputLabel({ value, className = '', children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label {...props} className={`block font-semibold text-sm text-back-light ` + className}>
            {value ? value : children}
        </label>
    );
}
