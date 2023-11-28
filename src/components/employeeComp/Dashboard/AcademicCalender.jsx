import React from 'react'

const AcademicCalender = ({AcademicModalHandler}) => {
  return (
    <div className='w-full h-[5vh] bg-blue-200 text-white flex justify-center items-center rounded-xl'>
    <p className='text-[1vw] text-black tracking-wider font-semibold hover:text-blue-600 hover:underline cursor-pointer transition-all duration-300 '
    onClick={() => AcademicModalHandler()}>
      Check Academic Calender</p>
    </div>
  )
}

export default AcademicCalender