import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const AllCategoriesData = {
  "MP3 Audios": [
    { title: "Algorithms Unplugged: Exploring Data Structures and Algorithms through Audio", program: "Introduction to Computer", documentType: 'PDF', size: '20MB', attachment: "download", status: true },
    { title: "Web Harmony: Fundamentals of Web Development in Audio", program: "Introduction to Computer", documentType: 'PDF', size: '200MB', attachment: "download", status: true },
    { title: "Secure Soundwaves: Network Security Principles in Audio", program: "Information Security", documentType: 'PDF', size: '20MB', attachment: "download", status: true },
    { title: "Cryptic Audio Defense: Exploring Cryptography and Network Defense", program: "Information Security", documentType: 'PDF', size: '20MB', attachment: "download", status: true },
    { title: "Cyber Grooves: Fundamentals of Cybersecurity in Audio", program: "Object Oriented Programming", documentType: 'PDF', size: '20MB', attachment: "download", status: true },
    { title: "Hacker's Playlist: Ethical Hacking and Penetration Testing in Audio", program: "Information Security", documentType: 'PDF', size: '20MB', attachment: "download", status: true },
  ],
  "E-books": [
    { title: "Data Structures and Algorithms", program: "Introduction to Computer", documentType: "PDF", size: "15MB", attachment: "download", status: true },
    { title: "Web Development Fundamentals", program: "Introduction to Computer", documentType: "HTML", size: "10MB", attachment: "download", status: false },
    { title: "Network Security Principles", program: "Information Security", documentType: "PDF", size: "18MB", attachment: "download", status: true },
    { title: "Cryptography and Network Defense", program: "Information Security", documentType: "PDF", size: "20MB", attachment: "download", status: false },
    { title: "Cybersecurity Fundamentals", program: "Object Oriented Programming", documentType: "HTML", size: "12MB", attachment: "download", status: true },
    { title: "Ethical Hacking and Penetration Testing", program: "Object Oriented Programming", documentType: "PDF", size: "25MB", attachment: "download", status: false }
  ],
  "Videos & presentations": [
    { title: "Understanding Data Structures and Algorithms", program: "Introduction to Computer", documentType: "MP4", size: "30MB", attachment: "download", status: true },
    { title: "Building Your First Website: Web Development Fundamentals", program: "Introduction to Computer", documentType: "MP4", size: "25MB", attachment: "download", status: false },
    { title: "Principles of Network Security", program: "Information Security", documentType: "AVI", size: "22MB", attachment: "download", status: true },
    { title: "Exploring Cryptography and Network Defense", program: "Information Security", documentType: "MP4", size: "28MB", attachment: "download", status: false },
    { title: "Fundamentals of Cybersecurity", program: "Object Oriented Programming", documentType: "AVI", size: "20MB", attachment: "download", status: true },
    { title: "Mastering Ethical Hacking and Penetration Testing", program: "Object Oriented Programming", documentType: "MP4", size: "35MB", attachment: "download", status: false }
  ],
  "Lectures & Notes": [
    { title: "Algorithms Unveiled: Data Structures and Algorithms Lecture", program: "Introduction to Computer", documentType: "PDF", size: "18MB", attachment: "download", status: true },
    { title: "Building the Web: Web Development Fundamentals Lecture", program: "Introduction to Computer", documentType: "HTML", size: "12MB", attachment: "download", status: false },
    { title: "Securing Networks: Network Security Principles Lecture", program: "Information Security", documentType: "PDF", size: "20MB", attachment: "download", status: true },
    { title: "Cryptographic Insights: Cryptography and Network Defense Lecture", program: "Information Security", documentType: "PDF", size: "22MB", attachment: "download", status: false },
    { title: "Cybersecurity Essentials: Fundamentals Lecture", program: "Object Oriented Programming", documentType: "HTML", size: "15MB", attachment: "download", status: true }
  ],
  "PDF files": [
    { title: "Advanced Algorithms in Data Structures and Algorithms", program: "Introduction to Computer", documentType: "PDF", size: "25MB", attachment: "download", status: true },
    { title: "Web Development Trends: Fundamentals and Innovations", program: "Object Oriented Programming", documentType: "HTML", size: "15MB", attachment: "download", status: false },
    { title: "Cutting-edge Advances in Network Security Principles", program: "Information Security", documentType: "PDF", size: "30MB", attachment: "download", status: true },
    { title: "Cryptographic Protocols: Current State and Future Trends", program: "Information Security", documentType: "PDF", size: "28MB", attachment: "download", status: false },
    { title: "Emerging Trends in Cybersecurity Fundamentals", program: "Information Security", documentType: "HTML", size: "20MB", attachment: "download", status: true },
    { title: "Ethics in Hacking: Research Perspectives and Penetration Testing", program: "Object Oriented Programming", documentType: "PDF", size: "35MB", attachment: "download", status: false }
  ]
};


const LEarningMaterialActivity = ({ handleActivityList, activity, LearningMaterialHandler }) => {
  // State variables to manage selected values
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Dummy data for options
  const classes = ['Class A', 'Class B', 'Class C'];
  const courses = ['Math', 'Science', 'History'];

  // Dummy data for categories
  const Categories = ['E-books', 'PDF files', 'Lectures & Notes', 'MP3 Audios', 'Videos & presentations', 'All'];
  const [selectedCategory, setSelectedCategory] = useState('E-books');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterDataByCategory = (selectedCategory) => {
    if (selectedCategory === 'All') {
      // If 'All' is selected, return all data
      return Object.values(AllCategoriesData).flat();
    } else {
      // If a specific category is selected, return data for that category
      return AllCategoriesData[selectedCategory] || [];
    }
  };

  const filteredData = filterDataByCategory(selectedCategory);

  return (
    <div className={`w-full bg-purple-200 text-white h-[5vh] rounded-[1vw] overflow-hidden
    ${activity === "LearningMaterial" ? "min-h-[50vh]" : "h-[5vh]"}
    `}>
      <div
        className={`w-full h-[5vh] bg-purple-700 flex gap-x-[0.4vw] px-[1vw] justify-start items-center cursor-pointer
        ${activity === "LearningMaterial" ? "rounded-t-[1vw] " : "rounded-[1vw] "}
        `}
        onClick={() => handleActivityList("LearningMaterial")}
      >
        <FontAwesomeIcon
          className={`w-[1.4vw] h-[1.4vw] duration-300 ${activity === "LearningMaterial" ? "rotate-180" : "rotate-0"}`}
          icon={faCaretDown}
          style={{ color: '#fff' }}
        />
        <p className='text-[1.2vw]'>Learning Material</p>
      </div>
      <div className='w-full h-[45vh]'>
        <div className='w-full h-[8vh] flex justify-center items-center gap-x-[1vw] py-[1vh] px-[1vw]'>
          {/* Select Class */}
          <select
            id="classSelect"
            className='w-[25%] h-full text-black text-center border border-purple-700 rounded-[1vw] focus:border-purple-700 focus:outline-none cursor-pointer'
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
            className='w-[25%] h-full text-black text-center border border-purple-700 rounded-[1vw] focus:border-purple-700 focus:outline-none cursor-pointer'
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
          {/* Add Learning Material */}
          <button className='w-[25%] h-full text-[1.2vw] text-center border border-purple-700 rounded-[1vw] focus:border-purple-700 focus:outline-none
          bg-white text-black hover:bg-purple-700 hover:text-white duration-300'
            onClick={() => LearningMaterialHandler()}>
            Add Document
          </button>
        </div>
        <div className='w-full h-[37vh] overflow-auto style-scrollbar'>
          <table className="h-full min-w-full text-black bg-white border table-fixed">
            <thead>
              <tr>
                <th className="sticky top-0 bg-blue-200 rounded-r-md px-[1vw] py-[1vh] text-[1vw] w-[5%] flex-shrink-0">
                  <span>SR</span>
                </th>
                <th className="sticky top-0 bg-blue-200 rounded-r-md px-[1vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0">
                  <select
                    id="select categories"
                    className="absolute inset-0 p-[0.5vw] border border-gray-300 rounded-md w-full h-full bg-transparent focus:outline-none hover:cursor-pointer focus:border-purple-900 text-center transition-all duration-300"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    {Categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </th>
                <th className="sticky top-0 bg-blue-200 px-[1vw] py-[1vh] text-[1vw] w-[40%] flex-shrink-0 text-left">
                  <span>Title/Description</span>
                </th>
                <th className="sticky top-0 bg-blue-200 px-[1vw] py-[1vh] text-[1vw] w-[10%] flex-shrink-0 text-left">
                  <span>Document Type</span>
                </th>
                <th className="sticky top-0 bg-blue-200 px-[1vw] py-[1vh] text-[1vw] w-[5%] flex-shrink-0 text-left">
                  <span>Size</span>
                </th>
                <th className="sticky top-0 bg-blue-200 px-[1vw] py-[1vh] text-[1vw] w-[5%] flex-shrink-0 text-center">
                  <span>Attachment</span>
                </th>
                <th className="sticky top-0 bg-blue-200 px-[1vw] py-[1vh] text-[1vw] w-[5%] flex-shrink-0 text-center">
                  <span>Status</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className={`divide-y divide-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}
                >
                  <td className="px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-center">{index + 1}</td>
                  <td className="px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-left">{selectedCategory}</td>
                  <td className="px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-left">{item.title || item.audioTitle}</td>
                  <td className="px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-left">{item.documentType}</td>
                  <td className="px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-left">{item.size}</td>
                  <td className="px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-center">{item.attachment}</td>
                  <td className={`px-[1vw] py-[1vh] text-[0.8vw] flex-shrink-0 truncate text-center ${item.status ? "text-green-800" : "text-red-800"}`}>
                    {item.status ? "Active" : "InActive"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LEarningMaterialActivity