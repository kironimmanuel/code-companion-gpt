import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Code Companion GPT',
    description:
        'Empowering programmers with intelligent solutions. Code Companion GPT is your go-to platform for solving programming issues, generating useful scripts, and building a repository of coding wisdom.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} `}>
                    <Providers>{children}</Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
