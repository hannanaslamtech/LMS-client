import React, { useState } from 'react';
import AssignmentActivity from './ActivityLists/AssignmentActivity';
import AttendanceActivity from './ActivityLists/AttendanceActivity';
import QuizActivity from './ActivityLists/QuizActivity';
import LearningMaterialActivity from './ActivityLists/LearningMaterialActivity';
import ReportsActivity from './ActivityLists/ReportsActivity';

const ActivityList = ({LearningMaterialHandler,AssignmentModalHandler,QuizModalHandler}) => {
    const [activity, setActivity] = useState("");

    const handleActivityList = (value) => {
        if (activity === value) {
            setActivity("");
        } else {
            setActivity(value);
        }
    };

    return (
        <div className='flex flex-col h-full w-full gap-y-[1vh] bg-gray-100 rounded-[1vw] p-[1vw] overflow-auto style-scrollbar'>
            <AttendanceActivity
                activity={activity}
                handleActivityList={handleActivityList}
            />
            <AssignmentActivity
                activity={activity}
                handleActivityList={handleActivityList}
                AssignmentModalHandler={AssignmentModalHandler}
            />
            <QuizActivity
                activity={activity}
                handleActivityList={handleActivityList}
                QuizModalHandler={QuizModalHandler}
            />
            <LearningMaterialActivity
                activity={activity}
                handleActivityList={handleActivityList}
                LearningMaterialHandler={LearningMaterialHandler}
            />
            <ReportsActivity
                activity={activity}
                handleActivityList={handleActivityList}
            />
                        
        </div>
    );
}

export default ActivityList;
