import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";

const AttendanceVal = [
  {
    "date": "25 Apr, 23",
    "day": "Mon",
    "period": "1 - 2",
    "classroom": "CL061",
    "attendance": "Present"
  },
  {
    "date": "10 Jun, 23",
    "day": "Mon",
    "period": "4 - 5",
    "classroom": "CL061",
    "attendance": "Absent"
  },
  {
    "date": "10 May, 23",
    "day": "Wed",
    "period": "3 - 4",
    "classroom": "LAB01",
    "attendance": "Present"
  },
  {
    "date": "05 Jul, 23",
    "day": "Thu",
    "period": "1 - 2",
    "classroom": "Cl061",
    "attendance": "Absent"
  },
  {
    "date": "05 Jul, 23",
    "day": "Thu",
    "period": "2 - 3",
    "classroom": "Cl061",
    "attendance": "Present"
  },
  {
    "date": "25 May, 23",
    "day": "Fri",
    "period": "2 - 3",
    "classroom": "CL055",
    "attendance": "Present"
  },
  // Add more data as needed
];

const AddLearningMaterialsModal = ({ openLearningMaterial, LearningMaterialHandler }) => {
  const [maxScreen, setMaxScreen] = useState(false);

  const maxScreenHandler = () => {
    setMaxScreen(!maxScreen);
  }

  const Categories = ['E-books', 'PDF files', 'Lectures & Notes', 'MP3 Audios', 'Videos & presentations', 'All'];

  const [selectedCategory, setSelectedCategory] = useState('AudioCourses'); // Initialize selectedCategory state

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [validFrom, setValidFrom] = useState('');
  const [validTo, setValidTo] = useState('');

  return (
    <div
      className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openLearningMaterial
          ? "scale-100 duration-300"
          : "scale-0 -z-10"
        }
        ${maxScreen
          ? "w-[100%] h-[100%] top-0 left-0 m-0 translate-0 translate-x-0 translate-y-0 drag"
          : "w-[70vw] h-[60vh] rounded-t-[1vw]  top-[15vh] left-[15vw]"
        }
      `}
    >
      <header
        className={`w-full flex justify-between items-center px-[2vw] py-[1vw] text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300
         ${maxScreen ? "h-[15%]" : "h-[20%] rounded-t-[1vw]"
          }`}
      >
        <div>
          <h1 className="text-[2vw] font-semibold">Upload Document</h1>
        </div>
        <div className="flex gap-x-[1vw]">
          <button className='w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300'>
            <FontAwesomeIcon className='w-full h-full' icon={faPrint} style={{ color: "#ffffff", }} />
          </button>
          <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => maxScreenHandler()}>
            {maxScreen ? <FontAwesomeIcon className="w-full h-full" icon={faCompress} /> :
              <FontAwesomeIcon className="w-full h-full" icon={faExpand} />}
          </button>
          {/* Provide the implementation for AddProjectHandler */}
          <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => LearningMaterialHandler()}>
            <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
          </button>
        </div>
      </header>
      <div className={`w-full flex flex-col justify-center items-center
            ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
        <div className='w-[90%] h-[90%] bg-gray-100 rounded-[1vw] flex flex-col gap-y-[1vh]'>
          <div className='flex flex-row h-[15%] justify-center items-center px-[3vw] py-[1vh] gap-x-[1vw]'>
            {/* Select category */}
            <div className='w-1/3 h-full'>
              <select
                id="select-categories"
                className=" w-full h-full text-[1vw] p-[0.5vw] border border-gray-300 rounded-md bg-transparent focus:outline-none hover:cursor-pointer focus:border-purple-900 text-center transition-all duration-300"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {Categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Text Input */}
            <input
              type="text"
              id="text-input"
              className=" w-1/3 h-full text-[1vw] p-[0.5vw] border border-gray-300 rounded-md bg-transparent focus:outline-none hover:cursor-pointer focus:border-purple-900 text-center transition-all duration-300"
              placeholder="Enter text"
            />

            {/* Date Input */}
            <input
              type="date"
              id="date-input"
              className=" w-1/3 h-full text-[1vw] p-[0.5vw] border border-gray-300 rounded-md bg-transparent focus:outline-none hover:cursor-pointer focus:border-purple-900 text-center transition-all duration-300"
            />
          </div>
          <div className='flex flex-col h-[40%] justify-center items-center'>
            <div className='w-[90%] h-[20%] flex items-end'>
            <p className='text-[1.2vw] text-black text-left'>Title/Description:</p>
            </div>
            <textarea
              className='h-[80%] w-[90%] text-[1.2vw] p-[1vw] style-scrollbar border border-blue-300 focus:border-blue-900 outline-blue-900 duration-500'
              placeholder='Write the description here...'
            >
            </textarea>

          </div>
          <div className='flex flex-col h-[20%] justify-center items-center'>
          <div className='w-[90%] h-[40%] flex items-end'>
            <p className='text-[1.2vw] text-black text-left'>Visible document:</p>
            </div>
            <div className='w-[90%] h-[70%] flex justify-center gap-x-[1vw]'>
            <div className="flex w-1/2 h-full">
        <div className='w-[20%] h-full flex items-center justify-center'>
        <label className="text-[1vw] font-semibold text-gray-700 text-center">Valid From:</label>
        </div>
        <input
          type="date"
          value={validFrom}
          onChange={(e) => setValidFrom(e.target.value)}
          className="w-[80%] p-[1vw] border text-[1vw] border-gray-300 rounded"
        />
      </div>

      <div className="flex w-1/2">
      <div className='w-[20%] h-full flex items-center justify-center'>
        <label className="text-[1vw] font-semibold text-gray-700">Valid To:</label>
        </div>
        <input
          type="date"
          value={validTo}
          onChange={(e) => setValidTo(e.target.value)}
          className="w-[80%] p-[1vw] text-[1vw] border border-gray-300 rounded"
        />
      </div>
            </div>
          </div>
          <div className='flex flex-row h-[20%] justify-center items-center py-[1vh] gap-x-[1vw]'>
            <button className='h-full w-[20%] text-[1vw] font-semibold rounded-[1vw] text-black bg-green-400 hover:text-white hover:bg-green-700 duration-300'>
              Upload
            </button>
            <button className='h-full w-[20%] text-[1vw] font-semibold rounded-[1vw] text-black bg-red-400 hover:text-white hover:bg-red-700 duration-300'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AddLearningMaterialsModal