import { Chat } from '@/src/components';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export default function ChatPage() {
    const queryClient = new QueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Chat />
        </HydrationBoundary>
    );
}
