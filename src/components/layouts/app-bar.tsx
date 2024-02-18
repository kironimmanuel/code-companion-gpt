import { Navigation, Sidebar } from '.';
import { Logo, MemberProfile, ThemeToggle } from '..';

export const AppBar = () => {
    return (
        <div id='app-bar' className='p-5 flex justify-between border items-center h-[75px] lg:h-[90px]'>
            <div className='flex gap-5 xl:gap-12'>
                <Logo />
                <div className='hidden lg:flex items-center'>
                    <Navigation />
                </div>
            </div>
            <div className='hidden lg:flex gap-2'>
                <ThemeToggle />
                <MemberProfile />
            </div>
            <div className='lg:hidden block'>
                <Sidebar />
            </div>
        </div>
    );
};
