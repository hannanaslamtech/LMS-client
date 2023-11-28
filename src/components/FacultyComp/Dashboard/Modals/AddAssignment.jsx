import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";

const AddAssignment = ({ openAssignmentModal, AssignmentModalHandler }) => {
    const [maxScreen, setMaxScreen] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    }

    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openAssignmentModal
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
                    <h1 className="text-[2vw] font-semibold">Upload Assignment</h1>
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
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => AssignmentModalHandler()}>
                        <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
                    </button>
                </div>
            </header>
            <div className={`w-full flex flex-col justify-center items-center
            ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
                <div className='w-[90%] h-[90%] bg-gray-100 rounded-[1vw] flex flex-col gap-y-[1vh]'>
                    <div className='flex flex-row h-[20%] justify-center items-center px-[3vw] py-[1vh] gap-x-[1vw]'>
                        {/* Text Input */}
                        <div className='flex flex-col items-start w-1/4 h-full'>
                            <p className='text-[1vw]'>Assignment No.</p>
                            <input
                                type="text"
                                id="assignmentNoInput"
                                className="w-full h-full text-[1vw] p-[0.5vw] border border-gray-300 rounded-[1vw] bg-transparent focus:outline-none hover:cursor-pointer focus:border-blue-900 text-center transition-all duration-300"
                                placeholder="Assignment number"
                            />
                        </div>

                        {/* Date Input */}
                        <div className='flex flex-col items-start w-1/4 h-full'>
                            <p className='text-[1vw]'>Assigning Date</p>
                            <input
                                type="date"
                                id="assigningDateInput"
                                className="w-full h-full text-[1vw] text-black text-center border border-gray-300 rounded-[1vw] focus:border-blue-900 focus:outline-none"
                                placeholder="Today's Date"
                            />
                        </div>

                        {/* Due Date Input */}
                        <div className='flex flex-col items-start w-1/4 h-full'>
                            <p className='text-[1vw]'>Due Date</p>
                            <input
                                type="date"
                                id="dueDateInput"
                                className="w-full h-full text-[1vw] text-black text-center border border-gray-300 rounded-[1vw] focus:border-blue-900 focus:outline-none"
                                placeholder="Due Date"
                            />
                        </div>

                        {/* Total Marks Input */}
                        <div className='flex flex-col items-start w-1/4 h-full'>
                            <p className='text-[1vw]'>Total Marks</p>
                            <input
                                type="text"
                                id="totalMarksInput"
                                className="w-full h-full text-[1vw] p-[0.5vw] border border-gray-300 rounded-[1vw] bg-transparent focus:outline-none hover:cursor-pointer focus:border-blue-900 text-center transition-all duration-300"
                                placeholder="Assignment's Marks"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col h-[40%] justify-center items-center'>
                        <div className='w-[90%] h-[20%] flex items-end'>
                            <p className='text-[1.2vw] text-black text-left'>Brief Description:</p>
                        </div>
                        <textarea
                            className='h-[80%] w-[90%] text-[1.2vw] p-[1vw] style-scrollbar border border-blue-300 focus:border-blue-900 outline-blue-900 duration-500'
                            placeholder='Write the description here...'
                        >
                        </textarea>

                    </div>
                    <div className='flex flex-col w-full h-[15%] justify-center items-center'>
                        <input
                            id="file_input"
                            type="file"
                            className="block w-[90%] px-[1vw] py-[1vh] leading-[3vh] transition-all duration-300 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className='flex flex-row h-[15%] justify-center items-center py-[1vh] gap-x-[1vw]'>
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

export default AddAssignment