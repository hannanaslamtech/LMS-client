import React, { useState} from 'react';
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
  
const Attendance = ({ openAttendance, AttendanceModalHandler, courseName }) => {
    const [maxScreen, setMaxScreen] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    }    

    function calculateAttendanceStatistics(attendanceData) {
        // Calculate total number of entries
        const totalEntries = attendanceData.length;
      
        // Filter entries with attendance marked as "Present"
        const presentEntries = attendanceData.filter(entry => entry.attendance === 'Present');
      
        // Calculate the number of entries with attendance marked as "Present"
        const totalPresentEntries = presentEntries.length;
      
        // Calculate the percentage of attended lectures
        const attendancePercentage = (totalPresentEntries / totalEntries) * 100;
      
        // Return the calculated values
        return {
          totalEntries,
          totalPresentEntries,
          attendancePercentage
        };
      }
      
      const attendanceStatistics = calculateAttendanceStatistics(AttendanceVal);

    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openAttendance
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
                    <h1 className="text-[2vw] font-semibold">Attendance Detail</h1>
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
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => AttendanceModalHandler("No Data")}>
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
                <div className='w-full h-[75%] p-[1vw] overflow-auto style-scrollbar'>
                <table className="min-w-full bg-white border-spacing-[1vw] border rounded-[1vw] border-gray-300 table-fixed">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Day</th>
            <th className="px-4 py-2 border-b">Period</th>
            <th className="px-4 py-2 border-b">Classroom</th>
            <th className="px-4 py-2 border-b">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {AttendanceVal.map((attendance, index) => (
            <tr key={index}
            className={`${attendance.attendance === "Present" ? "bg-green-400" :
            attendance.attendance === "Absent" ? "bg-red-400" :
             "bg-gray-100"}`}>
              <td className="px-4 py-2 text-center border-b">{attendance.date}</td>
              <td className="px-4 py-2 text-center border-b">{attendance.day}</td>
              <td className="px-4 py-2 text-center border-b">{attendance.period}</td>
              <td className="px-4 py-2 text-center border-b">{attendance.classroom}</td>
              <td className="px-4 py-2 text-center border-b">{attendance.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
                </div>
                <div className='h-[10%] w-full rounded-t-[0.5vw] p-[1vw] flex justify-evenly items-center
                text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900'>
                    <p className='text-[1.2vw]'>
                        Total Lectures =
                        <span className='font-semibold ml-[0.5vw]'>
                            {attendanceStatistics.totalEntries}
                        </span>
                    </p>
                    <p className='text-[1.2vw]'>
                        Attended Lectures =
                        <span className='font-semibold ml-[0.5vw]'>
                            {attendanceStatistics.totalPresentEntries}
                        </span>
                    </p>
                    <p className='text-[1.2vw]'>
                         Attendace Percentage =
                        <span className='font-semibold ml-[0.5vw]'>
                            {attendanceStatistics.attendancePercentage.toFixed(2) + "%"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Attendance;
