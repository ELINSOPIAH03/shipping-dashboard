import React, { useEffect } from 'react';

import Navbar from '../components/Navbar';

type MyComponentProps = {
    children: React.ReactNode;
};

export default function DasboardLayout({ children }: MyComponentProps) {
    useEffect(() => {
        // Tambahkan class ke <html> dan <body> saat DashboardLayout digunakan
        document.documentElement.classList.add('h-full', 'bg-gray-100'); // <html>
        document.body.classList.add('h-full'); // <body>

        // Optional: bersihkan class jika layout ini tidak digunakan lagi
        return () => {
            document.documentElement.classList.remove('h-full', 'bg-gray-100');
            document.body.classList.remove('h-full');
        };
    }, []);

    return (
        <>
            <div className="bg-white w-full w-full">
                <div className="min-h-full">
                    <Navbar/>
                </div>
                <div className="w-ful p-[32px] bg-neutral-200">
                    {children}
                </div>
            </div>
        </>
    )
}