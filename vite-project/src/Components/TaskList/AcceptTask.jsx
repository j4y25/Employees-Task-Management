import React from 'react'

const AcceptTask = ({ data, updateTaskStatus }) => {
  return (
    <div className='flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl h-full'>
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
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={() => updateTaskStatus(data.title, 'completed')}
          className='bg-green-500 py-1 px-2 text-sm rounded hover:bg-green-600 transition font-semibold'
        >
          ✓ Mark Completed
        </button>
        <button
          onClick={() => updateTaskStatus(data.title, 'failed')}
          className='bg-red-700 py-1 px-2 text-sm rounded hover:bg-red-800 transition font-semibold text-white'
        >
          ✗ Mark Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
