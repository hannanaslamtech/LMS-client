import React from 'react';

const HandsonVideos = ({selectedCourse}) => {
  const Videos = [
    { videoTitle: "Understanding Data Structures and Algorithms", program: "Introduction to Computer" },
    { videoTitle: "Building Your First Website: Web Development Fundamentals", program: "Introduction to Computer" },
    { videoTitle: "Principles of Network Security", program: "Information Security" },
    { videoTitle: "Exploring Cryptography and Network Defense", program: "Introduction to Computer" },
    { videoTitle: "Fundamentals of Cybersecurity", program: "Introduction to Computer" },
    { videoTitle: "Mastering Ethical Hacking and Penetration Testing", program: "Object Oriented Programming" },
  ];

  const filteredVideos = selectedCourse === "All courses" ? Videos : Videos.filter(Video => Video.program === selectedCourse);

  return (
    <div className='w-full h-[14vh] bg-gray-100 text-black rounded-lg border border-gray-500'>
      <div className="h-[5vh] flex items-center justify-between py-[1vh] px-[1vw]">
        <h5 className="text-[1vw] font-bold leading-none text-gray-900 dark:text-white">Videos & Presentations</h5>
        <button onClick={() => {}} className='text-[1vw] h-[2vw] w-[2vw] bg-blue-900 flex justify-center items-center rounded-[0.5vw] text-white font-semibold hover:bg-blue-300 hover:text-black duration-300'>
          {filteredVideos.length}
        </button>
      </div>
      <div className="h-[9vh] pb-[1vh]">
        <ul className="h-full divide-y divide-gray-200 flex flex-col gap-y-[0.5vh] overflow-auto style-scrollbar">
          {filteredVideos.map((item, index) => (
            <li key={index} className="flex gap-x-[0.5vw] px-[1vw]">
              <p className='text-[0.8vw]'>{index + 1})</p>
              <p className='text-[0.8vw] truncate cursor-pointer hover:text-blue-600 hover:underline'>{item.videoTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HandsonVideos;
