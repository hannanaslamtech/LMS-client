import React, { useState } from 'react';
import Header from '../components/FacultyComp/Header';
import Dashboard from '../components/FacultyComp/Dashboard';
import AddLearningMaterialsModal from '../components/FacultyComp/Dashboard/Modals/AddLearningMaterialsModal';
import AddAssignment from '../components/FacultyComp/Dashboard/Modals/AddAssignment';
import AddQuiz from '../components/FacultyComp/Dashboard/Modals/AddQuiz';

const AdminDashboard = () => {
  const [openLearningMaterial, setOpenLearningMaterial] = useState(false);
  const [openAssignmentModal, setOpenAssignmentModal] = useState(false);
  const [openQuizModal, setOpenQuizModal] = useState(false);

  const LearningMaterialHandler = () => {
    setOpenLearningMaterial(!openLearningMaterial);
  };

  const AssignmentModalHandler = () => {
    setOpenAssignmentModal(!openAssignmentModal);
  };

  const QuizModalHandler = () => {
    setOpenQuizModal(!openQuizModal);
  };

  return (
    <div className='w-[100%] h-[100vh] bg-blue-950'>
      <Header />
      <Dashboard
        LearningMaterialHandler={LearningMaterialHandler}
        AssignmentModalHandler={AssignmentModalHandler}
        QuizModalHandler={QuizModalHandler}
      />

      <AddLearningMaterialsModal
        openLearningMaterial={openLearningMaterial}
        LearningMaterialHandler={LearningMaterialHandler}
      />
            <AddAssignment
        openAssignmentModal={openAssignmentModal}
        AssignmentModalHandler={AssignmentModalHandler}
      />
                  <AddQuiz
        openQuizModal={openQuizModal}
        QuizModalHandler={QuizModalHandler}
      />

      {openLearningMaterial || openAssignmentModal || openQuizModal ? (
        <div
          className={`fixed inset-0 opacity-80 z-10  transition-opacity`}
          style={{ backgroundColor: "#202020" }}
        ></div>
      ) : (
        ""
      )}

    </div>
  )
}

export default AdminDashboard