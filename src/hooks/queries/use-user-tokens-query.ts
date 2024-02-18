import { getUserTokensByUserId } from '@/src/services/token-actions';
import { useQuery } from '@tanstack/react-query';

export const useUserTokensQuery = (userId: string) => {
    return useQuery({
        queryKey: ['userTokens', userId],
        queryFn: () => getUserTokensByUserId(userId!),
        enabled: !!userId,
    });
};
