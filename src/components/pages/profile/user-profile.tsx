'use client';
import { Heading, Paragraph } from '@/src/components';
import { Theme } from '@/src/constants/themes';
import { useUserTokensQuery } from '@/src/hooks/queries';
import { useThemeStore } from '@/src/store';
import { UserProfile as ClerkUserProfile, useAuth } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { FaCoins } from 'react-icons/fa';

export const UserProfile = () => {
    const { userId } = useAuth();
    const { state } = useThemeStore();
    const isDarkMode = state.theme === Theme.Dark;

    const { data: tokens } = useUserTokensQuery(userId!);

    return (
        <div className='w-full relative pb-12'>
            <ClerkUserProfile
                appearance={{
                    baseTheme: isDarkMode ? dark : undefined,
                }}>
                <ClerkUserProfile.Page label='Tokens' labelIcon={<FaCoins />} url='/tokens'>
                    <div className='cl-header cl-internal-dtblrc min-h-[300px] flex flex-col gap-8'>
                        <div>
                            <Heading
                                level={1}
                                className={`cl-headerTitle  ${
                                    isDarkMode ? 'cl-internal-10ifbb5' : 'cl-internal-1p383is'
                                }`}>
                                Your Tokens
                            </Heading>

                            <Paragraph
                                className={`cl-headerSubtitle cl-internal-13zhnx0 ${
                                    isDarkMode ? 'cl-internal-n84jlv' : 'cl-internal-13zhnx0'
                                }`}>
                                Tokens are used to generate responses from the API.
                            </Paragraph>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div
                                className={`cl-profileSectionTitle cl-profileSectionTitle__password  ${
                                    isDarkMode ? 'cl-internal-1wbc9m4' : 'cl-internal-1xg0u4s'
                                }`}>
                                <Paragraph
                                    className={`cl-profileSectionTitleText cl-profileSectionTitleText__password  ${
                                        isDarkMode ? 'cl-internal-1x77jqu' : 'cl-internal-8a92hp'
                                    }`}>
                                    Tokens
                                </Paragraph>
                            </div>
                            <Paragraph className='px-5 py-3 flex items-center gap-1'>
                                Remaining Tokens: <strong>{tokens ?? 0}</strong> <FaCoins />
                            </Paragraph>
                        </div>
                    </div>
                </ClerkUserProfile.Page>
            </ClerkUserProfile>
        </div>
    );
};
