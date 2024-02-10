'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Theme } from '../constants/themes';
import { useThemeStore } from '../store/store';

export default function Providers({ children }: { children: React.ReactNode }) {
    const { state } = useThemeStore();
    const theme = state.theme;

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ToastContainer
                position='bottom-right'
                theme={theme === Theme.Light ? 'light' : 'dark'}
                hideProgressBar
                pauseOnHover={false}
                autoClose={3500}
                transition={Slide}
            />
            {children}
        </QueryClientProvider>
    );
}
