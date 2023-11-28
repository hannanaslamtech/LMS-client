import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const RemindersModel = ({
    openReminders,
    RemindersModalHandler,
    DetailsRemindersModalHandler,
    Color,
    CourseCode,
    Desc,
    Deadline,
    type
}) => {
    const [maxScreen, setMaxScreen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    };

    const toggleDetails = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openReminders ? "scale-100 duration-300" : "scale-0 -z-10"}
        ${maxScreen
                    ? "w-[100%] h-[100%] top-0 left-0 m-0 translate-0 translate-x-0 translate-y-0 drag"
                    : "w-[70vw] h-[60vh] rounded-t-[1vw]  top-[15vh] left-[15vw]"
                }
      `}
        >
            <header
                className={`w-full flex justify-between items-center px-[2vw] py-[1vw] text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300
         ${maxScreen ? "h-[15%]" : "h-[20%] rounded-t-[1vw]"}
        `}
            >
                <div>
                    <h1 className="text-[2vw] font-semibold">{type} Detail</h1>
                </div>
                <div className="flex gap-x-[1vw]">
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300">
                        <FontAwesomeIcon icon={faFileArrowDown} style={{ color: "#ffffff", }} />
                    </button>
                    <button className="w-[1.2vw] h-[1.2vw]" onClick={maxScreenHandler}>
                        {maxScreen ? <FontAwesomeIcon className="w-full h-full duration-300 hover:scale-110" icon={faCompress} /> :
                            <FontAwesomeIcon className="w-full h-full duration-300 hover:scale-110" icon={faExpand} />}
                    </button>
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => RemindersModalHandler("No Data")}>
                        <FontAwesomeIcon className="w-full h-full duration-300 hover:scale-110" icon={faXmark} />
                    </button>
                </div>
            </header>
            <div className={`w-full flex flex-col overflow-auto style-scrollbar gap-y-[1vh]
            ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
                <div className='h-auto w-full p-[1vw]  flex justify-center items-center'>
                    <div className={`flex justify-center items-center text-justify p-[1vw] w-full ${Color} rounded-xl border-[0.1vw] border-red-700 transition-height overflow-auto styled-scrollbar animate ${expanded ? "max-h-[60vh]" : "max-h-[8vh]"} overflow-hidden`} style={{ transitionDuration: '500ms' }}>
                        {expanded ? (
                            <div className={`w-full flex flex-col
                                       ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
                                   `}>
                                <div className={`h-[25%] w-full p-[1vw] ${Color} flex justify-center items-center rounded-[1vw] gap-x-[1.5vw]`}>
                                    <div className='w-[15%] h-full flex flex-col justify-center items-end gap-y-[1vh]'>
                                        <p className='text-[1.2vw]'>Course Code: </p>
                                        <p className='text-[1.2vw]'>Due Date: </p>
                                    </div>
                                    <div className='w-[85%] h-full flex flex-col justify-center items-start gap-y-[1vh]'>
                                        <p className='text-[1.2vw] font-semibold'>{CourseCode}</p>
                                        <p className='text-[1.2vw] font-semibold'>{Deadline}</p>
                                    </div>
                                </div>
                                <div className='h-[75%] w-full p-[1vw] flex justify-center items-center gap-x-[0.5vw]'>
                                    <div className='w-[15%] h-full flex flex-col justify-start items-end py-[1vw]'>
                                        <p className='text-[1.2vw]'>Description: </p>
                                    </div>
                                    <div className='w-[85%] h-full flex flex-col justify-start items-start border-black p-[1vw] border-[0.2vw] overflow-auto style-scrollbar'>
                                        <p className='text-[1.2vw] font-medium text-justify'>{Desc}</p>
                                    </div>
                                </div>
                                <div className='flex justify-end px-[1vw]'>
                                    <button className='text-[1vw] font-semibold text-blue-600 hover:underline' onClick={toggleDetails}>
                                        {expanded ? 'See Less' : 'See More'}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p className='text-[1vw] truncate'>
                                    <span className='font-bold text-red-600 px-[0.5vw] animate'>({CourseCode}) -</span>
                                    {Desc.length > 100 ? (
                                        <>
                                            {`${Desc.slice(0, expanded ? Desc.length : 100)}... `}
                                            <button className='text-blue-600 hover:underline' onClick={toggleDetails}>
                                                {expanded ? 'See Less' : 'See More'}
                                            </button>
                                        </>
                                    ) : (
                                        <>{Desc}</>
                                    )}
                                    <span className='font-bold text-red-600 px-[0.5vw]'>({Deadline})</span>
                                </p>
                            </>
                        )}
                    </div>
                </div>

                <div className='w-full h-[30vh] p-[1vw] flex justify-center items-start'>
                    <div className="max-w-[50%] p-[1vw] bg-white rounded-[0.5vw] shadow-2xl">
                        <label className="block text-[1.2vw] font-semibold text-gray-700" htmlFor="file_input">
                            Upload File
                        </label>
                        <div className="relative mt-[0.5vh] rounded-[0.5vw] shadow-sm">
                            <input
                                id="file_input"
                                type="file"
                                className="block w-full px-3 py-2 leading-5 transition-all duration-300 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                            <p className="mt-[0.5vh] text-[0.8vw] text-gray-500" id="file_input_help">
                                PDF, PNG, JPG, or ZIP (Max. 10MB).
                            </p>
                        </div>
                        <button className='px-4 py-2 mt-4 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200 focus:ring-opacity-50'>
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RemindersModel;
