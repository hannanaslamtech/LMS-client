import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const AssigmentVal = [
  {
    "assignmentNo": 1,
    "assignmentDate": "10 Jul, 2023",
    "dueDate": "15 Jul, 2023",
    "totalMarks": 20,
    "attachmentLink": "https://example.com/attachment1",
    "briefDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "assignmentNo": 2,
    "assignmentDate": "12 Jul, 2023",
    "dueDate": "18 Jul, 2023",
    "totalMarks": 15,
    "attachmentLink": "https://example.com/attachment2",
    "briefDescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "assignmentNo": 3,
    "assignmentDate": "14 Jul, 2023",
    "dueDate": "20 Jul, 2023",
    "totalMarks": 18,
    "attachmentLink": "https://example.com/attachment3",
    "briefDescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
  // Add more dummy data as needed
];


const AssignmentActivity = ({ handleActivityList, activity,AssignmentModalHandler}) => {
  // State variables to manage selected values
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Dummy data for options
  const classes = ['Class A', 'Class B', 'Class C'];
  const courses = ['Math', 'Science', 'History'];

  const TruncatedText = ({ text, maxWords }) => {
    const words = text.split(' ');
  
    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(' ') + '...';
      return <span>{truncatedText}</span>;
    }
  
    return <span>{text}</span>;
  };
  
  return (
    <div className={`w-full bg-red-200 text-white h-[5vh] rounded-[1vw] overflow-hidden
    ${activity === "Assignment" ? "min-h-[50vh]" : "h-[5vh]"}
    `}>
      <div
        className={`w-full h-[5vh] bg-red-700 flex gap-x-[0.4vw] px-[1vw] justify-start items-center cursor-pointer
        ${activity === "Assignment" ? "rounded-t-[1vw] " : "rounded-[1vw] "}
        `}
        onClick={() => handleActivityList("Assignment")}
      >
        <FontAwesomeIcon
          className={`w-[1.4vw] h-[1.4vw] duration-300 ${activity === "Assignment" ? "rotate-180" : "rotate-0"}`}
          icon={faCaretDown}
          style={{ color: '#fff' }}
        />
        <p className='text-[1.2vw]'>Assignments</p>
      </div>
      <div className='w-full h-[45vh]'>
        <div className='w-full h-[8vh] flex justify-center items-center gap-x-[1vw] py-[1vh] px-[1vw]'>
          {/* Select Class */}
          <select
            id="classSelect"
            className='w-[25%] h-full text-black text-center border border-red-700 rounded-[1vw] focus:border-red-700 focus:outline-none cursor-pointer'
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select class</option>
            {classes.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
          {/* Select Course */}
          <select
            id="courseSelect"
            className='w-[25%] h-full text-black text-center border border-red-700 rounded-[1vw] focus:border-red-700 focus:outline-none cursor-pointer'
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {/* Add Learning Material */}
          <button className='w-[25%] h-full text-[1.2vw] text-center border border-red-700 rounded-[1vw] focus:border-red-700 focus:outline-none
          bg-white text-black hover:bg-red-700 hover:text-white duration-300'
            onClick={() => AssignmentModalHandler()}>
            Upload Assignment
          </button>
        </div>
        <div className='w-full h-[37vh] p-[1vw] flex flex-col gap-y-[1vh] overflow-auto style-scrollbar'>
        {AssigmentVal.map((item, index) => (
          <div key={index} className='w-full h-[15vh] bg-red-100 rounded-[1vw] px-[2vw] flex flex-col gap-y-[1vh] py-[2vh]'>
      
            <div className='flex w-full h-1/2 gap-x-[2vw]'>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Assigment No. {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-red-900 text-white font-semibold rounded-[1vw]'>{item.assignmentNo}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Assigment Date {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-red-900 text-white font-semibold rounded-[1vw]'>{item.assignmentDate}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Due Date {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-red-900 text-white font-semibold rounded-[1vw]'>{item.dueDate}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Total marks {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-red-900 text-white font-semibold rounded-[1vw]'>{item.totalMarks}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <a className='text-[1vw] px-[1vw] py-[1vh] bg-red-900 text-white font-semibold rounded-[1vw] hover:text-blue-600 hover:underline duration-300 cursor-pointer'
              href={item.attachmentLink}>Attachment {"  "} </a>
            </div>
            </div>
            <div className='flex items-center justify-start w-full pl-[3.5%] h-1/2'>
            <p className='text-[1vw] text-black'>Brief Description {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-red-900 text-white font-semibold rounded-[1vw]'>
              <TruncatedText text={item.briefDescription} maxWords={20}/>
              </span>
              </p>
            </div>
          </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default AssignmentActivity