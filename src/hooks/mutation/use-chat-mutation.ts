import { errorMessages, infoMessages } from '@/src/constants/messages';
import { generateChatResponse } from '@/src/services/openai';
import { decrementUserTokensByUserId, getUserTokensByUserId } from '@/src/services/token-actions';
import { useChatStore } from '@/src/store';
import { useAuth } from '@clerk/nextjs';
import { useMutation } from '@tanstack/react-query';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { toast } from 'react-toastify';

export const useChatMutation = () => {
    const chatStore = useChatStore();
    const { userId } = useAuth();

    return useMutation({
        mutationFn: async (query: ChatCompletionMessageParam) => {
            const currentUserTokens = userId && (await getUserTokensByUserId(userId));
            if (currentUserTokens && currentUserTokens < Number(process.env.NEXT_PUBLIC_MAX_REQUEST_TOKENS)) {
                toast.error(errorMessages.INSUFFICIENT_TOKENS.message);
                return null;
            }

            chatStore.addMessage(query);

            const chatResponse = await generateChatResponse([...chatStore?.state.messages, query]);

            if (!chatResponse) {
                toast.error(errorMessages.GENERATING_SCRIPT_ERROR.message);
                return null;
            }

            chatStore.addMessage(chatResponse.message);

            const remainingTokens = userId && (await decrementUserTokensByUserId(userId, chatResponse.tokens!));

            toast.info(`${remainingTokens} ${infoMessages.REMAINING_TOKENS.message}`);
        },
    });
};
