import { Landing } from '@/src/components';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function HomePage() {
    const { userId } = auth();

    if (userId) {
        redirect('/chat');
    }

    return <Landing />;
}
