'use client';
import { useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiOutlineLogout } from 'react-icons/hi';

export const Signout = () => {
    const { signOut } = useClerk();
    const router = useRouter();

    return (
        <li className='capitalize text-xl py-2 mt-auto flex gap-5' onClick={() => signOut(() => router.push('/'))}>
            <Link href='/'>
                <HiOutlineLogout />
                Sign out
            </Link>
        </li>
    );
};
