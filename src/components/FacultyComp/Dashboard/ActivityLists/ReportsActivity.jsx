import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ReportData = [
  {
    "Sr": 1,
    "Roll No": "ABC123",
    "Name": "John Doe",
    "Assignment": 8,
    "Quiz": 7,
    "MidTerm": 9,
    "Final": 25,
    "Total": 49
  },
  {
    "Sr": 2,
    "Roll No": "XYZ456",
    "Name": "Jane Smith",
    "Assignment": 7,
    "Quiz": 8,
    "MidTerm": 8,
    "Final": 22,
    "Total": 45
  },
  {
    "Sr": 3,
    "Roll No": "PQR789",
    "Name": "Bob Johnson",
    "Assignment": 9,
    "Quiz": 6,
    "MidTerm": 7,
    "Final": 20,
    "Total": 42
  },
  {
    "Sr": 4,
    "Roll No": "LMN012",
    "Name": "Alice Williams",
    "Assignment": 6,
    "Quiz": 9,
    "MidTerm": 7,
    "Final": 24,
    "Total": 46
  },
  {
    "Sr": 5,
    "Roll No": "EFG345",
    "Name": "Charlie Brown",
    "Assignment": 8,
    "Quiz": 7,
    "MidTerm": 8,
    "Final": 21,
    "Total": 44
  },
  {
    "Sr": 6,
    "Roll No": "ABC123",
    "Name": "John Doe",
    "Assignment": 8,
    "Quiz": 7,
    "MidTerm": 9,
    "Final": 25,
    "Total": 49
  },
  {
    "Sr": 7,
    "Roll No": "ABC123",
    "Name": "John Doe",
    "Assignment": 8,
    "Quiz": 7,
    "MidTerm": 9,
    "Final": 25,
    "Total": 49
  },
  // Add more dummy data as needed
];


const ReportsActivity = ({handleActivityList ,activity}) => {
    // State variables to manage selected values
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
  
    // Dummy data for options
    const classes = ['Class A', 'Class B', 'Class C'];
    const courses = ['Math', 'Science', 'History'];
  return (
    <div className={`w-full bg-[#ffc489] text-white h-[5vh] rounded-[1vw] overflow-hidden
    ${activity === "Reports" ? "min-h-[50vh]" : "h-[5vh]"}
    `}>
    <div
        className={`w-full h-[5vh]  bg-[#964B00] flex gap-x-[0.4vw] px-[1vw] justify-start items-center cursor-pointer
        ${activity === "Reports" ? "rounded-t-[1vw]" : "rounded-[1vw]"}
        `}
        onClick={() => handleActivityList("Reports")}
    >
        <FontAwesomeIcon
            className={`w-[1.4vw] h-[1.4vw] duration-300 ${activity === "Reports" ? "rotate-180" : "rotate-0"}`}
            icon={faCaretDown}
            style={{ color: '#fff' }}
        />
        <p className='text-[1.2vw]'>Reports</p>
    </div>
    <div className='w-full h-[45vh]'>
        <div className='w-full h-[8vh] flex justify-center items-center gap-x-[1vw] py-[1vh] px-[1vw]'>
          {/* Select Class */}
          <select
            id="classSelect"
            className='w-[25%] h-full text-black text-center border border-[#ffc489] rounded-[1vw] focus:border-[#ffc489] focus:outline-none cursor-pointer'
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
            className='w-[25%] h-full text-black text-center border border-[#ffc489] rounded-[1vw] focus:border-[#ffc489] focus:outline-none cursor-pointer'
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
        </div>
        <div className='w-full h-[37vh] overflow-auto style-scrollbar'>
      <table className="min-w-full bg-white text-black border-spacing-[1vw] border rounded-[1vw] border-gray-300 table-fixed">
      <thead className="sticky top-0 bg-white">
  <tr>
    <th className="text-[1.4vw] px-[1vw] py-[1vh] border-b w-[5%]">Sr</th>
    <th className="text-[1.4vw] px-[1vw] py-[1vh] border-b text-left w-[15%]">Roll No</th>
    <th className="text-[1.4vw] px-[1vw] py-[1vh] border-b border-r text-left w-[30%]">Name</th>
    <th className="text-[1vw] px-[1vw] py-[1vh] border-b border-r w-[10%]">Assignment<br />(10%)</th>
    <th className="text-[1vw] px-[1vw] py-[1vh] border-b border-r w-[10%]">Quiz<br />(10%)</th>
    <th className="text-[1vw] px-[1vw] py-[1vh] border-b border-r w-[10%]">MidTerm<br />(30%)</th>
    <th className="text-[1vw] px-[1vw] py-[1vh] border-b border-r w-[10%]">Final<br />(50%)</th>
    <th className="text-[1vw] px-[1vw] py-[1vh] border-b w-[10%]">Total<br />(100%)</th>
  </tr>
</thead>
    <tbody>
      {ReportData.map((row, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
          <td className="px-[1vw] py-[1vh] border-b w-[5%]">{row.Sr}</td>
          <td className="px-[1vw] py-[1vh] border-b text-left w-[15%]">{row['Roll No']}</td>
          <td className="px-[1vw] py-[1vh] border-b text-left w-[30%]">{row.Name}</td>
          <td className="px-[1vw] py-[1vh] border-b border-r w-[10%]">{row.Assignment}</td>
          <td className="px-[1vw] py-[1vh] border-b border-r w-[10%]">{row.Quiz}</td>
          <td className="px-[1vw] py-[1vh] border-b border-r w-[10%]">{row.MidTerm}</td>
          <td className="px-[1vw] py-[1vh] border-b border-r w-[10%]">{row.Final}</td>
          <td className="px-[1vw] py-[1vh] border-b w-[10%]">{row.Total}</td>
        </tr>
      ))}
    </tbody>
      </table>
    </div>
    
      </div>
</div>
  )
}

export default ReportsActivity