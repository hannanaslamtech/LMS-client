import React from 'react'


const TimeTableVal = [
  {
    "Course": "Mathematics",
    "Mon": "9:00 AM - 11:00 AM",
    "MonNo": "1 - 3",
    "Tue": "10:00 AM - 12:00 PM",
    "TueNo": "2 - 4",
    "Wed": "11:00 AM - 1:00 PM",
    "WedNo": "3 - 5",
    "Thu": "9:00 AM - 11:00 AM",
    "ThuNo": "1 - 3",
    "Fri": "2:00 PM - 5:00 PM",
    "FriNo": "6 - 8"
  },
  {
    "Course": "Physics",
    "Mon": "2:00 PM - 4:00 PM",
    "MonNo": "4 - 6",
    "Tue": "1:00 PM - 3:00 PM",
    "TueNo": "5 - 7",
    "Wed": "3:30 PM - 5:30 PM",
    "WedNo": "6 - 8",
    "Thu": "2:30 PM - 4:30 PM",
    "ThuNo": "7 - 9",
    "Fri": "4:00 PM - 6:00 PM",
    "FriNo": "6 - 8"
  },
  // Add more courses as needed
];




const TimeTable = ({TimeTableModalHandler}) => {
  return (
    <div className='w-full h-[25vh] bg-gray-100 shadow-md shadow-blue-500 rounded-xl' >
        <div className='w-full h-[5vh] bg-blue-200 text-white flex justify-center items-center rounded-t-xl'>
          <p className='text-[1vw] text-black tracking-wide font-semibold hover:text-blue-600 hover:underline hover:cursor-pointer duration-300'
          onClick={() => TimeTableModalHandler()}
          >Weekly Lecture's Schedule</p>
        </div>
        <div className='w-full h-[19vh] overflow-auto style-scrollbar'>
          <table className="min-w-full bg-white border rounded-[1vw] border-gray-300">
            <thead className='text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-b-[1vw]'>
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
                <tr key={index}
                  className="bg-gray-100">
                  <td className="px-[1vw] py-[1vh] border-b text-[0.8vw] font-semibold truncate text-left">{Timetab.Course}</td>
                  <td className="px-[1vw] py-[1vh] border-b text-[0.8vw] font-normal text-center">{Timetab.MonNo}</td>
                  <td className="px-[1vw] py-[1vh] border-b text-[0.8vw] font-normal text-center">{Timetab.TueNo}</td>
                  <td className="px-[1vw] py-[1vh] border-b text-[0.8vw] font-normal text-center">{Timetab.WedNo}</td>
                  <td className="px-[1vw] py-[1vh] border-b text-[0.8vw] font-normal text-center">{Timetab.ThuNo}</td>
                  <td className="px-[1vw] py-[1vh] border-b text-[0.8vw] font-normal text-center">{Timetab.FriNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default TimeTable