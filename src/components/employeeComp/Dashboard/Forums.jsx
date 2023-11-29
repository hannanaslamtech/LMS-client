import React from 'react';

const conversationsData = {
  "Admin": [
    { "type": "admin", "content": "Hello!", "timestamp": "10:30 AM" },
    { "type": "user", "content": "Hi there!", "timestamp": "10:35 AM" },
    { "type": "admin", "content": "How can I help you?", "timestamp": "11:00 AM" },
    { "type": "user", "content": "I have a question.", "timestamp": "11:15 AM" },
    { "type": "admin", "content": "Sure, go ahead and ask.", "timestamp": "11:20 AM" },
    // Add more messages as needed
  ],
  "Prof Ahmed": [
    { "type": "profAhmed", "content": "Good morning!", "timestamp": "9:00 AM" },
    { "type": "user", "content": "Good morning, Prof. Ahmed!", "timestamp": "9:05 AM" },
    { "type": "profAhmed", "content": "How can I assist you today?", "timestamp": "9:15 AM" },
    // Add more messages as needed
  ],
  "Prof Taylor": [
    { "type": "profTaylor", "content": "Hello class!", "timestamp": "2:00 PM" },
    { "type": "user", "content": "Hi Prof. Taylor!", "timestamp": "2:05 PM" },
    { "type": "profTaylor", "content": "We have an upcoming quiz.", "timestamp": "2:10 PM" },
    // Add more messages as needed
  ],
  "Lab Attendant Ayesha": [
    { "type": "labAttendantAyesha", "content": "Good afternoon!", "timestamp": "12:30 PM" },
    { "type": "user", "content": "Good afternoon! Is the lab open?", "timestamp": "12:35 PM" },
    { "type": "labAttendantAyesha", "content": "Yes, the lab is open until 5 PM today. How can I assist you today?", "timestamp": "12:40 PM" },
    // Add more messages as needed
  ]
};

const Forums = ({ FeedbackModalHandler }) => {
  // Extract conversation names
  const conversationNames = Object.keys(conversationsData);

  const truncateContent = (content, maxWords) => {
    const words = content.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return content;
  };

  // Extract all messages
  const allMessages = Object.values(conversationsData).flat();

  // Get the most recent message
  const mostRecentMessage = allMessages[allMessages.length - 1];

  // Get the conversation name of the most recent message
  const conversationNameIndex = Object.keys(conversationsData).find(
    (name) => conversationsData[name].includes(mostRecentMessage)
  );
  return (
    <div className='w-[60%] h-full'>
    <div className='w-full h-full bg-gray-100 shadow-md shadow-blue-500 rounded-xl'>
      <div
        className='w-full h-[5vh] bg-blue-200 text-white flex justify-center items-center rounded-t-xl hover:cursor-pointer hover:text-blue-600 hover:underline'
        onClick={() => FeedbackModalHandler()}
      >
        <p className='text-[1vw] text-black tracking-wider font-semibold hover:text-blue-600 hover:underline'>Student-University Communication</p>
      </div>
      <div className='w-full h-[15vh] px-[1vw] flex justify-between items-center'>
        <div className='w-[70%] h-full flex flex-col justify-center items-start'>
          <div className={`rounded-lg p-[1vw]  ${mostRecentMessage.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
            <p>{truncateContent(mostRecentMessage.content, 12)}</p>
          </div>
          <div className={`text-[0.8vw] text-gray-500 ${mostRecentMessage.type === 'user' ? 'text-right' : 'text-left'}`}>
            {mostRecentMessage.timestamp}
          </div>
        </div>
        <div className='w-[30%] h-auto flex flex-col justify-center items-end p-[1vw] bg-blue-200 rounded-[0.5vw]'>
        <p className='text-[1vw] text-center font-semibold'>Recipient</p>
          <p className='text-[1vw] '>{conversationNameIndex}</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default Forums;
