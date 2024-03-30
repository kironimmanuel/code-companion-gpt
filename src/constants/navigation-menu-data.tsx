import { FaLaptopCode, FaUser } from 'react-icons/fa';
import { IoIosChatboxes } from 'react-icons/io';
import { MdHelp } from 'react-icons/md';

export const naviagationMenuData = [
    {
        href: '/chat',
        label: 'Chat',
        icon: <IoIosChatboxes />,
        subMenuTitel: 'Chat',
        subMenuText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        subMenuLinks: [
            {
                href: '/chat',
                label: 'Chat',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            },
            {
                href: '/chat/history',
                label: 'History',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            },
        ],
    },
    {
        href: '/scripts',
        label: 'Scripts',
        icon: <FaLaptopCode />,
        subMenuTitel: 'All Scripts',
        subMenuText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        subMenuLinks: [
            {
                href: '/scripts',
                label: 'All Script',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            },
            {
                href: '/scripts/new-script',
                label: 'New Script',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            },
        ],
    },
    { href: '/profile', label: 'Profile', icon: <FaUser /> },
    { href: '/help', label: 'Help', icon: <MdHelp /> },
];
