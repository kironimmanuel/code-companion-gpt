import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
    return <div className='min-h-screen flex justify-center items-center'>{children}</div>;
}
