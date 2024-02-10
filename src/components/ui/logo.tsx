'use client';
import { Theme } from '@/src/constants/themes';
import { useThemeStore } from '@/src/store';
import Image from 'next/image';

type Props = {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    theme?: 'dark' | 'light';
};

export const Logo = ({ size = 'md', theme }: Props) => {
    const { state } = useThemeStore();
    const isDarkMode = theme === 'dark' || (theme !== 'light' && state.theme === Theme.Dark);

    const sizeMap = {
        sm: { width: 150, height: 50 },
        md: { width: 250, height: 100 },
        lg: { width: 500, height: 250 },
        xl: { width: 750, height: 400 },
    };

    const { width, height } = sizeMap[size];

    return (
        <Image
            src={isDarkMode ? '/logo-dark-mode.svg' : '/logo-light-mode.svg'}
            alt='code companion logo'
            width={width}
            height={height}
        />
    );
};
