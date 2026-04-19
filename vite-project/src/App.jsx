import React, { useEffect, useState, useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [User, setUser] = useState(null)
  const [loggedInUserdata, setloggedInUserdata] = useState(null)
  const [userData, setuserData] = useContext(AuthContext)

  // For the "set your password" screen after first Google login
  const [pendingGoogleUser, setPendingGoogleUser] = useState(null)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser)
      if (parsed.role) {
        setUser(parsed.role)
        setloggedInUserdata(parsed.data || {})
      }
    }
  }, [])

  // ── Regular email/password login ──────────────────────────────────────────
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      )
      if (employee) {
        setUser('employee')
        setloggedInUserdata(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
      } else {
        alert('Invalid credentials')
      }
    } else {
      alert('Invalid credentials')
    }
  }

  // ── Google login ──────────────────────────────────────────────────────────
  const handleGoogleLogin = (googleUser) => {
    const email = googleUser.email

    // 1. Check if admin
    if (email === 'admin@me.com') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    // 2. Already registered employee — log in directly, no password needed
    if (userData) {
      const existing = userData.find((e) => e.email === email)
      if (existing) {
        setUser('employee')
        setloggedInUserdata(existing)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: existing })
        )
        return
      }
    }

    // 3. Brand new Google user — show the password creation screen
    setPendingGoogleUser(googleUser)
  }

  // ── Save password for new Google user ────────────────────────────────────
  const handleSetPassword = () => {
    setPasswordError('')

    if (newPassword.trim().length < 4) {
      setPasswordError('Password must be at least 4 characters.')
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match. Please try again.')
      return
    }

    const newEmployee = {
      id: Date.now(),
      fname: pendingGoogleUser.displayName || 'New User',
      email: pendingGoogleUser.email,
      password: newPassword,
      taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: []
    }

    const updatedEmployees = userData ? [...userData, newEmployee] : [newEmployee]
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setuserData(updatedEmployees)

    setUser('employee')
    setloggedInUserdata(newEmployee)
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'employee', data: newEmployee })
    )

    // Clear pending state
    setPendingGoogleUser(null)
    setNewPassword('')
    setConfirmPassword('')
  }

  // ── Update task status ────────────────────────────────────────────────────
  const updateTaskStatus = (taskTitle, newStatus) => {
    if (!loggedInUserdata || !userData) return

    const updatedEmployees = userData.map((emp) => {
      if (emp.id !== loggedInUserdata.id) return emp

      const updatedTasks = emp.tasks.map((task) => {
        if (task.title !== taskTitle) return task

        const resetTask = {
          ...task,
          active: false,
          newTask: false,
          completed: false,
          failed: false,
        }

        if (newStatus === 'active')    resetTask.active    = true
        if (newStatus === 'completed') resetTask.completed = true
        if (newStatus === 'failed')    resetTask.failed    = true

        return resetTask
      })

      const taskCounts = {
        active:    updatedTasks.filter(t => t.active).length,
        newTask:   updatedTasks.filter(t => t.newTask).length,
        completed: updatedTasks.filter(t => t.completed).length,
        failed:    updatedTasks.filter(t => t.failed).length,
      }

      return { ...emp, tasks: updatedTasks, taskCounts }
    })

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setuserData(updatedEmployees)

    const updatedUser = updatedEmployees.find(e => e.id === loggedInUserdata.id)
    setloggedInUserdata(updatedUser)
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'employee', data: updatedUser })
    )
  }

  // ── Password creation screen (only for first-time Google users) ───────────
  if (pendingGoogleUser) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#1c1c1c]">
        <div className="border-2 border-emerald-600 rounded-xl px-10 py-10 w-[420px] flex flex-col gap-5">

          <div className="text-center">
            <h2 className="text-white text-2xl font-bold">Welcome! 🎉</h2>
            <p className="text-gray-400 mt-1 text-sm">
              Hi <span className="text-emerald-400 font-semibold">{pendingGoogleUser.displayName}</span>!
              This is your first time here. Please create a password.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              You can use this password to log in next time without Google.
            </p>
          </div>

          <div className="text-gray-400 text-sm bg-[#2a2a2a] rounded-lg px-4 py-2">
            📧 {pendingGoogleUser.email}
          </div>

          <input
            type="password"
            placeholder="Create a password (min 4 characters)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border-2 border-emerald-600 bg-transparent text-white outline-none py-3 px-5 rounded-full placeholder:text-gray-400 text-lg"
          />

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 border-emerald-600 bg-transparent text-white outline-none py-3 px-5 rounded-full placeholder:text-gray-400 text-lg"
          />

          {passwordError && (
            <p className="text-red-400 text-sm text-center">{passwordError}</p>
          )}

          <button
            onClick={handleSetPassword}
            className="bg-emerald-600 text-white py-3 px-5 rounded-full text-lg font-semibold hover:bg-emerald-700 transition"
          >
            Save Password & Continue
          </button>

          <button
            onClick={() => {
              setPendingGoogleUser(null)
              setNewPassword('')
              setConfirmPassword('')
              setPasswordError('')
            }}
            className="text-gray-500 text-sm text-center hover:text-gray-300 transition"
          >
            ← Back to Login
          </button>

        </div>
      </div>
    )
  }

  // ── Main render ───────────────────────────────────────────────────────────
  return (
    <>
      {!User && (
        <Login
          handleLogin={handleLogin}
          handleGoogleLogin={handleGoogleLogin}
        />
      )}
      {User === 'admin' && (
        <AdminDashboard changeUser={setUser} />
      )}
      {User === 'employee' && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserdata}
          updateTaskStatus={updateTaskStatus}
        />
      )}
    </>
  )
}

export default App