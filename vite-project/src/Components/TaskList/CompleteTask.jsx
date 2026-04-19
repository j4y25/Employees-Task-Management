import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl h-full'>
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
        <span className='w-full block text-center bg-green-700 text-white py-1 px-2 text-sm rounded font-semibold'>
          ✓ Completed
        </span>
      </div>
    </div>
  )
}

export default CompleteTask
