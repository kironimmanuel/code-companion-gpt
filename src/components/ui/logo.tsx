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

    const classMap = {
        sm: 'w-[100px] h-[50px] lg:w-[150px] lg:h-[50px]',
        md: 'w-[200px] h-[100px] lg:w-[250px] lg:h-[100px]',
        lg: 'w-[400px] h-[200px] lg:w-[500px] lg:h-[250px]',
        xl: 'w-[600px] h-[300px] lg:w-[750px] lg:h-[400px]',
    };

    const { width, height } = sizeMap[size];

    return (
        <Image
            src={isDarkMode ? '/logo-dark-mode.svg' : '/logo-light-mode.svg'}
            alt='code companion logo'
            width={width}
            height={height}
            className={classMap[size]}
        />
    );
};
