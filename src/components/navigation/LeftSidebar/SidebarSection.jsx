import React from 'react'
import SideBarItem from "../LeftSidebar/SideBarItem"
const SidebarSection = ({section}) => {
    return (
        <div className="mb-6 mt-4 flex flex-col justify-between items-start ">
            <p className="text-xs ml-2 text-(--text) uppercase mb-3">
                {section.title}
            </p>

            <div className="w-full space-y-1 ">
                {section.items.map((item) => (
                    <SideBarItem key={item.label} item={item} />
                ))}
            </div>
        </div>
    )
}

export default SidebarSection