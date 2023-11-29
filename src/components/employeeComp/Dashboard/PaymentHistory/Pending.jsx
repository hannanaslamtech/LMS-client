import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress, faPrint } from "@fortawesome/free-solid-svg-icons";

const PendingVal = [
  {
    "date": "3 Feb, 24",
    "desc": "Second Semester Fee",
    "amount": "71,650",
    "Due": "2 Jul, 23",
  },
  {
    "date": "15 Jan, 24",
    "desc": "Examination Fee",
    "amount": "2,500",
    "Due": "3 Sep, 24",
  },
  {
    "date": "20 Aug, 23",
    "desc": "Additional Courses Fee",
    "amount": "12,300",
    "Due": "29 Jan, 24",
  },
  // Add more data as needed
];


const Pending = ({ openPending, PendingModalHandler }) => {
  const [maxScreen, setMaxScreen] = useState(false);

  const maxScreenHandler = () => {
    setMaxScreen(!maxScreen);
  }

  return (
    <div
      className={`absolute flex-1 duration-300 rounded-lg bg-white z-20
        ${openPending
          ? "scale-100 duration-300"
          : "scale-0 -z-10"
        }
        ${maxScreen
          ? "w-[100%] h-[100%] top-0 left-0 m-0 translate-0 translate-x-0 translate-y-0 drag"
          : "w-[70vw] h-[60vh] rounded-t-[1vw]  top-[15vh] left-[15vw]"
        }
      `}
    >
      <header
        className={`w-full flex justify-between items-center px-[2vw] py-[1vw] text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300
         ${maxScreen ? "h-[15%]" : "h-[20%] rounded-t-[1vw]"
          }`}
      >
        <div>
          <h1 className="text-[2vw] font-semibold">
            Payment History:
            <span className='font-semibold ml-[0.5vw] text-red-300'>
              Pending Voucher
            </span>
          </h1>
        </div>
        <div className="flex gap-x-[1vw]">
          <button className='w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300'>
            <FontAwesomeIcon className='w-full h-full' icon={faPrint} style={{ color: "#ffffff", }} />
          </button>
          <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => maxScreenHandler()}>
            {maxScreen ? <FontAwesomeIcon className="w-full h-full" icon={faCompress} /> :
              <FontAwesomeIcon className="w-full h-full" icon={faExpand} />}
          </button>
          {/* Provide the implementation for AddProjectHandler */}
          <button className="w-[1.2vw] h-[1.2vw] hover:scale-110 duration-300" onClick={() => PendingModalHandler()}>
            <FontAwesomeIcon className="w-full h-full" icon={faXmark} />
          </button>
        </div>
      </header>
      <div className={`w-full flex flex-col justify-center items-center
            ${maxScreen ? "h-[85%]" : "h-[80%] rounded-t-[1vw]"}
            `}>
        <div className='w-full h-[90%] p-[1vw] overflow-auto style-scrollbar'>
          <table className="min-w-full bg-white border-spacing-[1vw] border rounded-[1vw] border-gray-300 table-fixed">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center border-b">Date</th>
                <th className="px-4 py-2 text-left border-b">Payment Description</th>
                <th className="px-4 py-2 text-center border-b">Due Date</th>
                <th className="px-4 py-2 text-right border-b">Amount</th>

              </tr>
            </thead>
            <tbody>
              {PendingVal.map((pending, index) => (
                <tr key={index}
                  className="even:bg-blue-50 odd:bg-blue-200">
                  <td className="px-4 py-2 text-center border-b">{pending.date}</td>
                  <td className="px-4 py-2 text-left border-b">{pending.desc}</td>
                  <td className="px-4 py-2 text-center border-b">{pending.Due}</td>
                  <td className="px-4 py-2 text-right border-b">{pending.amount}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pending;
