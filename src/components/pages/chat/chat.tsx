'use client';
import { useChatMutation } from '@/src/hooks/mutation';
import { useCalculateDimensions } from '@/src/hooks/use-calculate-dimensions';
import { useChatForm, useChatStore } from '@/src/store';
import { Role } from '@/src/types';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaArrowUpLong } from 'react-icons/fa6';
import { Form, ScrollArea, TypingIndicator } from '../..';
import { ChatGuide } from './chat-guide';
import { ChatMessage } from './chat-message';

export const Chat = () => {
    const chatFormStore = useChatForm();
    const chatStore = useChatStore();
    const { elmentSum, windowDimensions } = useCalculateDimensions(['app-bar', 'chat-form']);

    const { mutate: createMessage, isPending } = useChatMutation();

    const showChatGuide = chatStore?.state.messages.length === 0;

    const handleSubmission = () => {
        const query = { role: Role.USER, content: chatFormStore?.state.prompt };
        createMessage(query as unknown as ChatCompletionMessageParam);
    };

    const handlePromptSuggestion = (suggestion: string) => {
        const query = { role: Role.USER, content: suggestion };
        createMessage(query as unknown as ChatCompletionMessageParam);
    };

    return (
        <div>
            <ScrollArea
                className='w-full'
                style={{
                    height: `${windowDimensions.height - elmentSum}px`,
                }}>
                <div className='w-full lg:w-[800px] mx-auto pt-5 lg:pt-12'>
                    {showChatGuide && <ChatGuide handlePromptSuggestion={handlePromptSuggestion} />}
                    {!showChatGuide &&
                        chatStore?.state.messages.map((message, index) => {
                            if (message) {
                                const { role, content } = message;
                                return (
                                    <ChatMessage
                                        key={index}
                                        role={role as Role.USER | Role.ASSISTANT}
                                        content={content as string}
                                    />
                                );
                            }
                        })}
                    <div className='flex py-4 px-8 ml-20'>
                        {!showChatGuide && isPending ? <TypingIndicator /> : null}
                    </div>
                </div>
            </ScrollArea>
            <div id='chat-form' className='flex justify-center items-start h-[120px] pt-2'>
                <Form onSubmitCallback={handleSubmission} store={chatFormStore} className='w-full lg:w-[800px]'>
                    <Form.Group className='flex gap-2'>
                        <Form.TextInput
                            value={chatFormStore.state.prompt}
                            name='prompt'
                            placeholder='Type your question here...'
                        />
                        <Form.Button type='submit' disabled={!!!chatFormStore.state.prompt || isPending}>
                            {isPending ? <AiOutlineLoading className='animate-spin' /> : <FaArrowUpLong />}
                        </Form.Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};
