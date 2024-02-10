'use client';

import { Role } from '@/src/types';
import { UserButton } from '@clerk/nextjs';
import { memo, useEffect, useRef, useState } from 'react';
import { FcElectronics } from 'react-icons/fc';
import { Paragraph } from '../..';

interface Props {
    content: string | null;
    role: Role.USER | Role.ASSISTANT;
}

export const ChatMessage = memo(({ role, content }: Props) => {
    const [displayedContent, setDisplayedContent] = useState<string | null>(null);
    const animationRef = useRef<NodeJS.Timeout | null>(null);

    const isUser = role === Role.USER;
    const avatar = isUser ? <UserButton /> : <FcElectronics />;
    const displayName = isUser ? 'You' : 'Code Companion GPT-3.5';

    useEffect(() => {
        if (animationRef.current) {
            clearTimeout(animationRef.current);
        }

        if (content) {
            let i = 0;

            const typingEffect = () => {
                if (i <= content.length) {
                    setDisplayedContent(content.substring(0, i));
                    i++;
                    animationRef.current = setTimeout(typingEffect, 5);
                }
            };

            typingEffect();
        }

        return () => {
            if (animationRef.current) {
                clearTimeout(animationRef.current);
            }
        };
    }, [content, isUser]);

    return (
        <div className='flex py-4 px-8 gap-3'>
            <figure className='rounded-sm w-12 h-12 text-4xl flex-shrink-0'>{avatar}</figure>
            <div>
                <Paragraph className='font-extrabold'>{displayName}</Paragraph>
                <Paragraph className='max-w-3xl opacity-90'>{isUser ? content : displayedContent}</Paragraph>
            </div>
        </div>
    );
});

ChatMessage.displayName = 'ChatMessage';
