import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint, faCaretDown } from "@fortawesome/free-solid-svg-icons";


const AllSemResultVal = [
  {
    "SemesterNo": "Semester 1",
    "SemesterDetail": [
      {
        "Course": "Mathematics",
        "Attendence": "90%",
        "Assignment": "85%",
        "Quiz": "78%",
        "Exams": "92%",
        "FinalResult": "88%"
      },
      {
        "Course": "Physics",
        "Attendence": "92%",
        "Assignment": "88%",
        "Quiz": "75%",
        "Exams": "90%",
        "FinalResult": "86%"
      },
      {
        "Course": "Computer Science",
        "Attendence": "85%",
        "Assignment": "90%",
        "Quiz": "82%",
        "Exams": "88%",
        "FinalResult": "87%"
      }
      // Add more courses as needed
    ]
  },
  {
    "SemesterNo": "Semester 2",
    "SemesterDetail": [
      {
        "Course": "Chemistry",
        "Attendence": "85%",
        "Assignment": "80%",
        "Quiz": "92%",
        "Exams": "88%",
        "FinalResult": "86%"
      },
      {
        "Course": "Biology",
        "Attendence": "88%",
        "Assignment": "92%",
        "Quiz": "85%",
        "Exams": "90%",
        "FinalResult": "89%"
      },
      {
        "Course": "History",
        "Attendence": "80%",
        "Assignment": "78%",
        "Quiz": "85%",
        "Exams": "92%",
        "FinalResult": "84%"
      }
      // Add more courses as needed
    ]
  },
  {
    "SemesterNo": "Semester 3",
    "SemesterDetail": [
      {
        "Course": "Economics",
        "Attendence": "85%",
        "Assignment": "80%",
        "Quiz": "92%",
        "Exams": "88%",
        "FinalResult": "86%"
      },
      {
        "Course": "Literature",
        "Attendence": "88%",
        "Assignment": "92%",
        "Quiz": "85%",
        "Exams": "90%",
        "FinalResult": "89%"
      },
      {
        "Course": "Geography",
        "Attendence": "90%",
        "Assignment": "85%",
        "Quiz": "78%",
        "Exams": "92%",
        "FinalResult": "88%"
      }
      // Add more courses as needed
    ]
  }
  // Add more semesters as needed
];

const AllSemModal = ({ openAllSemModal, AllSemModalHandler }) => {
  const [maxScreen, setMaxScreen] = useState(false);
  const [semesterVisibility, setSemesterVisibility] = useState(Array(AllSemResultVal.length).fill(false));

  const maxScreenHandler = () => {
    setMaxScreen(!maxScreen);
  }

  const toggleTableVisibility = (index) => {
    const updatedVisibility = [...semesterVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setSemesterVisibility(updatedVisibility);
  };

  const calculateAverage = (data, property) => {
    const total = data.reduce((sum, item) => sum + parseFloat(item[property]), 0);
    return (total / data.length).toFixed(0) + "%";
  };

  const allFinalResults = AllSemResultVal.flatMap(semester => semester.SemesterDetail.map(course => parseFloat(course.FinalResult)));
  const overallAverage = (allFinalResults.reduce((sum, result) => sum + result, 0) / allFinalResults.length).toFixed(0) + "%";

  return (
    <div
      className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
          ${openAllSemModal ? "scale-100 duration-300" : "scale-0 -z-10"}
          ${maxScreen ? "w-[100%] h-[100%] top-0 left-0 m-0 translate-0 translate-x-0 translate-y-0 drag" : "w-[70vw] h-[80vh] rounded-t-[1vw] top-[10vh] left-[15vw]"}
        `}
    >
      <header
        className={`w-full flex justify-between items-center px-[2vw] py-[1vw] text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300
            ${maxScreen ? "h-[15%]" : "h-[20%] rounded-t-[1vw]"}
          `}
      >
        <div>
          <h1 className="text-[2vw] font-semibold">Details Result of All previous Semesters</h1>
        </div>
        <div className="flex gap-x-[1vw]">
          <button className='w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300'>
            <FontAwesomeIcon className='w-full h-full' icon={faPrint} style={{ color: "#ffffff", }} />
          </button>
          <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={maxScreenHandler}>
            {maxScreen ? <FontAwesomeIcon className="w-full h-full" icon={faCompress} /> : <FontAwesomeIcon className="w-full h-full" icon={faExpand} />}
          </button>
          {/* Provide the implementation for AddProjectHandler */}
          <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => AllSemModalHandler("No Data")}>
            <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
          </button>
        </div>
      </header>
      <div className={`w-full flex flex-col ${maxScreen ? "h-[75%]" : "h-[70%] rounded-t-[1vw]"}`}>
        <div className='w-full h-full p-[1vw] flex flex-col gap-y-[2vh] dividey divide-gray-400 overflow-auto style-scrollbar'>
          {AllSemResultVal.map((semester, index) => (
            <div key={index} className='w-full h-auto bg-blue-300 rounded-[0.5vw] px-[1vw] flex flex-col gap-y-[0vh]'>

              <div
                className='h-[5vh] w-full px-[2vw] py-[1vh] rounded-[0.5vw] flex justify-between cursor-pointer'
                onClick={() => toggleTableVisibility(index)}
              >
                <div className='flex gap-x-[1vw] justify-center items-center'>
                  <p className='text-[1.2vw] font-semibold text-black'>{semester.SemesterNo}</p>
                  <p className='text-black text-[1vw]'>Total aggregate: <span className='font-semibold'> {calculateAverage(semester.SemesterDetail, 'FinalResult')}</span></p>
                </div>
                <div className='flex gap-x-[0.2vw] h-full justify-center items-center'>
                  <p className='text-[1vw]'>Details</p>
                  <FontAwesomeIcon className={`w-[1.2vw] h-[1.2vw] duration-100 ${semesterVisibility[index] ? "rotate-180":"rotate-0"}`} icon={faCaretDown} style={{ color: '#000' }} />
                </div>
              </div>
              <div className={`h-${semesterVisibility[index] ? 'full' : '0'} w-full px-[2vw] py-[1vh] rounded-[0.5vw] `}>
                {semesterVisibility[index] ? (
                  <table className="min-w-full min-h-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b">Course</th>
                        <th className="px-4 py-2 border-b">Attendance</th>
                        <th className="px-4 py-2 border-b">Assignment</th>
                        <th className="px-4 py-2 border-b">Quiz</th>
                        <th className="px-4 py-2 border-b">Exams</th>
                        <th className="px-4 py-2 border-b">Final Result (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.SemesterDetail.map((course, index) => (
                        <tr key={index} className="bg-gray-100">
                          <td className="px-4 py-2 border-b text-start">{course.Course}</td>
                          <td className="px-4 py-2 text-center border-b">{course.Attendence}</td>
                          <td className="px-4 py-2 text-center border-b">{course.Assignment}</td>
                          <td className="px-4 py-2 text-center border-b">{course.Quiz}</td>
                          <td className="px-4 py-2 text-center border-b">{course.Exams}</td>
                          <td className="px-4 py-2 text-center border-b">{course.FinalResult}</td>
                        </tr>
                      ))}

                      {/* Calculate totals */}
                      {semester.SemesterDetail.length > 0 && (
                        <tr className="text-white bg-blue-950">
                          <td className="px-4 py-2 border-b">Total</td>
                          <td className="px-4 py-2 border-b">
                            {calculateAverage(semester.SemesterDetail, 'Attendence')}
                          </td>
                          <td className="px-4 py-2 border-b">
                            {calculateAverage(semester.SemesterDetail, 'Assignment')}
                          </td>
                          <td className="px-4 py-2 border-b">
                            {calculateAverage(semester.SemesterDetail, 'Quiz')}
                          </td>
                          <td className="px-4 py-2 border-b">
                            {calculateAverage(semester.SemesterDetail, 'Exams')}
                          </td>
                          <td className="px-4 py-2 border-b">
                            {calculateAverage(semester.SemesterDetail, 'FinalResult')}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full flex h-[10%] rounded-b-[0.5vw] justify-start items-center px-[2vw] py-[1vw] text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300
          `}>
        <p className='text-[1.2vw] text-white tracking-wider'>Final Aggregate: <span className='font-semibold'>{overallAverage}</span></p>
      </div>

    </div>
  );
}

export default AllSemModal;