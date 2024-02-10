'use client';
import { errorMessages, infoMessages } from '@/src/constants/messages';
import { generateScriptResponse } from '@/src/services/openai';
import { createNewScript, getExistingScript } from '@/src/services/script-actions';
import { decrementUserTokensByUserId, getUserTokensByUserId } from '@/src/services/token-actions';
import { useAuth } from '@clerk/nextjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useNewScriptMutation = () => {
    const queryClient = useQueryClient();
    const { userId } = useAuth();

    return useMutation({
        mutationFn: async (script: any) => {
            const existingScript = await getExistingScript(script);
            if (existingScript) return existingScript;

            const currentUserTokens = userId && (await getUserTokensByUserId(userId));
            if (currentUserTokens && currentUserTokens < Number(process.env.NEXT_PUBLIC_MAX_REQUEST_TOKENS)) {
                toast.error(errorMessages.INSUFFICIENT_TOKENS.message);
                return null;
            }

            const generatedScript = await generateScriptResponse(script);

            if (!generatedScript) {
                toast.error(errorMessages.GENERATING_SCRIPT_ERROR.message);
                return null;
            }

            await createNewScript(generatedScript.data);
            queryClient.invalidateQueries({ queryKey: ['scripts'] });

            const remainingTokens = userId && (await decrementUserTokensByUserId(userId, generatedScript.tokens!));
            toast.info(`${remainingTokens} ${infoMessages.REMAINING_TOKENS.message}`);

            return generatedScript.data;
        },
    });
};
