import React from 'react'

const Reminders = ({ SelectedRemindersHandler }) => {
  const Reminders = [
    {
        courseCode: 'DSP231',
        type: 'Assignment',
        details: 'Design an algorithm to process a mathematical model to help solve the discrete maths questions.',
        deadlineDate: '25-Oct-23',
        colour: 'bg-yellow-300',
    },
    {
        courseCode: 'CSE102',
        type: 'Quiz',
        details: 'Write a research paper on the impact of artificial intelligence in modern society.',
        deadlineDate: '15-Nov-23',
        colour: 'bg-blue-300',
    },
    {
        courseCode: 'MTH345',
        type: 'Assignment',
        details: 'Complete exercises 5-10 in the advanced calculus textbook.',
        deadlineDate: '03-Dec-23',
        colour: 'bg-green-300',
    },
    {
        courseCode: 'PHY201',
        type: 'Assignment',
        details: 'Prepare a presentation on the principles of quantum mechanics.',
        deadlineDate: '18-Dec-23',
        colour: 'bg-yellow-300',
    },
    {
        courseCode: 'PHY201',
        type: 'Assignment',
        details: 'Prepare a presentation on the principles of quantum mechanics. Prepare a presentation on the principles of quantum mechanics. Prepare a presentation on the principles of quantum mechanics.',
        deadlineDate: '18-Dec-23',
        colour: 'bg-red-300',
    },
    {
        courseCode: 'NEW101',
        type: 'News',
        details: 'Read the latest news articles related to your field.',
        deadlineDate: '01-Jan-24',
        colour: 'bg-purple-300',
    },
];

  return (
    <div className='w-[60%] h-full'>
      <div className='w-full h-full bg-gray-100 shadow-md shadow-blue-500 rounded-xl'>
        <div className='w-full h-[5vh] bg-blue-200 text-white flex justify-center items-center rounded-t-xl'>
          <p className='text-[1vw] text-black tracking-wider font-semibold'>To-do List</p>
        </div>
        <div className='w-full h-[25vh] flex flex-col gap-y-[1vh] p-[0.5vw] overflow-auto style-scrollbar'>
          {Reminders.map((item, index) => (
            <div className={` flex justify-center items-center text-justify p-[1vw] w-full h-[8vh] ${item.colour} rounded-xl border-[0.1vw] border-red-700 cursor-pointer`} key={index}
              onClick={() => SelectedRemindersHandler(item.colour, item.courseCode, item.details, item.deadlineDate,item.type)}
            >
             <div className='w-[80%] h-full flex justify-left items-center text-justify p-[1vw]'c>
             <p className='text-[0.9vw]'>
                <span className='font-bold text-red-600'>({item.courseCode})- </span>
                {item.details.length > 100 ? (
                  <>
                    {`${item.details.slice(0, 100)}... `}
                  </>
                ) : (
                  <> {item.details}</>
                )}
                <span className='font-bold text-red-600'>({item.deadlineDate})</span>
              </p>
              </div>
              <div className='w-[20%] h-full flex justify-center items-center text-justify p-[1vw]'>
                <p className='text-[1vw] px-[1vw] py-[1vh] text-white font-semibold rounded-[0.5vw] bg-blue-900'>
                 {item.type} 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reminders