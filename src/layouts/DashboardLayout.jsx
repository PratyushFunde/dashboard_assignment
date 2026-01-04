import React, { useState } from 'react'
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
  const toggleRightSidebar = () => setRightOpen(prev => !prev)

  return (
    <LayoutContext.Provider value={{
      leftOpen,
      rightOpen,
      toggleLeftSidebar,
      toggleRightSidebar,
      closeLeft: () => setLeftOpen(false),
      closeRight: () => setRightOpen(false),
    }}>

      <div className='min-h-screen border border-red-700 w-full font-inter bg-(--bg) text-(--text)'>
        <LeftSidebar open={leftOpen} />
        <RightSidebar open={rightOpen} />
        {/* // Main content  */}
        <main className='bg1 min-h-screen flex flex-col'
          style={{
            marginLeft: leftOpen ? LAYOUT.LEFT_SIDEBAR_WIDTH : 0,
            marginRight: rightOpen ? LAYOUT.RIGHT_SIDEBAR_WIDTH : 0
          }}
          
        >
          <Navbar
            toggleLeft={toggleLeftSidebar}
            toggleRight={toggleRightSidebar}
            leftOpen={leftOpen}
            rightOpen={rightOpen}
          />

          <div className="flex-1 flex justify-center overflow-auto no-scrollbar">
            <div className="w-full px-6 py-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </LayoutContext.Provider>
  )
}

export default DashboardLayout