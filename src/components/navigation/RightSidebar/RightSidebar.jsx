import React from 'react'
import { LAYOUT } from '../../../constants/layout.constants'
import NotificationsCard from './NotificationsCard'
import ActivitiesCard from './ActivitiesCard'
import ContactsCard from './ContactsCard'
// import { LAYOUT } from '../../constants/layout.constants'


const RightSidebar = ({ open }) => {
  return (
    <aside className={`
      bg-(--bg)
    fixed inset-y-0 right-0 p-5
    ${open ? "translate-x-0" : "translate-x-full"}
     border border-l border-[#1C1C1C1A]
    transform transition-transform duration-300 ease-in-out
    overflow-auto
    no-scrollbar
    z-50
    w-[90vw]
    `}
      style={{
        width: LAYOUT.RIGHT_SIDEBAR_WIDTH
      }}
    >
      <div className="notifications bd1">
        {/* <p>Notifications</p> */}
        <div className="notification_card bd2">
          <NotificationsCard />
        </div>
        <div className="activities">
          <ActivitiesCard />
        </div>
        <div className="contacts_card">
          <ContactsCard />
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar