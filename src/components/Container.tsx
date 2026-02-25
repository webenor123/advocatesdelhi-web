import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`max-w-[1536px] mx-auto px-14 sm:px-20 lg:px-32 ${className}`}>
            {children}
        </div>
    );
}
