import React from 'react'
import { LAYOUT } from '../../../constants/layout.constants'
import UserProfile from '../../user/UserProfile'
import { sidebarData } from './sidebar.data'
import SidebarSection from './SidebarSection'
import { useNavigate } from 'react-router-dom'

const LeftSidebar = ({ open }) => {

  const navigate = useNavigate();

  const handleProjectsNavigate = () => {
    navigate("/users")
  }

  return (

    <aside
      className={`
        bg-(--bg) text-(--text)
        fixed inset-y-0 left-0 py-5 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}
        border-r border-[#1C1C1C1A]
        transform transition-transform duration-300 ease-in-out
        overflow-auto no-scrollbar
        
      `}
      style={{ width: LAYOUT.LEFT_SIDEBAR_WIDTH }}
    >
      {/* Header / profile → padded */}
      <div className="px-4">
        <div className="py-2">
          <UserProfile />
        </div>

        <div className="flex mt-2 justify-between text-(--muted)">
          <span className="">Favorites</span>
          <span className="">Recently</span>
        </div>

        <ul className="mt-3 space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-50" />
            <span>Overview</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-50" />
            <span>Projects</span>
          </li>
        </ul>
      </div>

      {/* MENU → NO horizontal padding */}
      <div className="mt-4">
        {sidebarData.map((section) => (
          <SidebarSection key={section.title} section={section} />
        ))}
      </div>
    </aside>
  )
}

export default LeftSidebar