import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SelectCourse = ({selectedCourse,setSelectedCourse}) => {
  const [isOpen, setIsOpen] = useState(false);
  const courses = ['Introduction to Computer', 'Information Security', 'Object Oriented Programming','All courses'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block'>
      <div
        className='w-full h-[5vh] bg-gray-100 text-black rounded-lg flex items-center justify-center gap-x-[0.5vw] cursor-pointer'
        onClick={toggleDropdown}
      >
        <p className='text-[1vw]'>{selectedCourse}</p>
        <FontAwesomeIcon className='w-[1vw] h-[1vw]' icon={faCaretDown} style={{ color: '#000' }} />
      </div>

      <div className='relative'> 
      {isOpen && (
        <div className={`absolute left-0 w-full mt-[0.1vh] overflow-auto text-black bg-gray-100 rounded-lg shadow-2xl shadow-black animate
        ${isOpen ? "scale-100":"scale-0"}
        `}>
          <ul className='p-[0.5vw] divide-y divide-slate-400'>
            {courses.map((course, index) => (
              <li
                key={index}
                className='p-2 cursor-pointer hover:bg-gray-200'
                onClick={() => handleCourseSelect(course)}
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default SelectCourse;
