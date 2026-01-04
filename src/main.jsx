import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DashboardProvider } from './context/DashboardContext.jsx'
import { NotificationProvider } from './context/NotificationContext.jsx'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>

        <ConfigProvider theme={{
          token: {
            fontFamily: 'Inter,system-ui, sans-serif'
          }
        }}>
          <NotificationProvider>
            <DashboardProvider>
              <App />
            </DashboardProvider>
          </NotificationProvider>
        </ConfigProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode >,
)
