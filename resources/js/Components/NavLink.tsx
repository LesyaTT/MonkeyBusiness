import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ className = '', children, ...props }: InertiaLinkProps ) {
    return (
        <Link
            {...props}
            className={
                'text-back-light' + className
            }
        >
            {children}
        </Link>
    );
}
