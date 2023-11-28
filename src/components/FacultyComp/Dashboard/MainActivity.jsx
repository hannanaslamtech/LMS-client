import React, { useState } from 'react';

const timetableData = [
    {
        "id": 1,
        "className": "BSCS-4-B",
        "course": "Introduction to Computer",
        "credits": 3,
        "students": 30,
        "lecture": "15/42",
        "assignment": "2/5",
        "quiz": "1/5",
        "exam": "0/1"
    },
    {
        "id": 2,
        "className": "BSCS-4-B",
        "course": "Data Structures",
        "credits": 4,
        "students": 25,
        "lecture": "20/42",
        "assignment": "3/5",
        "quiz": "2/5",
        "exam": "1/1"
    },
    {
        "id": 3,
        "className": "BSCS-4-B",
        "course": "Web Development",
        "credits": 3,
        "students": 28,
        "lecture": "18/42",
        "assignment": "4/5",
        "quiz": "3/5",
        "exam": "1/1"
    },
    {
        "id": 4,
        "className": "BSCS-4-B",
        "course": "Database Management",
        "credits": 3,
        "students": 32,
        "lecture": "16/42",
        "assignment": "2/5",
        "quiz": "2/5",
        "exam": "1/1"
    },
    // Add more dummy data as needed
];


const PeriodData = [
    {
        "id": 2,
        "mon": "",
        "tue": "2,3",
        "wed": "",
        "thu": "7,8",
        "fri": "1,2",
        "sat": "",
    },
    {
        "id": 3,
        "mon": "6,7",
        "tue": "1,2",
        "wed": "",
        "thu": "5,6",
        "fri": "",
        "sat": "",
    },
    {
        "id": 4,
        "mon": "",
        "tue": "",
        "wed": "2,4",
        "thu": "",
        "fri": "",
        "sat": "",
    },
    {
        "id": 5,
        "mon": "",
        "tue": "2,3",
        "wed": "",
        "thu": "7,8",
        "fri": "",
        "sat": "3,4",
    },
    // Add more dummy data as needed
];


const MainActivity = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');

    // Dummy data for Academic Years and Semesters
    const academicYears = ['2022-2023', '2023-2024', '2024-2025']; // Add more years as needed
    const semesters = ['Spring', 'Summer', 'Fall']; // Add more semesters as needed

    // Event handler for Academic Year selection
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    // Event handler for Semester selection
    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    };

    return (
        <div className='w-full h-full bg-yellow-100 rounded-[1vw] shadow-lg shadow-blue-700'>

            <div className='w-full h-full bg-yellow-100 rounded-[1vw] shadow-lg shadow-blue-700'>
                <div className='w-full h-full bg-gray-100 shadow-md shadow-blue-500 rounded-[1vw]'>
                    {/* Table Header */}
                    <div className='w-full h-[5vh] flex bg-blue-100 rounded-t-xl'>
                        <div className='w-[65%] h-full bg-blue-500 text-white flex justify-center items-center gap-x-[1vw] rounded-r-md rounded-tl-xl'>
                            <div className='w-[50%] h-full flex justify-center items-start gap-x-[1vw] px-[0.5vw]'>
                                <select
                                    id='select-academic-year'
                                    className='p-[0.5vw] border border-blue-800 rounded-md w-1/2 h-full bg-transparent focus:outline-none hover:cursor-pointer focus:border-blue-300 text-center transition-all duration-300'
                                    value={selectedYear}
                                    onChange={handleYearChange}
                                >
                                    <option value='' disabled>Select Academic Year</option>
                                    {academicYears.map((year) => (
                                        <option className="text-black" key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    id='select-semester'
                                    className='p-[0.5vw] border border-blue-800 rounded-md w-1/2 h-full bg-transparent focus:outline-none hover:cursor-pointer focus:border-blue-300 text-center transition-all duration-300'
                                    value={selectedSemester}
                                    onChange={handleSemesterChange}
                                >
                                    <option value='' disabled>Select Semester</option>
                                    {semesters.map((semester) => (
                                        <option className="text-black" key={semester} value={semester}>
                                            {semester}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='h-[70%] border-l bg-blue-100'></div>
                            <div className='w-[50%] h-full bg-blue-500 text-white flex justify-center items-center rounded-r-md rounded-lr-xl'>
                                <p className='text-[1.2vw] tracking-wider font-semibold'>Completed & Planned Activity</p>
                            </div>
                        </div>
                        <div className='w-[35%] h-full bg-blue-500 text-white flex justify-center items-center rounded-l-md rounded-tr-xl'>
                            <p className='text-[1.2vw] tracking-wider font-semibold'>Weekly Class Schedule (Period)</p>
                        </div>
                    </div>
                    {/* Table Body */}
                    <div className='w-full h-[25vh] flex overflow-x-auto style-scrollbar rounded-[1vw]'>
                        <div className="w-[65%] rounded-b-xl">
                            <table className="min-w-full bg-white border table-fixed">
                                <thead>
                                    <tr>
                                        <th className="sticky top-0 bg-blue-100 rounded-r-md px-[0.5vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0">
                                            Class
                                        </th>
                                        <th className="sticky top-0 bg-gray-200 rounded-r-md px-[0.5vw] py-[1vh] text-[1vw] w-[25%] flex-shrink-0 text-left">
                                            Course
                                        </th>
                                        <th className="sticky top-0 bg-blue-100 px-[0.5vw] py-[1vh] text-[1vw] w-[15%] flex-shrink-0">
                                            Credits Hour
                                        </th>
                                        <th className="sticky top-0 bg-gray-200 px-[0.5vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0">
                                            Students
                                        </th>
                                        <th className="sticky top-0 bg-blue-100 px-[0.5vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0">
                                            Lecture
                                        </th>
                                        <th className="sticky top-0 bg-gray-200 px-[0.5vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0">
                                            Assignment
                                        </th>
                                        <th className="sticky top-0 bg-blue-100 px-[0.5vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0">
                                            Quiz
                                        </th>
                                        <th className="sticky top-0 bg-gray-200 px-[0.5vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0">
                                            Final
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {timetableData.map((item) => (
                                        <tr className='divide-y divide-gray-200' key={item.id}>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0">{item.className}</td>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-left">{item.course}</td>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0">{item.credits}</td>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0">{item.students}</td>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0">{item.lecture}</td>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0">{item.assignment}</td>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0">{item.quiz}</td>
                                            <td className="px-[0.5vw] py-[1vh] text-[0.8vw] flex-shrink-0">{item.exam}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-[35%] rounded-b-xl">
                            <table className="min-w-full bg-white border table-fixed">
                                <thead>
                                    <tr>
                                        <th className="sticky top-0 bg-blue-100 px-[0.5vw] py-[1vh] text-[1vw] w-[16.67%] flex-shrink-0">
                                            Mon
                                        </th>
                                        <th className="sticky top-0 bg-gray-200 px-[0.5vw] py-[1vh] text-[1vw] w-[16.67%] flex-shrink-0">
                                            Tue
                                        </th>
                                        <th className="sticky top-0 bg-blue-100 px-[0.5vw] py-[1vh] text-[1vw] w-[16.67%] flex-shrink-0">
                                            Wed
                                        </th>
                                        <th className="sticky top-0 bg-gray-200 px-[0.5vw] py-[1vh] text-[1vw] w-[16.67%] flex-shrink-0">
                                            Thu
                                        </th>
                                        <th className="sticky top-0 bg-blue-100 px-[0.5vw] py-[1vh] text-[1vw] w-[16.67%] flex-shrink-0">
                                            Fri
                                        </th>
                                        <th className="sticky top-0 bg-gray-200 px-[0.5vw] py-[1vh] text-[1vw] w-[16.67%] flex-shrink-0">
                                            Sat
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PeriodData.map((item) => (
                                        <tr className='divide-y divide-gray-200' key={item.id}>
                                            <td className={`px-[0.5vw] py-[1vh] text-[0.8vw] rounded-[0.5vw] flex-shrink-0 ${item.mon ? 'bg-blue-300' : 'bg-gray-100'}`}>
                                                {item.mon}
                                            </td>
                                            <td className={`px-[0.5vw] py-[1vh] text-[0.8vw] rounded-[0.5vw]  flex-shrink-0 ${item.tue ? 'bg-blue-300' : 'bg-gray-100'}`}>
                                                {item.tue}
                                            </td>
                                            <td className={`px-[0.5vw] py-[1vh] text-[0.8vw] rounded-[0.5vw]  flex-shrink-0 ${item.wed ? 'bg-blue-300' : 'bg-gray-100'}`}>
                                                {item.wed}
                                            </td>
                                            <td className={`px-[0.5vw] py-[1vh] text-[0.8vw]  rounded-[0.5vw] flex-shrink-0 ${item.thu ? 'bg-blue-300' : 'bg-gray-100'}`}>
                                                {item.thu}
                                            </td>
                                            <td className={`px-[0.5vw] py-[1vh] text-[0.8vw] rounded-[0.5vw]  flex-shrink-0 ${item.fri ? 'bg-blue-300' : 'bg-gray-100'}`}>
                                                {item.fri}
                                            </td>
                                            <td className={`px-[0.5vw] py-[1vh] text-[0.8vw] rounded-[0.5vw]  flex-shrink-0 ${item.sat ? 'bg-blue-300' : 'bg-gray-100'}`}>
                                                {item.sat}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainActivity