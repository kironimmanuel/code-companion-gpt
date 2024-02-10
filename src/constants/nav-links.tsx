import { FaLaptopCode, FaPlus, FaUser } from 'react-icons/fa';
import { IoIosChatboxes, IoMdSettings } from 'react-icons/io';
import { MdHelp } from 'react-icons/md';

export const navLinks = [
    { href: '/chat', label: 'chat', icon: <IoIosChatboxes /> },
    { href: '/scripts', label: 'scripts', icon: <FaLaptopCode /> },
    { href: '/scripts/new-script', label: 'new script', icon: <FaPlus /> },
    { href: '/profile', label: 'profile', icon: <FaUser /> },
    { href: '/help', label: 'help', icon: <MdHelp /> },
];
