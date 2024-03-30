'use client';
import Link from 'next/link';
import {
    Logo,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SidebarToggle,
    ThemeToggle,
    navigationMenuTriggerStyle,
} from '..';

export const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <SidebarToggle />
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col items-start'>
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>

                <NavigationMenu orientation='vertical' className='flex flex-col justify-start'>
                    <NavigationMenuList className='flex flex-col items-start gap-2'>
                        <NavigationMenuItem>
                            <Link href='/chat' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <SheetClose>Chat</SheetClose>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href='/chat/history' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <SheetClose>Chat History</SheetClose>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href='/scripts' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <SheetClose>All Scripts</SheetClose>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href='/scripts/new-script' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <SheetClose>New Script</SheetClose>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href='/profile' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Profile
                                    <SheetClose>Profile</SheetClose>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href='/help' legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <SheetClose>Help</SheetClose>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <ThemeToggle />
            </SheetContent>
        </Sheet>
    );
};
