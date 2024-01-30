import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';

const PageN = () => {
  const { updateProgress, progress, resetProgress } = useProgress();
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(250000);
  const [textareaContent, setTextareaContent] = useState('');

  useEffect(() => {
    setSelectedIndustry(progress);
  }, [progress]);

  const handleIndustryChange = (event) => {
    setSelectedIndustry(parseInt(event.target.value, 10));
  };

  const handlePrevious = () => {
    resetProgress(); // Reset the progress to its initial state
    navigate('/PageR');
  };

  const handleSubmit = async () => {
    await updateProgress((prevProgress) => prevProgress + 10);
    navigate('/PageT');
  };

  const radialProgressStyle = {
    "--value": progress,
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-[600px] h-[500px] shadow-md p-1 border-2 bg-gray-200 flex flex-col">
        <div className="flex flex-col w-full lg:flex-row"></div>
        <div className="flex justify-between w-[575px] mt-2">
          <figure>
            <img
              style={{ maxWidth: '200px', height: '100px' }}
              src="https://www.cognite.com/hs-fs/hubfs/Verdantix%20logo%202022%20400x143.png?width=375&height=135&name=Verdantix%20logo%202022%20400x143.png"
              alt="car!"
            />
          </figure>
          <div className="radial-progress ml-auto text-blue-500 border-black" style={radialProgressStyle} role="progressbar">
            {`${progress}%`}
          </div>
        </div>

        <div className="card w-[560px] mx-auto h-[300px] shadow-md p-4 border-2 border-gray-500 bg-gray-200 flex flex-col items-left mt-1">
          <p className="text-lg font-semibold">If you outsource any facilities or building management, what services, hard or soft, do you outsource and to whom?</p>
          <textarea
            className="textarea textarea-bordered mt-8"
            placeholder="Type here"
            value={textareaContent}
            onChange={(e) => setTextareaContent(e.target.value)}
          ></textarea>
         
        </div>

        <div className="flex justify-between mt-9 w-[575px]">
          <button
            type="button"
            className="bg-blue-500 ml-4 text-white w-[94px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handlePrevious}
          >
            Previous
          </button>

          <button
            type="button"
            style={{ marginRight: '5px' }}
            className={`bg-blue-500 mr-auto text-white w-[94px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${textareaContent.trim() === '' && 'opacity-50 cursor-not-allowed'}`}
            onClick={handleSubmit}
            disabled={textareaContent.trim() === ''}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageN;
