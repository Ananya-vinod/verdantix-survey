import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';

const PageN = () => {
  const { updateProgress, progress, resetProgress } = useProgress();
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(250000);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  useEffect(() => {
    setSelectedIndustry(progress);
  }, [progress]);

  useEffect(() => {
    // Enable or disable the Next button based on whether the scroller is moved
    setIsNextButtonDisabled(selectedIndustry === progress);
  }, [selectedIndustry, progress]);

  const handleIndustryChange = (event) => {
    // Calculate the nearest step value based on the current selected value
    const stepPositions = [0, 1, 2, 3, 4]; // Adjust these values based on the position of your span elements
    const nearestStep = stepPositions.reduce((prev, curr) => {
      return Math.abs(curr * 250000 - event.target.value) < Math.abs(prev * 250000 - event.target.value) ? curr : prev;
    }, 0) * 250000;

    // Update the selectedIndustry state with the nearest step value
    setSelectedIndustry(nearestStep);
  };

  const handlePrevious = () => {
    resetProgress(); // Reset the progress to its initial state
    navigate('/Page1');
  };

  const handleSubmit = async () => {
    await new Promise((resolve) => {
      updateProgress((prevProgress) => {
        resolve(prevProgress);
        return prevProgress + 10;
      });
    });

    navigate('/PageO');
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
          <p className="text-lg font-semibold">Please define how many office or multi-purpose buildings there are in your portfolio?</p>

          <input
            type="range"
            min={0}
            max={1000000}
            value={selectedIndustry}
            className="range range-xs w-full mt-8"
          
            onChange={handleIndustryChange}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          {/* New set of texts right below the lines */}
          <div className="w-full flex justify-between text-s px-2">
            <span>1-10</span>
            <span>11-50</span>
            <span>51-100</span>
            <span>101-500</span>
            <span>&gt;500</span>
          </div>
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
            className={`bg-blue-500 mr-auto text-white w-[94px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => {
              handleSubmit();
            }}
            disabled={isNextButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageN;
