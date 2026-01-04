import { Children, createContext, useContext, useState } from "react";
import { dashboardData } from "../data/dashboard.mock";

const DashboardContext=createContext(null);

export const DashboardProvider=({children})=>{
    
    const [data, setData] = useState(dashboardData)

    return (
        <DashboardContext.Provider value={{data}}>
            {children}
        </DashboardContext.Provider>
    )

} 

export const useDashboard=()=>{
    const ctx=useContext(DashboardContext);
    if( !ctx) throw new Error("useDashboard must be used inside DashboardProvider");
    return ctx
}