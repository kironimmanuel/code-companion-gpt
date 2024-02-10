'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    href: string;
    icon: JSX.Element;
    label: string;
}

export const NavigationLinks = ({ href, icon, label }: Props) => {
    const pathname = usePathname();
    const isCurrentPath = pathname === href;

    return (
        <li key={href} className='capitalize text-xl py-2'>
            <Link href={href} className={`flex gap-5  ${isCurrentPath && 'active'}`}>
                {icon}
                {label}
            </Link>
        </li>
    );
};
