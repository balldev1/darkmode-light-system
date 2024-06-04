"use client";
import React, { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Inter } from "next/font/google";
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [currentTheme, setCurrentTheme] = useState('');

    const setTheme = (theme: string) => {
        setCurrentTheme(theme);
        const themeLink = document.getElementById('theme-css') as HTMLLinkElement;
        if (themeLink) {
            themeLink.href = theme;
        }
    };

    const setSystemTheme = () => {
        setTheme('');
    };

    return (
        <html lang="en" >
        <head>
            <link id="theme-css" href={currentTheme} rel="stylesheet"></link>
        </head>
        <body className={inter.className}>
        <PrimeReactProvider>
            <button onClick={() => setTheme('https://unpkg.com/primereact/resources/themes/lara-light-blue/theme.css')}>
                Light
            </button>
            <button onClick={() => setTheme('https://unpkg.com/primereact/resources/themes/lara-dark-teal/theme.css')}>
                Dark
            </button>
            <button onClick={setSystemTheme}>
                System
            </button>
            {children}
        </PrimeReactProvider>
        </body>
        </html>
    );
}
