import { NewScript } from '@/src/components';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export default function NewScriptPage() {
    const queryClient = new QueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NewScript />
        </HydrationBoundary>
    );
}
