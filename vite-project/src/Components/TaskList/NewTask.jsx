import React from 'react'

const NewTask = ({ data, updateTaskStatus }) => {
  return (
    <div className='flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl h-full'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
          {data?.category}
        </h3>
        <h4 className='text-sm'>
          {data?.date}
        </h4>
      </div>
      <div>
        <h2 className='mt-5 text-2xl font-semibold'>{data?.title}</h2>
        <p className='text-sm mt-2'>{data?.description}</p>
      </div>
      <div className="mt-4">
        <button
          onClick={() => updateTaskStatus(data.title, 'active')}
          className='w-full bg-blue-600 text-white py-1 px-2 text-sm rounded hover:bg-blue-700 transition font-semibold'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
