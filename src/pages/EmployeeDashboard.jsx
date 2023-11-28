import React, { useState } from 'react';
import Header from '../components/employeeComp/Header'
import Dashboard from '../components/employeeComp/Dashboard';
import Assignment from '../components/employeeComp/Dashboard/GradeReport/Assignment';
import Quiz from '../components/employeeComp/Dashboard/GradeReport/Quiz';
import MidTerm from '../components/employeeComp/Dashboard/GradeReport/MidTerm';
import Exam from '../components/employeeComp/Dashboard/GradeReport/Exam';
import Attendance from '../components/employeeComp/Dashboard/GradeReport/Attendance';
import Classes from '../components/employeeComp/Dashboard/GradeReport/Classes';
import Paid from '../components/employeeComp/Dashboard/PaymentHistory/Paid';
import Pending from '../components/employeeComp/Dashboard/PaymentHistory/Pending';
import CalenderModal from '../components/employeeComp/Dashboard/AcademicCalenderModal/CalenderModal';
import RemindersModel from '../components/employeeComp/Dashboard/reminders/RemindersModel';
import RemindersDetail from '../components/employeeComp/Dashboard/reminders/RemindersDetail';
import AllSemModal from '../components/employeeComp/Dashboard/AllSemesterResult/AllSemModal';
import TimeTableModal from '../components/employeeComp/Dashboard/TimeTable/TimeTableModal';
import FeedBackModal from '../components/employeeComp/Dashboard/FeebBack/FeedBackModal';

const EmployeeDashboard = () => {
  const [courseName, setCourseName] = useState("No Data");
  {/* Grade Report Modal's States */ }
  const [openAssignment, setopenAssignment] = useState(false);
  const [openQuiz, setopenQuiz] = useState(false);
  const [openMidTerm, setOpenMidTerm] = useState(false);
  const [openFinal, setOpenFianl] = useState(false);
  const [openAttendance, setOpenAttendance] = useState(false);
  const [openClasses, setOpenClasses] = useState(false);
  {/* Payment History Modal's States */ }
  const [openPaid, setOpenPaid] = useState(false);
  const [openPending, setOpenPending] = useState(false);
  {/* Academic Calender Modal's States */ }
  const [openAcademic, setOpenAcademic] = useState(false);
  {/* Reminders Modal's States */ }
  const [openReminders, setOpenReminders] = useState(false);
  const [selectedData, setSelectedData] = useState({
    color: "",
    CourseCode: "",
    Desc: "",
    Deadline: "",
    Type: ""
  });
  const [openDetailsReminders, setOpenDetailsReminders] = useState(false);
  {/* All Semester Modal's States */ }
  const [openAllSemModal, setOpenAllSemModal] = useState(false);

  {/* Time Table Modal's States */ }
  const [openTimeTableModal, setOpenTimeTableModal] = useState(false);

  {/* Feedback Modal's States */ }
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);


  {/* Grade Report Modal's Function */ }
  const AssignmentModalHandler = (courseTitle) => {
    setCourseName(courseTitle);
    setopenAssignment(!openAssignment);
  };
  const QuizModalHandler = (courseTitle) => {
    setCourseName(courseTitle);
    setopenQuiz(!openQuiz);
  };
  const MidTermModalHandler = (courseTitle) => {
    setCourseName(courseTitle);
    setOpenMidTerm(!openMidTerm);
  };
  const FinalModalHandler = (courseTitle) => {
    setCourseName(courseTitle);
    setOpenFianl(!openFinal);
  };
  const AttendanceModalHandler = (courseTitle) => {
    setCourseName(courseTitle);
    setOpenAttendance(!openAttendance);
  };
  const ClassesModalHandler = (courseTitle) => {
    setCourseName(courseTitle);
    setOpenClasses(!openClasses);
  };
  {/* Payment History Modal's Function */ }
  const PaidModalHandler = () => {
    setOpenPaid(!openPaid);
  };
  const PendingModalHandler = () => {
    setOpenPending(!openPending);
  };
  {/* Academic Calender Modal's Function */ }
  const AcademicModalHandler = () => {
    setOpenAcademic(!openAcademic);
  };


  {/* Reminder Modal's Function */ }
  const RemindersModalHandler = () => {
    setOpenReminders(!openReminders);
  };

  const DetailsRemindersModalHandler = () => {
    setOpenDetailsReminders(!openDetailsReminders);
  };

  const SelectedRemindersHandler = (Color, Course, Description, DeadlineDate ,type) => {
    RemindersModalHandler();
    setSelectedData({
      color: Color,
      CourseCode: Course,
      Desc: Description,
      Deadline: DeadlineDate,
      Type: type
    });
  };

  {/* All Semester Modal's Function */ }
  const AllSemModalHandler = () => {
    setOpenAllSemModal(!openAllSemModal);
  };

  {/* TimeTable Modal's Function */ }
  const TimeTableModalHandler = () => {
    setOpenTimeTableModal(!openTimeTableModal);
  };

  {/* Feedback Modal's Function */ }
  const FeedbackModalHandler = () => {
    setOpenFeedbackModal(!openFeedbackModal);
  };

  return (
    <div className='relative w-full h-full bg-blue-950'>
      <Header />
      <Dashboard
        AssignmentModalHandler={AssignmentModalHandler}
        QuizModalHandler={QuizModalHandler}
        MidTermModalHandler={MidTermModalHandler}
        FinalModalHandler={FinalModalHandler}
        AttendanceModalHandler={AttendanceModalHandler}
        ClassesModalHandler={ClassesModalHandler}
        PaidModalHandler={PaidModalHandler}
        PendingModalHandler={PendingModalHandler}
        AcademicModalHandler={AcademicModalHandler}
        SelectedRemindersHandler={SelectedRemindersHandler}
        AllSemModalHandler={AllSemModalHandler}
        TimeTableModalHandler={TimeTableModalHandler}
        FeedbackModalHandler={FeedbackModalHandler}
      />

      {/* Grade Report Modals Starts */}
      <Assignment
        openAssignment={openAssignment}
        AssignmentModalHandler={AssignmentModalHandler}
        courseName={courseName}
      />
      <Quiz
        openQuiz={openQuiz}
        QuizModalHandler={QuizModalHandler}
        courseName={courseName}
      />
      <MidTerm
        openMidTerm={openMidTerm}
        MidTermModalHandler={MidTermModalHandler}
        courseName={courseName}
      />
      <Exam
        openFinal={openFinal}
        FinalModalHandler={FinalModalHandler}
        courseName={courseName}
      />
      <Attendance
        openAttendance={openAttendance}
        AttendanceModalHandler={AttendanceModalHandler}
        courseName={courseName}
      />
      <Classes
        openClasses={openClasses}
        ClassesModalHandler={ClassesModalHandler}
        courseName={courseName}
      />
      {/* Grade Report Modals Ends */}

      {/* Payment History Modals Starts */}
      <Paid
        openPaid={openPaid}
        PaidModalHandler={PaidModalHandler}
      />
      <Pending
        openPending={openPending}
        PendingModalHandler={PendingModalHandler}
      />
      {/* Payment History Modals Ends */}

      {/* Academic Calender Modals Starts */}
      <CalenderModal
        openAcademic={openAcademic}
        AcademicModalHandler={AcademicModalHandler}
      />
      {/*Academic Calender Modals Ends */}

      {/*Reminders Modals Starts */}
      <RemindersModel
        openReminders={openReminders}
        RemindersModalHandler={RemindersModalHandler}
        DetailsRemindersModalHandler={DetailsRemindersModalHandler}
        //Data props
        Color={selectedData.color}
        CourseCode={selectedData.CourseCode}
        Desc={selectedData.Desc}
        Deadline={selectedData.Deadline}
        type={selectedData.Type}
      />
      {/* <RemindersDetail
        openDetailsReminders={openDetailsReminders}
        DetailsRemindersModalHandler={DetailsRemindersModalHandler}
        //Data props
        Color={selectedData.color}
        CourseCode={selectedData.CourseCode}
        Desc={selectedData.Desc}
        Deadline={selectedData.Deadline}
      /> */}
      {/* Reminders Modals Ends */}

      {/* All Semester Modal Starts */}
      <AllSemModal
        openAllSemModal={openAllSemModal}
        AllSemModalHandler={AllSemModalHandler}
      />
      {/* All Semester Modal Ends */}

      {/* Time Table  Modal Starts */}
      <TimeTableModal
        openTimeTableModal={openTimeTableModal}
        TimeTableModalHandler={TimeTableModalHandler}
      />
      {/* Time Table Modal Ends */}

      {/* Feedback  Modal Starts */}
      <FeedBackModal
        openFeedbackModal={openFeedbackModal}
        FeedbackModalHandler={FeedbackModalHandler}
      />
      {/* Feedback Modal Ends */}


      {openAssignment || openQuiz || openMidTerm || openFinal || openAttendance || openClasses || openPaid || openPending || openReminders || openAcademic || openAllSemModal || openTimeTableModal || openFeedbackModal ? (
        <div
          className={`fixed inset-0 opacity-80 z-10  transition-opacity`}
          style={{ backgroundColor: "#202020" }}
        ></div>
      ) : (
        ""
      )}
      {openDetailsReminders ? (
        <div
          className={`fixed inset-0 opacity-80 z-30  transition-opacity`}
          style={{ backgroundColor: "#202020" }}
        ></div>
      ) : (
        ""
      )}

    </div>
  )
}

export default EmployeeDashboard