import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [asignTo, setasignTo] = useState('')
  const [taskCategory, settaskCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    // Build the task object directly using local variables (NOT state)
    // because React state updates are async - reading state here gives old value
    const newTaskObj = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: taskCategory,
      active: false,
      newTask: true,       // lowercase 'n' - matches TaskList.jsx check
      failed: false,
      completed: false
    }

    // Use .map() to create a brand new array - this is what tells React to re-render
    // The old code used forEach + push which mutates in place and React ignores it
    const updatedData = userData.map((elem) => {
      if (asignTo === elem.fname) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTaskObj],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }
      return elem
    })

    setuserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))

    setasignTo('')
    settaskTitle('')
    settaskCategory('')
    settaskDate('')
    settaskDescription('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='Make a Task'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="date"
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
            <input
              value={asignTo}
              onChange={(e) => setasignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='Employee name'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={taskCategory}
              onChange={(e) => settaskCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='Design, Dev And Etc.'
            />
          </div>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
          ></textarea>
          <button className='bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask