import { AppBar, Footer, Sidebar } from '@/src/components';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className='relative'>
            <AppBar />
            <main className='bg-base-100 min-h-[calc(100vh_-_90px)] lg:min-h-[calc(100vh_-_90px)] relative'>
                {children}
            </main>
            <Footer />
        </div>
    );
}
