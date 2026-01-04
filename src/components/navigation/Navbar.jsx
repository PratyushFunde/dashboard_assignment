import React, { useState } from 'react'
import { LAYOUT } from '../../constants/layout.constants'
import {
  Sun,
  Clock,
  Bell,
  Sidebar,
  Search,
  Command,
  Slash,
  Star,
  Moon,
  ChevronDown,
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const Navbar = ({ toggleLeft, toggleRight }) => {
  const { theme, toggleTheme } = useTheme()
  const [breadcrumbOpen, setBreadcrumbOpen] = useState(false)

  return (
    <nav
      className="
        sticky top-0 z-60
        w-full flex items-center justify-between
        px-3 sm:px-4 border-b
      "
      style={{
        height: LAYOUT.NAVBAR_HEIGHT,
        background: 'var(--navbar)',
        borderColor: 'var(--border)',
      }}
    >
      {/* LEFT */}
      <div className="flex items-center gap-2 text-(--text)">
        {/* Sidebar */}
        <button
          onClick={toggleLeft}
          className="p-2 rounded hover:bg-(--hover)"
        >
          <Sidebar size={20} />
        </button>

        {/* Desktop breadcrumb */}
        <div className="hidden md:flex items-center gap-2">
          <Star size={18} />
          <span className="font-semibold text-(--muted)">Dashboards</span>
          <span className="text-(--text)">/ Default</span>
        </div>

        {/* Mobile breadcrumb dropdown */}
        <div className="relative md:hidden">
          <button
            onClick={() => setBreadcrumbOpen(!breadcrumbOpen)}
            className="
              flex items-center gap-1
              px-2 py-1 rounded
              hover:bg-(--hover)
            "
          >
            <span className="text-sm font-medium">Default</span>
            <ChevronDown size={14} />
          </button>

          {breadcrumbOpen && (
            <div
              className="
                absolute top-full left-0 mt-1
                min-w-[160px]
                rounded border shadow
                bg-(--navbar)
                border-(--border)
              "
            >
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-(--hover)">
                Dashboards
              </button>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-(--hover)">
                Default
              </button>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-(--hover)">
                Analytics
              </button>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3 text-(--text)">
        {/* Search – hidden on tablet & mobile */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="
              rounded px-4 pl-6 py-1 text-sm
              bg-[#1C1C1C0D] dark:bg-[#333333]
              focus:outline-none
              placeholder:font-medium
            "
          />
          <Search
            size={14}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Slash
            size={12}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Command
            size={12}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-(--hover)"
        >
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Hide less-important icons on mobile */}
        <button className="hidden sm:flex p-2 rounded hover:bg-(--hover)">
          <Clock size={18} />
        </button>

        <button className="hidden sm:flex p-2 rounded hover:bg-(--hover)">
          <Bell size={18} />
        </button>

        {/* Right sidebar */}
        <button
          onClick={toggleRight}
          className="p-2 rounded hover:bg-(--hover)"
        >
          <Sidebar size={18} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
