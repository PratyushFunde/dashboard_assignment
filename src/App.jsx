import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import OrderList from './pages/OrderList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route path='/' element={<Navigate to="/dashboard"/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<OrderList/>}/>
      </Route>
    </Routes>
  )
}

export default App
