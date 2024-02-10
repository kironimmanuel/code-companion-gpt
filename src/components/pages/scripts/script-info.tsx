'use client';
import { Theme } from '@/src/constants/themes';
import { useThemeStore } from '@/src/store';
import { CopyBlock, atomOneLight, solarizedDark } from 'react-code-blocks';
import { Heading, Paragraph } from '../..';

interface Props {
    feature: string;
    programmingLanguage: string;
    description: string;
    codeSnippet: string;
}

export const ScriptInfo = ({ feature, programmingLanguage, codeSnippet, description }: Props) => {
    const { state } = useThemeStore();
    const isDarkMode = state.theme === Theme.Dark;

    return (
        <div className='max-w-2xl'>
            <Heading level={2} className='text-4xl font-semibold mb-1 capitalize'>
                {feature}
            </Heading>
            <Paragraph className='leading-loose mb-6 capitalize' size='lg'>
                {programmingLanguage}
            </Paragraph>
            <Paragraph className='leading-loose mb-6'>{description}</Paragraph>
            <CopyBlock
                language={programmingLanguage || 'text'}
                text={codeSnippet}
                showLineNumbers={true}
                codeBlock
                theme={isDarkMode ? solarizedDark : atomOneLight}
            />
        </div>
    );
};
