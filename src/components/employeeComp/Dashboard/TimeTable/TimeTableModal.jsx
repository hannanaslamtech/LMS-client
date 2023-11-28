import React, { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";
 
const TimeTableVal = [
  {
    "Course": "Mathematics",
    "Mon": "09:00 - 11:00",
    "MonNo": "1 - 3",
    "Tue": "10:00 - 12:00",
    "TueNo": "2 - 4",
    "Wed": "11:00 - 13:00",
    "WedNo": "3 - 5",
    "Thu": "09:00 - 11:00",
    "ThuNo": "1 - 3",
    "Fri": "14:00 - 17:00",
    "FriNo": "6 - 8"
  },
  {
    "Course": "Physics",
    "Mon": "14:00 - 16:00",
    "MonNo": "4 - 6",
    "Tue": "13:00 - 15:00",
    "TueNo": "5 - 7",
    "Wed": "15:30 - 17:30",
    "WedNo": "6 - 8",
    "Thu": "14:30 - 16:30",
    "ThuNo": "7 - 9",
    "Fri": "16:00 - 18:00",
    "FriNo": "6 - 8"
  },
  {
    "Course": "Computer Science",
    "Mon": "11:30 - 13:30",
    "MonNo": "3 - 5",
    "Tue": "09:00 - 11:00",
    "TueNo": "1 - 3",
    "Wed": "13:30 - 15:30",
    "WedNo": "5 - 7",
    "Thu": "10:30 - 12:30",
    "ThuNo": "2 - 4",
    "Fri": "12:00 - 14:00",
    "FriNo": "4 - 6"
  },
  {
    "Course": "Biology",
    "Mon": "11:30 - 13:30",
    "MonNo": "3 - 5",
    "Tue": "09:00 - 11:00",
    "TueNo": "1 - 3",
    "Wed": "13:30 - 15:30",
    "WedNo": "5 - 7",
    "Thu": "14:30 - 16:30",
    "ThuNo": "7 - 9",
    "Fri": "16:00 - 18:00",
    "FriNo": "8 - 10"
  },
  {
    "Course": "Economics",
    "Mon": "11:30 - 13:30",
    "MonNo": "3 - 5",
    "Tue": "09:00 - 11:00",
    "TueNo": "1 - 3",
    "Wed": "13:30 - 15:30",
    "WedNo": "5 - 7",
    "Thu": "14:30 - 16:30",
    "ThuNo": "7 - 9",
    "Fri": "16:00 - 18:00",
    "FriNo": "8 - 10"
  },
  {
    "Course": "Chemistry",
    "Mon": "11:30 - 13:30",
    "MonNo": "3 - 5",
    "Tue": "09:00 - 11:00",
    "TueNo": "1 - 3",
    "Wed": "13:30 - 15:30",
    "WedNo": "5 - 7",
    "Thu": "14:30 - 16:30",
    "ThuNo": "7 - 9",
    "Fri": "16:00 - 18:00",
    "FriNo": "8 - 10"
  }
  // Add more courses as needed
];

 
const TimeTableModal = ({ openTimeTableModal, TimeTableModalHandler, courseName }) => {
    const [maxScreen, setMaxScreen] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    }    
    
    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openTimeTableModal
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
                    <h1 className="text-[2vw] font-semibold">Time Table</h1>
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
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => TimeTableModalHandler()}>
                        <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
                    </button>
                </div>
            </header>
            <div className={`w-full flex flex-col
            ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
            <div className='w-full h-full p-[1vw] shadow-2xl overflow-auto style-scrollbar'>
            <table className="min-w-full bg-white border rounded-[1vw] border-gray-300">
            <thead className='text-white bg-blue-900'>
              <tr>
                <th className="px-[1vw] py-[1vh] border-b text-[1vw] font-semibold text-left">Course</th>
                <th className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">Mon</th>
                <th className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">Tue</th>
                <th className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">Wed</th>
                <th className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">Thu</th>
                <th className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">Fri</th>
              </tr>
            </thead>

            <tbody>
  {TimeTableVal.map((Timetab, index) => (
    <tr key={index} className="bg-gray-100">
      <td className="px-[1vw] py-[2vh] border-b text-[1vw] font-semibold truncate text-left">{Timetab.Course}</td>
      <td className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">{`${Timetab.Mon} (${Timetab.MonNo})`}</td>
      <td className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">{`${Timetab.Tue} (${Timetab.TueNo})`}</td>
      <td className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">{`${Timetab.Wed} (${Timetab.WedNo})`}</td>
      <td className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">{`${Timetab.Thu} (${Timetab.ThuNo})`}</td>
      <td className="px-[1vw] py-[1vh] border-b text-[1vw] font-normal">{`${Timetab.Fri} (${Timetab.FriNo})`}</td>
    </tr>
  ))}
</tbody>

          </table>
            </div>
            </div>
        </div>
    );
}

export default TimeTableModal