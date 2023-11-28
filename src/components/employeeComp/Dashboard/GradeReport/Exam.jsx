import React, { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";
 
const FinalExamsVal = [
  {
    "exam": "Final Exam 1",
    "date": "25 Apr, 23",
    "status": "Yes",
    "obtained": 90,
    "totalMarks": 100,
    "result": "90%"
  },
  {
    "exam": "Final Exam 2",
    "date": "10 May, 23",
    "status": "No",
    "obtained": null,
    "totalMarks": 50,
    "result": null
  },
  {
    "exam": "Final Exam 3",
    "date": "25 May, 23",
    "status": "Yes",
    "obtained": 78,
    "totalMarks": 100,
    "result": "78%"
  },
  {
    "exam": "Final Exam 4",
    "date": "10 Jun, 23",
    "status": "Yes",
    "obtained": 85,
    "totalMarks": 100,
    "result": "85%"
  },
  {
    "exam": "Final Exam 5",
    "date": "05 Jul, 23",
    "status": "No",
    "obtained": null,
    "totalMarks": 50,
    "result": null
  },
  // Add more data as needed
];
  
const Exam = ({ openFinal, FinalModalHandler, courseName }) => {
    const [maxScreen, setMaxScreen] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    }

      
    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openFinal
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
                    <h1 className="text-[2vw] font-semibold">Exam Detail</h1>
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
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => FinalModalHandler("No Data")}>
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
            <th className="px-4 py-2 text-left border-b">Final Exam</th>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Appeared</th>
            <th className="px-4 py-2 border-b">Obtained</th>
            <th className="px-4 py-2 border-b">Total Marks</th>
            <th className="px-4 py-2 border-b">Result (%)</th>
          </tr>
        </thead>
        <tbody>
          {FinalExamsVal.map((Final, index) => (
            <tr key={index}
            className={`${Final.status === "Yes" ? "bg-green-400" :
            Final.status === "No" ? "bg-red-400" :
             "bg-gray-100"}`}>
              <td className="px-4 py-2 text-left border-b">{Final.exam}</td>
              <td className="px-4 py-2 border-b">{Final.date}</td>
              <td className="px-4 py-2 border-b">{Final.status}</td>
              <td className="px-4 py-2 border-b">{Final.obtained}</td>
              <td className="px-4 py-2 border-b">{Final.totalMarks}</td>
              <td className="px-4 py-2 border-b">{Final.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
                </div>
            </div>
        </div>
    );
}

export default Exam;
