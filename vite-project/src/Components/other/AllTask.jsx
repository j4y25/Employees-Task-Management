import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = ({elem}) => {

    const [userData,setuserdata] = useContext(AuthContext)
  return (
    <>
    <div className='bg-[#1c1c1c] p-5 rounded mt-5  '>
        <div className='bg-red-400 mb-2 py-2 flex justify-between rounded px-4'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h3 className='text-lg font-medium w-1/5 '>Active Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>

        </div>
        <div className="">
            {userData.map(function(elem,idx){


            return <div key={idx} className='border-2 border-emerald-400 mb-2 py-2 flex justify-between rounded px-4'>
            <h2 className='text-lg font-medium w-1/5 '>{elem?.fname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem?.taskCounts?.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-200'>{elem?.taskCounts?.active}</h5>
            <h5 className='text-lg font-medium w-1/5 '>{elem?.taskCounts?.completed}</h5>
            <h3 className='text-lg font-medium w-1/5 text-red-600'>{elem?.taskCounts?.failed}</h3>

        </div>
        })}
        </div>
        
        
    </div>
    </>
  )
}

export default AllTask