import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Dashboard from './components/dashboard/Dashboard'
import Planning from './components/session/Planning'
import Calendar from './components/calendar/Calendar'
import LoginContainer from './components/login/LoginContainer'
import Study from './components/session/Study'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/reset-password" element={<h1>Reset Password</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/modules" element={<h1>Modules</h1>} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})