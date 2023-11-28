import React from 'react';

const Audios = ({selectedCourse}) => {
  const AudioCourses = [
    { audioTitle: "Algorithms Unplugged: Exploring Data Structures and Algorithms through Audio", program: "Introduction to Computer" },
    { audioTitle: "Web Harmony: Fundamentals of Web Development in Audio", program: "Introduction to Computer" },
    { audioTitle: "Secure Soundwaves: Network Security Principles in Audio", program: "Information Security" },
    { audioTitle: "Cryptic Audio Defense: Exploring Cryptography and Network Defense", program: "Information Security" },
    { audioTitle: "Cyber Grooves: Fundamentals of Cybersecurity in Audio", program: "Object Oriented Programming" },
    { audioTitle: "Hacker's Playlist: Ethical Hacking and Penetration Testing in Audio", program: "Information Security" },
  ];

  const filteredAudios = selectedCourse === "All courses" ? AudioCourses : AudioCourses.filter(Audio => Audio.program === selectedCourse);

  return (
    <div className='w-full h-[14vh] bg-gray-100 text-black rounded-lg border border-gray-500'>
      <div className="h-[5vh] flex items-center justify-between py-[1vh] px-[1vw]">
        <h5 className="text-[1vw] font-bold leading-none text-gray-900 dark:text-white">MP3 Audios</h5>
        <button onClick={() => {}} className='text-[1vw] h-[2vw] w-[2vw] bg-blue-900 flex justify-center items-center rounded-[0.5vw] text-white font-semibold hover:bg-blue-300 hover:text-black duration-300'>
          {filteredAudios.length}
        </button>
      </div>
      <div className="h-[9vh] pb-[1vh]">
        <ul className="h-full divide-y divide-gray-200 flex flex-col gap-y-[0.5vh] overflow-auto style-scrollbar">
          {filteredAudios.map((item, index) => (
            <li key={index} className="flex gap-x-[0.5vw] px-[1vw]">
              <p className='text-[0.8vw]'>{index + 1})</p>
              <p className='text-[0.8vw] truncate cursor-pointer hover:text-blue-600 hover:underline'>{item.audioTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Audios;
