import { MemberProfile, Sidebar, ThemeToggle } from '@/src/components';
import { ReactNode } from 'react';
import { HiMenu } from 'react-icons/hi';

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className='drawer lg:drawer-open'>
            <input type='checkbox' id='my-drawer-2' className='drawer-toggle' />
            <div className='drawer-content'>
                <main className='bg-base-100 px-8 py-12 min-h-screen flex flex-col'>
                    <div className='flex gap-2 justify-end pb-12'>
                        <ThemeToggle />
                        <MemberProfile />
                        <label htmlFor='my-drawer-2' className='drawer-button lg:hidden cursor-pointer'>
                            <HiMenu className='w-12 h-12 text-primary' />
                        </label>
                    </div>
                    {children}
                </main>
            </div>
            <div className='drawer-side overflow-visible'>
                <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay' />
                <Sidebar />
            </div>
        </div>
    );
}
