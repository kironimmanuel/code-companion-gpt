import { buttonVariants } from '@/src/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Logo, Paragraph } from '../components';

export default function HomePage() {
    return (
        <main className='container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
            <div className='lg:hidden'>
                <Logo size='lg' theme='light' />
            </div>
            <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
                <Image
                    src='/hero.jpg'
                    width={1280}
                    height={843}
                    alt='Code'
                    className='absolute top-0 left-0 z-10 h-full object-cover w-full opacity-25'
                />
                <div className='absolute inset-0 bg-zinc-900' />
                <div className='relative z-20 flex items-center text-lg font-medium'>
                    <Logo size='xl' theme='dark' />
                </div>
                <div className='relative z-20 mt-auto'>
                    <blockquote className='space-y-2'>
                        <Paragraph className='text-lg' size='xl'>
                            &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae saepe
                            sint maiores enim libero odio iusto expedita in explicabo. Atque tenetur, dicta obcaecati
                            illum possimus quisquam voluptate quod laudantium?&rdquo;
                        </Paragraph>
                        <footer className='text-sm'>John Doe</footer>
                    </blockquote>
                </div>
            </div>
            <div className='lg:p-8 h-full lg:h-auto'>
                <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                    <div className='flex flex-col space-y-2 text-center'>
                        <Heading level={1} className='text-2xl font-semibold tracking-tight'>
                            Create an account
                        </Heading>
                        <Paragraph className='text-sm text-muted-foreground'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi accusantium eum magnam
                            non sint?
                        </Paragraph>
                    </div>
                    <Link href='/sign-up' className={buttonVariants({ variant: 'default' })}>
                        Create an account
                    </Link>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t' />
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                            <span className='bg-background px-2 text-muted-foreground'>already have an account?</span>
                        </div>
                    </div>
                    <Link href='/sign-up' className={buttonVariants({ variant: 'outline' })}>
                        Login
                    </Link>
                    <Paragraph className='px-8 text-center text-sm text-muted-foreground'>
                        By clicking continue, you agree to our{' '}
                        <Link href='/terms' className='underline underline-offset-4 hover:text-primary'>
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href='/privacy' className='underline underline-offset-4 hover:text-primary'>
                            Privacy Policy
                        </Link>
                        .
                    </Paragraph>
                </div>
            </div>
        </main>
    );
}
