import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";

const RemindersDetail = ({ openDetailsReminders, DetailsRemindersModalHandler,
     Color, CourseCode, Desc, Deadline }) => {
    const [maxScreen, setMaxScreen] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    };

    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-40
                ${openDetailsReminders
                    ? "scale-100 duration-100"
                    : "scale-0 -z-10"
                }
                ${maxScreen
                    ? "w-[100%] h-[100%] top-0 left-0 m-0 translate-0 translate-x-0 translate-y-0 drag"
                    : "w-[70vw] h-[60vh] rounded-t-[1vw]  top-[15vh] left-[15vw]"
                }`}
        >
            <header
                className={`w-full flex justify-between items-center px-[2vw] py-[1vw] text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300
                    ${maxScreen ? "h-[15%]" : "h-[20%] rounded-t-[1vw]"}
                `}
            >
                <div>
                    <h1 className="text-[2vw] font-semibold">Assignment Details</h1>
                </div>
                <div className="flex gap-x-[1vw]">
                    <button className='w-[1.2vw] h-[1.2vw]'>
                        <FontAwesomeIcon className='w-full h-full' icon={faPrint} style={{ color: "#ffffff" }} />
                    </button>
                    <button className="w-[1.2vw] h-[1.2vw]" onClick={() => maxScreenHandler()}>
                        {maxScreen ? <FontAwesomeIcon className="w-full h-full" icon={faCompress} /> :
                            <FontAwesomeIcon className="w-full h-full" icon={faExpand} />}
                    </button>
                    <button className="w-[1.2vw] h-[1.2vw]" onClick={() => DetailsRemindersModalHandler("No Data")}>
                        <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
                    </button>
                </div>
            </header>
            <div className={`w-full flex flex-col
                ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
                <div className={`h-[25%] w-full p-[1vw] ${Color} flex justify-center items-center border-[0.1vw] rounded-[1vw] gap-x-[1.5vw]`}>
                    <div className='w-[15%] h-full flex flex-col justify-center items-end gap-y-[1vh]'>
                        <p className='text-[1.2vw]'>Course Code: </p>
                        <p className='text-[1.2vw]'>Due Date: </p>
                    </div>
                    <div className='w-[85%] h-full flex flex-col justify-center items-start gap-y-[1vh]'>
                        <p className='text-[1.2vw] font-semibold'>{CourseCode}</p>
                        <p className='text-[1.2vw] font-semibold'>{Deadline}</p>
                    </div>
                </div>
                <div className='h-[75%] w-full p-[1vw] flex justify-center items-center border-[0.1vw] gap-x-[0.5vw]'>
                <div className='w-[15%] h-full flex flex-col justify-start items-end py-[1vw]'>
                        <p className='text-[1.2vw]'>Description: </p>
                    </div>
                    <div className='w-[85%] h-full flex flex-col justify-start items-start border-blue-900 p-[1vw] border-[0.2vw] overflow-auto style-scrollbar'>
                        <p className='text-[1.2vw] font-medium text-justify'>{Desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemindersDetail;
