import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const AttendanceData = [
  {
    "sr": 1,
    "rollNo": 190477,
    "name": "Abdul Hannan Aslam",
    "attendance": true,
    "time": "1 Nov, 22 - 08:30"
  },
  {
    "sr": 2,
    "rollNo": 190377,
    "name": "Momin Umer Buksh",
    "attendance": true,
    "time": "2 Nov, 22 - 09:45"
  },
  {
    "sr": 3,
    "rollNo": 191140,
    "name": "Abu-turab Javed",
    "attendance": true,
    "time": "3 Nov, 22 - 10:15"
  },
  {
    "sr": 4,
    "rollNo": 191232,
    "name": "John Doe",
    "attendance": true,
    "time": "4 Nov, 22 - 11:30"
  },
  {
    "sr": 5,
    "rollNo": 191000,
    "name": "Jane Doe",
    "attendance": true,
    "time": "5 Nov, 22 - 13:45"
  }
];

const AttendanceActivity = ({ handleActivityList, activity }) => {
  // State variables to manage selected values
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Dummy data for options
  const classes = ['Class A', 'Class B', 'Class C'];
  const courses = ['Math', 'Science', 'History'];
  const periods = ['Morning', 'Afternoon', 'Evening'];

  const [attendanceData, setAttendanceData] = useState(AttendanceData);

  const handleAttendanceChange = (index) => {
    const newData = [...attendanceData];
    newData[index].attendance = !newData[index].attendance;
    setAttendanceData(newData);
  };

  return (
    <div className={`w-full text-white rounded-[1vw] bg-green-200 overflow-hidden
    ${activity === "Attendance" ? "min-h-[50vh]" : "h-[5vh]"}
    `}>
      <div
        className={`w-full h-[5vh] bg-green-700 flex gap-x-[0.4vw] px-[1vw] justify-start items-center cursor-pointer
        ${activity === "Attendance" ? "rounded-t-[1vw]" : "rounded-[1vw]"}
        `}
        onClick={() => handleActivityList("Attendance")}
      >
        <FontAwesomeIcon
          className={`w-[1.4vw] h-[1.4vw] duration-300 ${activity === "Attendance" ? "rotate-180" : "rotate-0"}`}
          icon={faCaretDown}
          style={{ color: '#fff' }}
        />
        <p className='text-[1.2vw]'>Attendance</p>
      </div>
      <div className='w-full h-[45vh]'>
        <div className='w-full h-[8vh] flex justify-center items-center gap-x-[1vw] py-[1vh] px-[1vw]'>
          {/* Select Class */}
          <select
            id="classSelect"
            className='w-[25%] h-full text-black text-center border border-green-700 rounded-[1vw] focus:border-green-700 focus:outline-none cursor-pointer'
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select a class</option>
            {classes.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>

          {/* Select Course */}
          <select
            id="courseSelect"
            className='w-[25%] h-full text-black text-center border border-green-700 rounded-[1vw] focus:border-green-700 focus:outline-none cursor-pointer'
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>

          {/* Select Period */}
          <select
            id="periodSelect"
            className='w-[25%] h-full text-black text-center border border-green-700 rounded-[1vw] focus:border-green-700 focus:outline-none cursor-pointer'
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="">Select a period</option>
            {periods.map((period) => (
              <option key={period} value={period}>
                {period}
              </option>
            ))}
          </select>

          {/* Select Date */}
          <input
            type="date"
            id="dateInput"
            className='w-[25%] h-full text-black text-center border border-green-700 rounded-[1vw] focus:border-green-700 focus:outline-none '
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className='w-full h-[32vh] overflow-auto style-scrollbar'>
          <table className="min-w-full bg-white text-black border-spacing-[1vw] border rounded-[1vw] border-gray-300 table-fixed">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="px-[1vw] py-[1vh] border-b">Sr</th>
                <th className="px-[1vw] py-[1vh] border-b text-left">Roll No</th>
                <th className="px-[1vw] py-[1vh] border-b text-left">Name</th>
                <th className="px-[1vw] py-[1vh] border-b">Attendance</th>
                <th className="px-[1vw] py-[1vh] border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, index) => (
                <tr key={row.sr} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-200'}>
                  <td className="px-[1vw] py-[1vh] border-b">{row.sr}</td>
                  <td className="px-[1vw] py-[1vh] border-b text-left">{row.rollNo}</td>
                  <td className="px-[1vw] py-[1vh] border-b text-left">{row.name}</td>
                  <td className="px-[1vw] py-[1vh] border-b">
                    <input
                      type="checkbox"
                      checked={row.attendance}
                      onChange={() => handleAttendanceChange(index)}
                    />
                  </td>
                  <td className="px-[1vw] py-[1vh] border-b">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='w-full h-[5vh]'>
          <button className='flex items-center justify-center w-full h-full text-[1.2vw] tracking-widest font-semibold text-black bg-green-300 hover:text-white hover:bg-green-700 duration-300'>
            Mark Attendance
          </button>
        </div>
      </div>
    </div>
  )
}

export default AttendanceActivity