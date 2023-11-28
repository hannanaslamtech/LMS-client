import React from 'react'

const PaymentHistory = ({PaidModalHandler,PendingModalHandler}) => {
  return (
    <div className='w-full h-[14vh] bg-gray-100 shadow-md shadow-blue-500 rounded-xl'>
      <div className='w-full h-[5vh] bg-blue-200 text-white flex justify-center items-center rounded-t-xl'>
        <p className='text-[1vw] text-black tracking-wider font-semibold'>Payment History</p>
      </div>
      <div className='w-full h-[9vh] flex flex-col px-[2vw] divide-y divide-gray-400'>
        <div className='flex items-center justify-between w-full text-justify h-1/2'>
          <div className='flex gap-x-[0.5vw]'>
          <p className='text-[1.2vw] font-semibold text-green-900'>Paid:</p>
          <span className='text-black text-[1.2vw] font-medium'>Rs/-253,784</span>
          </div>
          <button className="text-[0.8vw] font-medium text-blue-600 hover:underline"
          onClick={() => PaidModalHandler()}>
          View details
        </button>
        </div>
        <div className='flex items-center justify-between w-full text-justify h-1/2'>
          <div className='flex gap-x-[0.5vw]'>
          <p className='text-[1.2vw] font-semibold text-orange-400'>Pending:</p>
          <span className='text-black text-[1.2vw] font-medium'>Rs/-5,784</span>
          </div>
          <button href="#" className="text-[0.8vw] font-medium text-blue-600 hover:underline"
            onClick={() => PendingModalHandler()}>
          View details
        </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory