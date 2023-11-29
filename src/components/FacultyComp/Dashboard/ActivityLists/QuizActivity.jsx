import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const QuizVal = [
  {
    "assignmentNo": 1,
    "assignmentDate": "10 Jul, 2023",
    "type": "Online",
    "totalMarks": 20,
    "attachmentLink": "https://example.com/attachment1",
    "briefDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "assignmentNo": 2,
    "assignmentDate": "12 Jul, 2023",
    "type": "Paper-Based",
    "totalMarks": 15,
    "attachmentLink": "https://example.com/attachment2",
    "briefDescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "assignmentNo": 3,
    "assignmentDate": "14 Jul, 2023",
    "type": "Verbal",
    "totalMarks": 18,
    "attachmentLink": "https://example.com/attachment3",
    "briefDescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
  // Add more dummy data as needed
];


const QuizActivity = ({ handleActivityList, activity,QuizModalHandler}) => {
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
    <div className={`w-full bg-yellow-200 text-white h-[5vh] rounded-[1vw] overflow-hidden
    ${activity === "Quiz" ? "min-h-[50vh]" : "h-[5vh]"}
    `}>
      <div
        className={`w-full h-[5vh] bg-yellow-700 flex gap-x-[0.4vw] px-[1vw] justify-start items-center cursor-pointer
        ${activity === "Quiz" ? "rounded-t-[1vw] " : "rounded-[1vw] "}
        `}
        onClick={() => handleActivityList("Quiz")}
      >
        <FontAwesomeIcon
          className={`w-[1.4vw] h-[1.4vw] duration-300 ${activity === "Quiz" ? "rotate-180" : "rotate-0"}`}
          icon={faCaretDown}
          style={{ color: '#fff' }}
        />
        <p className='text-[1.2vw]'>Quizzes</p>
      </div>
      <div className='w-full h-[45vh]'>
        <div className='w-full h-[8vh] flex justify-start items-center gap-x-[1vw] py-[1vh] px-[1vw]'>
          {/* Select Class */}
          <select
            id="classSelect"
            className='w-[25%] h-full text-black text-center border border-yellow-700 rounded-[1vw] focus:border-yellow-700 focus:outline-none cursor-pointer'
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
            className='w-[25%] h-full text-black text-center border border-yellow-700 rounded-[1vw] focus:border-yellow-700 focus:outline-none cursor-pointer'
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
          <button className='w-[25%] h-full text-[1.2vw] text-center border border-yellow-700 rounded-[1vw] focus:border-yellow-700 focus:outline-none
          bg-white text-black hover:bg-yellow-700 hover:text-white duration-300'
            onClick={() => QuizModalHandler()}>
            Upload Quiz
          </button>
        </div>
        <div className='w-full h-[37vh] p-[1vw] flex flex-col gap-y-[1vh] overflow-auto style-scrollbar'>
        {QuizVal.map((item, index) => (
          <div key={index} className='w-full h-[15vh] bg-yellow-100 rounded-[1vw] px-[2vw] flex flex-col gap-y-[1vh] py-[2vh]'>
      
            <div className='flex w-full h-1/2 gap-x-[2vw]'>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Quiz No. {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-yellow-900 text-white font-semibold rounded-[1vw]'>{item.assignmentNo}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Quiz Date {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-yellow-900 text-white font-semibold rounded-[1vw]'>{item.assignmentDate}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Type {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-yellow-900 text-white font-semibold rounded-[1vw]'>{item.type}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <p className='text-[1vw] text-black'>Total marks {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-yellow-900 text-white font-semibold rounded-[1vw]'>{item.totalMarks}</span>
              </p>
            </div>
            <div className='flex items-center justify-center w-1/5 h-full'>
              <a className='text-[1vw] px-[1vw] py-[1vh] bg-yellow-900 text-white font-semibold rounded-[1vw] hover:text-blue-600 hover:underline duration-300 cursor-pointer'
              href={item.attachmentLink}>Attachment {"  "} </a>
            </div>
            </div>
            <div className='flex items-center justify-start w-full pl-[3.5%] h-1/2'>
            <p className='text-[1vw] text-black'>Brief Description {"  "}
              <span className='text-[1vw] px-[1vw] py-[1vh] bg-yellow-900 text-white font-semibold rounded-[1vw]'>
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

export default QuizActivity