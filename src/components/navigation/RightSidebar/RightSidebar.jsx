import React from 'react'
import { LAYOUT } from '../../../constants/layout.constants'
import NotificationsCard from './NotificationsCard'
import ActivitiesCard from './ActivitiesCard'
import ContactsCard from './ContactsCard'
// import { LAYOUT } from '../../constants/layout.constants'


const RightSidebar = ({ open }) => {
  return (
    <aside className={`
       bg-(--bg) text-(--text)
    h-full overflow-y-auto
    no-scrollbar
    py-5 px-2
    border border-l border-(--border)
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