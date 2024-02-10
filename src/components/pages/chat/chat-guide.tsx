import { promptSuggestions } from '@/src/constants/prompt-suggestions';
import { FaTerminal } from 'react-icons/fa';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '../..';

interface Props {
    handlePromptSuggestion: (suggestion: string) => void;
}

export const ChatGuide = ({ handlePromptSuggestion }: Props) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className='mb-3'>
                        Welcome to your <strong>Code Companion</strong> AI Chatbot!
                    </CardTitle>
                    <CardDescription className='text-lg'>
                        This is an open-source AI chatbot app template built with Next.js, the Vercel AI SDK, and Vercel
                        KV. You can start a conversation here or try the following examples:
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col items-start'>
                    {promptSuggestions.map((suggestion, index) => (
                        <Button
                            key={index}
                            variant='link'
                            className='flex gap-2 items-center'
                            onClick={() => handlePromptSuggestion(suggestion)}>
                            <FaTerminal /> {suggestion}
                        </Button>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};
