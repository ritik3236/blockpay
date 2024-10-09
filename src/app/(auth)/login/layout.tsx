import React from 'react';

export default function LoginLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="flex w-full items-center justify-center">
            {children}
        </div>
    );
}
