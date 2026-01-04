import React, { useState } from 'react'
import { ChevronRight, ChevronDown } from "lucide-react"
import SideBarSubItem from "./SideBarSubItem"
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const SideBarItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === item.path

    const Icon = item.icon;

    const handleClick = () => {
        if (item.path) {

            navigate(item.path)
        }
    }

    return (
        <div className='bd3' onClick={handleClick}>
            <button
                onClick={() => item.children && setOpen(!open)}
                className={`
          w-full flex items-center py-2 px-4 rounded-lg
          ${isActive ? "bg-(--active) font-medium":''}
        `}
            >
                <div className="bd1 flex items-center gap-2">
                    {item.children && (
                        <ChevronRight
                            size={16}
                            className={`
                transition-transform duration-200 ease-in-out
                ${open ? "rotate-90" : "rotate-0"}
              `}
                        />
                    )}

                    <Icon size={18} />
                    <span>{item.label}</span>
                </div>
            </button>

            <div
                className={`
          ml-10 overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}
        `}
            >
                <div className="mt-1 space-y-1">
                    {item.children?.map((child) => (
                        <SideBarSubItem key={child} label={child} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBarItem;
