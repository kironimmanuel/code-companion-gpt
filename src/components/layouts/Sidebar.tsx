import { navLinks } from '@/src/constants/nav-links';
import { Logo } from '..';
import { NavigationLinks, Signout } from '../ui';

export default function Sidebar() {
    return (
        <div className='px-4 w-80 min-h-full bg-base-200 py-12 grid grid-rows-[auto,1fr,auto] relative'>
            <div className='flex items-center mb-4 gap-4 px-4'>
                <Logo />
            </div>
            <ul className='menu'>
                {navLinks.map(navLink => {
                    return <NavigationLinks key={navLink.href} {...navLink} />;
                })}
                <Signout />
            </ul>
        </div>
    );
}
