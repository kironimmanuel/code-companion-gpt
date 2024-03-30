import { socialLinks } from '@/src/constants/social-links';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Badge, Paragraph } from '..';
import packageJson from '../../../package.json';

export const Footer = () => {
    const version = packageJson.version;

    return (
        <footer className='absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-5 w-full lg:w-[800px] justify-center md:flex-row flex-col-reverse px-5 lg:px-0'>
            <Badge className='text-[10px] md:text-xs'>Version {version}</Badge>
            <Paragraph className='text-center flex items-center text-muted-foreground opacity-75' size='xs'>
                You can find the source code here&nbsp;
                <Link href={socialLinks['github']} target='_blank'>
                    <span className='cursor-pointer text-primary-500 hover:underline flex items-center gap-1'>
                        <FaGithub className='inline mb-[2px]' /> Kironimmanuel
                    </span>
                </Link>
            </Paragraph>
        </footer>
    );
};
