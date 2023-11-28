import React,{ useState } from 'react'
import SelectCourse from './SelectCourse'
import Ebooks from './Ebooks'
import PdfFiles from './PDF_files'
import LecturesNotes from './LecturesNotes'
import Audios from './Audios'
import HandsonVideos from './HandsonVideos'

const LearningPlatforms = () => {
    const [selectedCourse, setSelectedCourse] = useState('Select your course');
    return (
        <div className='w-full h-[90vh]'>
            <div className='flex flex-col gap-y-[1vh]'>
            <div className='w-full h-[5vh] bg-blue-500 text-white flex justify-center items-center rounded-lg'>
                <p className='text-[1vw] tracking-wider font-semibold'>Learning Materials</p>
            </div>
            <SelectCourse 
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            />
            </div>
            <div className='flex flex-col justify-end w-full h-[75vh] gap-y-[0.75vh]'>
                <Ebooks 
                selectedCourse={selectedCourse}
                />
                <PdfFiles
                selectedCourse={selectedCourse}
                />
                <LecturesNotes 
                selectedCourse={selectedCourse}
                />
                <Audios 
                selectedCourse={selectedCourse}
                />
                <HandsonVideos 
                selectedCourse={selectedCourse}
                />
            </div>

        </div>
    )
}

export default LearningPlatforms