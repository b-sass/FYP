import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/reset-password" element={<h1>Reset Password</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<h1>Calendar</h1>} />
        <Route path="/modules" element={<h1>Modules</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})