import { AllScripts } from '@/src/components';
import { getAllScripts } from '@/src/services/script-actions';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export default async function ScriptsPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['scripts', ''],
        queryFn: () => getAllScripts(),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <section className='max-w-[1280px] mx-auto p-5 lg:p-12'>
                <AllScripts />
            </section>
        </HydrationBoundary>
    );
}
