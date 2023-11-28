import React from 'react'
import GradesReport from './Dashboard/GradesReport'
import TimeTable from './Dashboard/TimeTable'
import Reminders from './Dashboard/Reminders'
import PaymentHistory from './Dashboard/PaymentHistory'
import Forums from './Dashboard/Forums'
import LearningPlatforms from './Dashboard/ELearningPlatforms.jsx/LearningPlatforms'
import AcademicCalender from './Dashboard/AcademicCalender'
import AllSemesterResult from './Dashboard/AllSemesterResult'

const Dashboard = ({
  AssignmentModalHandler,QuizModalHandler,MidTermModalHandler,FinalModalHandler,AttendanceModalHandler,ClassesModalHandler,
  PaidModalHandler,PendingModalHandler,
  AcademicModalHandler,
  SelectedRemindersHandler,
  AllSemModalHandler,
  TimeTableModalHandler,
  FeedbackModalHandler}) => {
  return (
    <div className='flex w-full h-[90vh] p-[1vw] gap-x-[1vw]'>
    <div className='flex flex-col h-full w-[75%] gap-y-[1vh]'>
    <GradesReport
   AssignmentModalHandler={AssignmentModalHandler}
   QuizModalHandler={QuizModalHandler}
   MidTermModalHandler={MidTermModalHandler}
   FinalModalHandler={FinalModalHandler}
   AttendanceModalHandler={AttendanceModalHandler}
   ClassesModalHandler={ClassesModalHandler}
    />
    <div className='w-[100%] h-[35vh] flex gap-x-[0.5vw]'> 
    <div className='w-[40%] h-full flex flex-col gap-y-[1vh]'>
    <AllSemesterResult
    AllSemModalHandler={AllSemModalHandler}/>
    <TimeTable
    TimeTableModalHandler={TimeTableModalHandler}/>
    </div>
    <Reminders
    SelectedRemindersHandler={SelectedRemindersHandler}
    />
    </div>
    <div className='w-[100%] h-[20vh] flex gap-x-[0.5vw]'> 
    <div className='w-[40%] h-full flex flex-col gap-y-[1vh]'>
    <PaymentHistory
    PaidModalHandler={PaidModalHandler}
    PendingModalHandler={PendingModalHandler}
    />
    <AcademicCalender
    AcademicModalHandler={AcademicModalHandler}
      />

    </div>
    <Forums
    FeedbackModalHandler={FeedbackModalHandler}
    />
    </div>

    </div>
    <div className='flex flex-col w-[25%]'>
     <LearningPlatforms/>
    </div>
    </div>
  )
}

export default Dashboard