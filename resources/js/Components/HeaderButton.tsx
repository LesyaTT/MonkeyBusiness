import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function HeaderButton({ className = '', children, ...props }: InertiaLinkProps ) {
    return (
        <Link
            {...props}
            className={
                'border border-dark-card px-2 py-1 rounded-md' + className
            }
        >
            {children}
        </Link>
    );
}