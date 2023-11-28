import React from 'react'
import MainActivity from './Dashboard/MainActivity'
import ActivityList from './Dashboard/ActivityList'

const Dashboard = ({LearningMaterialHandler,AssignmentModalHandler,QuizModalHandler}) => {
    return (
        <div className='flex flex-col w-full h-[90vh] p-[1vw] gap-y-[2vh]'>
            <div className='flex w-full h-[30vh] gap-x-[1vw]'>
                <MainActivity />
            </div>
            <div className='flex w-full h-[60vh] shadow-lg shadow-blue-700 rounded-[1vw] overflow-auto style-scrollbar'>
                <ActivityList 
                LearningMaterialHandler={LearningMaterialHandler}
                AssignmentModalHandler={AssignmentModalHandler}
                QuizModalHandler={QuizModalHandler}
                />
            </div>
        </div>
    )
}

export default Dashboard