import { getAllScripts } from '@/src/services/script-actions';
import { useQuery } from '@tanstack/react-query';

export const useAllScriptsQuery = () => {
    return useQuery({
        queryKey: ['scripts', ''],
        queryFn: () => getAllScripts(),
    });
};
