'use client';
import { useChatMutation } from '@/src/hooks/mutation';
import { useChatForm, useChatStore } from '@/src/store';
import { Role } from '@/src/types';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaArrowUpLong } from 'react-icons/fa6';
import { Form, TypingIndicator } from '../..';
import { ChatGuide } from './chat-guide';
import { ChatMessage } from './chat-message';

export const Chat = () => {
    const chatFormStore = useChatForm();
    const chatStore = useChatStore();

    const { mutate: createMessage, isPending } = useChatMutation();

    const showChatGuide = chatStore?.state.messages.length === 0;

    const handleSubmission = () => {
        const query = { role: 'user', content: chatFormStore?.state.prompt };
        createMessage(query as unknown as ChatCompletionMessageParam);
    };

    const handlePromptSuggestion = (suggestion: string) => {
        const query = { role: 'user', content: suggestion };
        createMessage(query as unknown as ChatCompletionMessageParam);
    };

    return (
        <div className='min-h-[calc(100vh-14rem)] grid grid-rows-[1fr,auto] xl:place-content-center'>
            <div className='w-full xl:w-[800px]'>
                {showChatGuide && <ChatGuide handlePromptSuggestion={handlePromptSuggestion} />}
                {!showChatGuide &&
                    chatStore?.state.messages.map((message, index) => {
                        if (message) {
                            const { role, content } = message;
                            return (
                                <ChatMessage key={index} role={role as Role.USER | Role.ASSISTANT} content={content} />
                            );
                        }
                    })}
                <div className='flex py-4 px-8 ml-20'>{isPending ? <TypingIndicator /> : null}</div>
            </div>
            <Form onSubmitCallback={handleSubmission} store={chatFormStore} className='pt-12 min-w-full xl:w-[800px]'>
                <Form.Group className='join w-full'>
                    <Form.TextInput
                        value={chatFormStore.state.prompt}
                        name='prompt'
                        placeholder='Type a question here'
                        className='input input-bordered join-item w-full rounded-lg'
                    />
                    <Form.Button
                        className='btn btn-primary join-item'
                        type='submit'
                        disabled={!!!chatFormStore.state.prompt || isPending}>
                        {isPending ? <AiOutlineLoading className='animate-spin' /> : <FaArrowUpLong />}
                    </Form.Button>
                </Form.Group>
            </Form>
        </div>
    );
};
