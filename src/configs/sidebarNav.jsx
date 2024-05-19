import { CiHome } from "react-icons/ci";
import { IoReceiptOutline, IoWalletOutline } from "react-icons/io5";

import { BiUser } from "react-icons/bi";

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";




const sidebarNav = [
    {
        link: '#',
        section: 'home',
        icon: <CiHome size={27}/>,
        text: 'Home'
    },
    {
        link: '#',
        section: 'Reserve',
        icon: <IoReceiptOutline size={25}/>,
        text: 'Reserve'
    },
    {
        link: '#',
        section: 'wallet',
        icon: <IoWalletOutline size={25} />,
        text: 'Wallet'
    },
    {
        link: '#',
        section: 'ticket',
        icon: <HiOutlineChatBubbleLeftRight size={25} />,
        text: 'Ticket'
    },
    {
        link: '#',
        section: 'Profile',
        icon: <BiUser size={25} />,
        text: 'Profile'
    }

]

export default sidebarNav