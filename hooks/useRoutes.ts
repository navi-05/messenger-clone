import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi'
import { HiUsers } from 'react-icons/hi'
import { RiLogoutCircleFill } from 'react-icons/ri'

import useConversation from "./useConversation";
import { signOut } from "next-auth/react";

const useRoutes = () => {
  const pathName = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(() => [
    {
      label: 'Chat',
      href: '/conversations',
      icon: HiChat,
      active: pathName === '/conversations' || !!conversationId
    }, 
    {
      label: 'Users',
      href: '/users',
      icon: HiUsers,
      active: pathName === '/users'
    }, 
    {
      label: 'Logout',
      href: "#",
      onClick: () => signOut(),
      icon: RiLogoutCircleFill
    }
  ], [pathName, conversationId])

  return routes;
}

export default useRoutes