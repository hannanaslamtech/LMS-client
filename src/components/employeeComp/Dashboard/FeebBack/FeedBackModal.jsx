import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";

const conversationsData = {
    "admin": [
        { "type": "admin", "content": "Hello!", "timestamp": "10:30 AM" },
        { "type": "user", "content": "Hi there!", "timestamp": "10:35 AM" },
        { "type": "admin", "content": "How can I help you?", "timestamp": "11:00 AM" },
        { "type": "user", "content": "I have a question.", "timestamp": "11:15 AM" },
        { "type": "admin", "content": "Sure, go ahead and ask.", "timestamp": "11:20 AM" },
        // Add more messages as needed
    ],
    "profAhmed": [
        { "type": "profAhmed", "content": "Good morning!", "timestamp": "9:00 AM" },
        { "type": "user", "content": "Good morning, Prof. Ahmed!", "timestamp": "9:05 AM" },
        { "type": "profAhmed", "content": "How can I assist you today?", "timestamp": "9:15 AM" },
        // Add more messages as needed
    ],
    "profTaylor": [
        { "type": "profTaylor", "content": "Hello class!", "timestamp": "2:00 PM" },
        { "type": "user", "content": "Hi Prof. Taylor!", "timestamp": "2:05 PM" },
        { "type": "profTaylor", "content": "We have an upcoming quiz.", "timestamp": "2:10 PM" },
        // Add more messages as needed
    ],
    "labAttendantAyesha": [
        { "type": "labAttendantAyesha", "content": "Good afternoon!", "timestamp": "12:30 PM" },
        { "type": "user", "content": "Good afternoon! Is the lab open?", "timestamp": "12:35 PM" },
        { "type": "labAttendantAyesha", "content": "Yes, the lab is open until 5 PM today.", "timestamp": "12:40 PM" },
        // Add more messages as needed
    ]
};


const FeedBackModal = ({ openFeedbackModal, FeedbackModalHandler }) => {
    const [maxScreen, setMaxScreen] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState('admin'); // Default recipient is 'admin'

    // Load conversation based on selected recipient
    const [messages, setMessages] = useState(conversationsData[selectedRecipient]);

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            const userMessage = {
                type: 'user',
                content: newMessage,
                timestamp: getCurrentTime(),
            };

            setMessages([...messages, userMessage]);
            setNewMessage('');
        }
    };

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes} ${ampm}`;
    };

    const maxScreenHandler = () => {
        setMaxScreen(!maxScreen);
    };

    const changeRecipient = (recipient) => {
        // Save current conversation before changing recipient
        conversationsData[selectedRecipient] = messages;

        // Load conversation for the selected recipient
        setSelectedRecipient(recipient);
        setMessages(conversationsData[recipient] || []);
    };

    return (
        <div className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
      ${openFeedbackModal ? "scale-100 duration-300" : "scale-0 -z-10"}
      ${maxScreen ? "w-full h-full top-0 left-0 m-0 translate-0 translate-x-0 translate-y-0 drag"
                : "w-[70vw] h-[60vh] rounded-t-[1vw] top-[15vh] left-[15vw]"}
    `}>
            <header className={`w-full flex justify-between items-center px-[2vw] py-[1vw] text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300
         ${maxScreen ? "h-[15%]" : "h-[20%] rounded-t-[1vw]"}
      `}>
                <div>
                    <h1 className="text-[2vw] font-semibold">Student-University Communication</h1>
                </div>
                <div className="flex gap-x-[1vw]">
                    <button className='w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300'>
                        <FontAwesomeIcon className='w-full h-full' icon={faPrint} style={{ color: "#ffffff" }} />
                    </button>
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={maxScreenHandler}>
                        {maxScreen ? <FontAwesomeIcon className="w-full h-full" icon={faCompress} /> :
                            <FontAwesomeIcon className="w-full h-full" icon={faExpand} />}
                    </button>
                    <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={FeedbackModalHandler}>
                        <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
                    </button>
                </div>
            </header>
            <div className={`w-full flex flex-col p-[1vw] rounded-[1vw] bg-gray-100 gap-y-[1vh]
        ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
      `}>
                <div className={`h-[10%]  w-full p-[1vw] text-[1vw] flex justify-center px-[1vw] items-center`}>
                    <p className='w-[15%] text-[1vw]'>Select recipient:</p>
                    <select
                        value={selectedRecipient}
                        onChange={(e) => changeRecipient(e.target.value)}
                        className="w-[85%] px-[1vw] py-[1vh] border border-gray-300 rounded-md"
                    >
                        <option value="admin">Admin</option>
                        <option value="profAhmed">Prof Ahmed</option>
                        <option value="profTaylor">Prof Taylor</option>
                        <option value="labAttendantAyesha">Lab Attendant Ayesha</option>
                    </select>
                </div>
                <div className='h-[70%] w-full overflow-auto style-scrollbar px-[1vw]'>
                    <div className="flex flex-col items-end justify-end">
                        {messages.map((message, index) => (
                            <div key={index} className={`mb-[1vw] ${message.type === 'user' ? 'self-end' : 'self-start'}`}>
                                <div className={`rounded-lg px-[1vw] py-[1vh] ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                                    {message.content}
                                </div>
                                <div className={`text-[1vw] text-gray-500 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                                    {message.timestamp}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`w-full h-[20%] flex items-center justify-between p-[1vw]`}>
                    <input
                        type="text"
                        className="flex-grow p-2 mr-2 border border-gray-300 rounded-md"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        className="px-[1vw] py-[1vh] text-white bg-blue-500 rounded-md"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedBackModal;
