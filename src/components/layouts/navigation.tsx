'use client';

import { naviagationMenuData } from '@/src/constants/navigation-menu-data';
import { cn } from '@/src/lib/cn';
import Link from 'next/link';
import { forwardRef } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '..';

export const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {naviagationMenuData.map(menu => {
                    if (menu.hasOwnProperty('subMenuLinks')) {
                        return (
                            <NavigationMenuItem key={menu.href}>
                                <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                        <li className='row-span-2 cursor-pointer'>
                                            <Link href={menu.href} legacyBehavior passHref>
                                                <NavigationMenuLink asChild>
                                                    <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
                                                        <div className='text-2xl'>{menu.icon}</div>
                                                        <div className='mb-2 mt-4 text-lg font-medium'>
                                                            {menu.subMenuTitel}
                                                        </div>
                                                        <p className='text-sm leading-tight text-muted-foreground'>
                                                            {menu.subMenuText}
                                                        </p>
                                                    </div>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                        {menu.subMenuLinks?.map(subMenuLink => (
                                            <Link
                                                href={subMenuLink.href}
                                                legacyBehavior
                                                passHref
                                                key={subMenuLink.href}>
                                                <ListItem key={subMenuLink.href} title={subMenuLink.label}>
                                                    {subMenuLink.text}
                                                </ListItem>
                                            </Link>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    }

                    return (
                        <NavigationMenuItem key={menu.href}>
                            <Link href={menu.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {menu.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className,
                        )}
                        {...props}>
                        <div className='text-sm font-medium leading-none'>{title}</div>
                        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    },
);
ListItem.displayName = 'ListItem';
