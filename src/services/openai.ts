'use server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { generateScript } from '../utils/prompts';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (messages: ChatCompletionMessageParam[]) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'system', content: 'you are a helpful assistant' }, ...messages],
            model: 'gpt-3.5-turbo',
            max_tokens: Number(process.env.MAX_REQUEST_TOKENS),
            temperature: 0,
        });
        return { message: response.choices[0].message, tokens: response.usage?.total_tokens };
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const generateScriptResponse = async ({
    feature,
    programmingLanguage,
}: {
    feature: string;
    programmingLanguage: string;
}) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are a programming expert' },
                {
                    role: 'user',
                    content: generateScript({ feature, programmingLanguage }),
                },
            ],
            model: 'gpt-3.5-turbo',
            max_tokens: Number(process.env.MAX_REQUEST_TOKENS),
            temperature: 0,
        });
        const data = JSON.parse(response.choices[0].message.content!);
        return { data: data.script, tokens: response.usage?.total_tokens };
    } catch (error) {
        console.error(error);
        return null;
    }
};
