import React, { useEffect, useState } from 'react'
import LeftSidebar from '../components/navigation/LeftSidebar/LeftSidebar'
// import RightSidebar from '../components/navigation/RightSidebar/RightSidebar'
import Navbar from '../components/navigation/Navbar'
import { LAYOUT } from '../constants/layout.constants'
import { Outlet } from 'react-router-dom'
import { LayoutContext } from '../context/LayoutContext'
import RightSidebar from '../components/navigation/RightSidebar/RightSidebar'

const LEFT_WIDTH = 256
const RIGHT_WIDTH = 288

const DashboardLayout = () => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  const toggleLeftSidebar = () => setLeftOpen(prev => !prev)
  const toggleRightSidebar = () => { setRightOpen(prev => !prev), console.log("first") }
  useEffect(() => {
    if (leftOpen || rightOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [leftOpen, rightOpen])

  // Close sidebar when clicking outside on mobile
  const handleOutsideClick = (e) => {
    // Only close if screen width < 768 (mobile)
    if (window.innerWidth < 768 && leftOpen) {
      setLeftOpen(false);
      // setRightOpen(false);
    }
  }

  return (
    <LayoutContext.Provider value={{
      leftOpen,
      rightOpen,
      toggleLeftSidebar,
      toggleRightSidebar,
      closeLeft: () => setLeftOpen(false),
      closeRight: () => setRightOpen(false),
    }}>



      <div className="h-screen overflow-hidden flex font-inter bg-(--bg) text-(--text)">
        <div
          className={`
        fixed z-70 md:static min-h-screen
      transition-[width] duration-300 ease-in-out
      overflow-hidden inset-y-0
      border-r border-(--border)
      ${leftOpen ? 'w-[210px]' : 'w-0'}
    `}
        >
          <LeftSidebar open={leftOpen} toggle={toggleLeftSidebar} />
        </div>

        <main className="flex-1 min-w-0 flex flex-col"
          onClick={handleOutsideClick}
        >
          <Navbar
            toggleLeft={toggleLeftSidebar}
            toggleRight={toggleRightSidebar}
          />

          <div className="flex-1 overflow-auto no-scrollbar">
            <div className="px-6 py-6 overflow-auto">
              <Outlet />
            </div>
          </div>
        </main>

        <div
          className={`
      fixed z-70 md:static min-h-screen
      transition-[width] duration-300 ease-in-out
      overflow-hidden inset-y-0
      ${rightOpen ? 'w-[256px]' : 'w-0'}
    `}
        >
          <RightSidebar />
        </div>
      </div>

    </LayoutContext.Provider>
  )
}

export default DashboardLayout