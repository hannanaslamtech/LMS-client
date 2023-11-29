import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";

const ClassesVal = [
    {
        "day": "Mon",
        "period": "3",
        "timings": "1000 - 1100",
        "instructor": "Dr. Amjad",
        "classroom": "CL061",
    },
    {
        "day": "Mon",
        "period": "4",
        "timings": "1100 - 1200",
        "instructor": "Lab Attendant",
        "classroom": "LAB01",
    },
    {
        "day": "Tue",
        "period": "3",
        "timings": "1000 - 1100",
        "instructor": "Dr. Amjad",
        "classroom": "Cl055",
    },
    {
        "day": "Wed",
        "period": "7",
        "timings": "1500 - 1600",
        "instructor": "Lab Attendant",
        "classroom": "LAB03",
    },
    {
        "day": "Thu",
        "period": "4",
        "timings": "1100-1200",
        "instructor": "Dr. Amjad",
        "classroom": "Cl061",
    },
    {
        "day": "Fri",
        "period": "5",
        "timings": "1200 - 1300",
        "instructor": "Dr. Amjad",
        "classroom": "Cl063",
    },
];


const  Classes = ({ openClasses, ClassesModalHandler, courseName }) => {
    const [maxScreen, setMaxScreen] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    }


    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openClasses
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
                    <h1 className="text-[2vw] font-semibold">Classes Detail</h1>
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
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => ClassesModalHandler("No Data")}>
                        <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
                    </button>
                </div>
            </header>
            <div className={`w-full flex flex-col
            ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
                <div className='h-[15%] w-full p-[1vw] flex justify-center items-center'>
                    <p className='text-[1.5vw] text-black'>
                        Course Name:
                        <span className='font-semibold ml-[0.5vw]'>
                            {courseName}
                        </span>
                    </p>
                </div>
                <div className='w-full h-[85%] p-[1vw] overflow-auto style-scrollbar'>
                    <table className="min-w-full bg-white border-spacing-[1vw] border rounded-[1vw] border-gray-300 table-fixed">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Day</th>
                                <th className="px-4 py-2 border-b">Period</th>
                                <th className="px-4 py-2 border-b">Timings</th>
                                <th className="px-4 py-2 text-left border-b">Instructor</th>
                                <th className="px-4 py-2 text-left border-b">Classroom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ClassesVal.map((clas, index) => (
                                <tr key={index}
                                    className="even:bg-blue-50 odd:bg-blue-200"
                                >
                                    <td className="px-4 py-2 text-center border-b">{clas.day}</td>
                                    <td className="px-4 py-2 text-center border-b">{clas.period}</td>
                                    <td className="px-4 py-2 text-center border-b">{clas.timings}</td>
                                    <td className="px-4 py-2 text-left border-b">{clas.instructor}</td>
                                    <td className="px-4 py-2 text-left border-b">{clas.classroom}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Classes;
