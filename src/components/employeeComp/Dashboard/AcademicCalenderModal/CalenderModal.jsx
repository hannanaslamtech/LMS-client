import React, { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";
 
const AcademicCalenderVal = [
  {
    "activity": "MidTerm",
    "date": "1 Sep, 23",
    "remarks": "Start"
  },
  {
    "activity": "Add/Drop courses",
    "date": "4 Sep, 23",
    "remarks": "Start"
  },
  {
    "activity": "Last Date of Withdraw courses",
    "date": "6 Sep, 23",
    "remarks": "End"
  },
  {
    "activity": "Mid-Term Examinations",
    "date": "10 Nov, 23",
    "remarks": "Start"
  },
  {
    "activity": "Sports Gala",
    "date": "12 Nov, 23",
    "remarks": "Start"
  },
  {
    "activity": "Last day of Classes",
    "date": "12 Jan, 24",
    "remarks": "End"
  },
  {
    "activity": "Result Announcement",
    "date": "14 Jan, 24",
    "remarks": "End"
  },
  {
    "activity": "Holidays",
    "date": "25 Jan, 24",
    "remarks": "Start"
  },
  {
    "activity": "Defence Day",
    "date": "6 Sep, 24",
    "remarks": "Start"
  },
  {
    "activity": "Eid-ul-Fitr",
    "date": "10 May, 24",
    "remarks": "Start"
  },
  {
    "activity": "Eid-ul-Adha",
    "date": "18 Jul, 24",
    "remarks": "Start"
  },
  {
    "activity": "Muharram-ul-Haram",
    "date": "30 Aug, 24",
    "remarks": "Start"
  },
  {
    "activity": "Quaid-e-Azam Birth Day",
    "date": "25 Dec, 24",
    "remarks": "Start"
  },
  // Add more data as needed
];
  
  
const CalenderModal = ({openAcademic, AcademicModalHandler}) => {
    const [maxScreen, setMaxScreen] = useState(false);

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    }
  
    return (
        <div
            className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openAcademic
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
                    <h1 className="text-[2vw] font-semibold">Academic Calender</h1>
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
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => AcademicModalHandler("No Data")}>
                        <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
                    </button>
                </div>
            </header>
            <div className={`w-full flex flex-col justify-center items-center
            ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
                <div className='w-full h-[90%] p-[1vw] overflow-auto style-scrollbar'>
                <table className="min-w-full bg-white border-spacing-[1vw] border rounded-[1vw] border-gray-300 table-fixed">
  <thead>
    <tr>
      <th className="px-4 py-2 text-left border-b">Activity</th>
      <th className="px-4 py-2 border-b">Date</th>
      <th className="px-4 py-2 border-b">Remarks</th>
    </tr>
  </thead>
  <tbody>
    {AcademicCalenderVal.sort((a, b) => new Date(a.date) - new Date(b.date)).map((acad, index) => (
      <tr
        key={index}
        className={`${
          index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-200'
        } ${
          acad.remarks === 'Start' ? 'text-green-900' : acad.remarks === 'End' ? 'text-red-600' : ''
        }`}
      >
        <td className="px-4 py-2 text-left border-b">{acad.activity}</td>
        <td className="px-4 py-2 border-b">{acad.date}</td>
        <td className="px-4 py-2 border-b">{acad.remarks}</td>
      </tr>
    ))}
  </tbody>
</table>


                </div>
            </div>
        </div>
    );
}

export default CalenderModal