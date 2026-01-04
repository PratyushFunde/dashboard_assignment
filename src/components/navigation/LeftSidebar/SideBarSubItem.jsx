import React from 'react'

const SideBarSubItem = ({label}) => {
    return (
        <div className="px-2 py-1 text-sm text-(--text) hover:text-black cursor-pointer">
            {label}
        </div>
    )
}

export default SideBarSubItem