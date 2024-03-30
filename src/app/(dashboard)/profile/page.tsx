'use client';

import { UserProfile } from '@/src/components';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export default function ProfilePage() {
    const queryClient = new QueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <section className='max-w-[1280px] mx-auto p-5 lg:p-12'>
                <UserProfile />
            </section>
        </HydrationBoundary>
    );
}
