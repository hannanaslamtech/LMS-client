import React, { useState } from 'react'

const GradesReport = ({ AssignmentModalHandler, QuizModalHandler,MidTermModalHandler,FinalModalHandler,AttendanceModalHandler,ClassesModalHandler}) => {
  const data = [
    {
      id: 1,
      Classes: '3',
      Courses: '(NA0123) Numerical Analysis (A)',
      Attendance: '70%',
      Assignment: '10',
      Quiz: '2',
      MidTerm: '25',
      FinalExam: '98',
    },
    {
      id: 2,
      Classes: '2',
      Courses: '(CP123) Computer programming (B)',
      Attendance: '92%',
      Assignment: '8',
      Quiz: '7',
      MidTerm: '22.5',
      FinalExam: '83',
    },
    {
      id: 3,
      Classes: '3',
      Courses: '(DP210) Digital Processing (B)',
      Attendance: '100%',
      Assignment: '9.5',
      Quiz: '10',
      MidTerm: '17',
      FinalExam: '76',
    },
    {
      id: 4,
      Classes: '1',
      Courses: '(NA0123) Numerical Analysis (C)',
      Attendance: '97%',
      Assignment: '10',
      Quiz: '7',
      MidTerm: '12',
      FinalExam: '66.5',
    },
    {
      id: 5,
      Classes: '4',
      Courses: '(NA0123) Numerical Analysis (C)',
      Attendance: '82%',
      Assignment: '5',
      Quiz: '7',
      MidTerm: '23',
      FinalExam: '76',
    },
    {
      id: 6,
      Classes: '3',
      Courses: '(NA0123) Numerical Analysis (C)',
      Attendance: '85%',
      Assignment: '8',
      Quiz: '6',
      MidTerm: '20',
      FinalExam: '98',
    },
  ];

  const TableInfo =
    [
      {
        id: 1,
        Semester: 'Semester 1',
      },
      {
        id: 2,
        Semester: 'Semester 2',
      },
      {
        id: 3,
        Semester: 'Semester 3',
      },
      {
        id: 4,
        Semester: 'Semester 4',
      },
      {
        id: 5,
        Semester: 'Semester 5',
      },
      {
        id: 6,
        Semester: 'Semester 6',
      },
      {
        id: 7,
        Semester: 'Semester 7',
      },
      {
        id: 8,
        Semester: 'Semester 8',
      },
    ]

  const Semesters = [
    'Semester 1',
    'Semester 2',
    'Semester 3',
    'Semester 4',
    'Semester 5',
    'Semester 6',
    'Semester 7',
    'Semester 8',
  ];

  const [semester, setSemester] = useState(Semesters[0]);

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  return (
    <div className='w-full h-[35vh]'>
      <div className='w-full h-full bg-gray-100 shadow-md shadow-blue-500 rounded-xl'>
        {/* Students Program and headline */}
        <div className='w-full h-[5vh] flex bg-blue-200 rounded-t-xl'>
          <div className='w-[30%] h-full bg-blue-700 text-white flex justify-center items-center gap-x-[1vw] rounded-r-md rounded-tl-xl'>
            <p className='text-[1vw] font-semibold'>BSCS - (B)</p>
            <div className='h-[70%] border-l bg-blue-100'></div>
            <p className='text-[1vw] tracking-wider font-semibold'>Fall-19</p>
          </div>
          <div className='w-[70%] h-full text-white flex justify-center items-center'>
            <p className='text-[1.2vw] text-black tracking-wider font-bold'>Attendance and Grade Report</p>
          </div>
        </div>
        {/* Button of Select Semester and Table*/}
        <div className='w-full h-[28vh] flex'>

          <div className="w-full overflow-x-auto rounded-b-xl style-scrollbar">
            <table className="min-w-full bg-white border table-fixed">
              <thead>
                <tr>
                  <th className="sticky top-0 bg-blue-200 rounded-r-md  px-[1vw] py-[2.5vh] text-[1vw] w-[30%] flex-shrink-0">
                    <select
                      id="select-cource"
                      className="absolute inset-0 p-[0.5vw] border border-gray-300 rounded-md w-full h-full bg-transparent focus:outline-none hover:cursor-pointer focus:border-blue-900 text-center transition-all duration-300"
                      value={semester}
                      onChange={handleSemesterChange}
                    >
                      {Semesters.map((semesterOption) => (
                        <option key={semesterOption} value={semesterOption}>
                          {semesterOption} Courses
                        </option>
                      ))}
                    </select>
                  </th>

                  <th className="sticky top-0 bg-gray-200 px-[1vw] py-[0vh] text-[1vw]">Time Table</th>
                  <th className="sticky top-0 bg-gray-200 px-[1vw] py-[0vh] text-[1vw]">Attendance</th>
                  <th className="sticky top-0 bg-gray-200 px-[1vw] py-[0vh] text-[1vw]">Assignment</th>
                  <th className="sticky top-0 bg-gray-200 px-[1vw] py-[0vh] text-[1vw]">Quiz</th>
                  <th className="sticky top-0 bg-gray-200 px-[1vw] py-[0vh] text-[1vw]">Mid Term</th>
                  <th className="sticky top-0 bg-gray-200 px-[1vw] py-[0vh] text-[1vw]">Exam</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className='divide-y divide-gray-200' key={item.id}>
                    <td className="px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate
                    text-left">{item.Courses}</td>
                    <td className="px-[1vw] py-[1vh] text-[0.8vw]
                     hover:text-blue-500 hover:underline hover:cursor-pointer"
                     onClick={() => ClassesModalHandler(item.Courses)}>{item.Classes}</td>
                    <td className="px-[1vw] py-[1vh] text-[0.8vw]
                    hover:text-blue-500 hover:underline hover:cursor-pointer"
                    onClick={() => AttendanceModalHandler(item.Courses)}>{item.Attendance}</td>
                    <td className="px-[1vw] py-[1vh] text-[0.8vw]
                   hover:text-blue-500 hover:underline hover:cursor-pointer"
                      onClick={() => AssignmentModalHandler(item.Courses)}>{item.Assignment}</td>
                    <td className="px-[1vw] py-[1vh] text-[0.8vw]
                     hover:text-blue-500 hover:underline hover:cursor-pointer"
                     onClick={() => QuizModalHandler(item.Courses)}>{item.Quiz}</td>
                    <td className="px-[1vw] py-[1vh] text-[0.8vw]
                    hover:text-blue-500 hover:underline hover:cursor-pointer"
                    onClick={() => MidTermModalHandler(item.Courses)}>{item.MidTerm}</td>
                    <td className="px-[1vw] py-[1vh] text-[0.8vw]
                    hover:text-blue-500 hover:underline hover:cursor-pointer"
                    onClick={() => FinalModalHandler(item.Courses)}>{item.FinalExam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </div>
  )
}

export default GradesReport