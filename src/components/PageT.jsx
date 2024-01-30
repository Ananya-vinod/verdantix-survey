import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';

const PageT = () => {
  const { updateProgress, progress, resetProgress } = useProgress();
  const navigate = useNavigate();

  const [selectedIndustry, setSelectedIndustry] = useState(250000);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleNewIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
    setIsOptionSelected(true);
  };

  useEffect(() => {
    setSelectedIndustry(progress);
  }, [progress]);

  const handlePrevious = async () => {
    await updateProgress((prevProgress) => prevProgress - 10);
    navigate('/PageS');
  };

  const handleNewSubmit = () => {
    if (selectedIndustry === 250000) {
      alert('Please select an option before proceeding.');
      return;
    }
  };

  const handleSubmit = async () => {
    await updateProgress((prevProgress) => prevProgress + 10);

    if (selectedIndustry === 'public-administration' || selectedIndustry === 'healthcare') {
      console.log("Navigating to PageX");
      navigate('/PageX');
    } else if (selectedIndustry === 'fb') {
      console.log("Navigating to PageU");
      navigate('/PageU');
    }
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
          <div
            className="radial-progress ml-auto text-blue-500 border-black"
            style={radialProgressStyle}
            role="progressbar"
          >
            {`${progress}%`}
          </div>
        </div>

        <div className="card w-[560px] mx-auto h-[300px] shadow-md p-4 border-2 border-gray-500 bg-gray-200 flex flex-col items-left mt-1">
          <p className="text-lg font-semibold">To what extent have you implemented BMSs at your sites?</p>

          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-left">
              <form onSubmit={handleSubmit} className="text-left mt-4">
                <div className="mb-4">
                  <label className="flex items-left">
                    <input
                      type="radio"
                      name="industry"
                      value="healthcare"
                      checked={selectedIndustry === 'healthcare'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Implemented at all or most sites</span>
                  </label>

                  <label className="flex items-center mt-2">
                    <input
                      type="radio"
                      name="industry"
                      value="public-administration"
                      checked={selectedIndustry === 'public-administration'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Implemented at one or some sites</span>
                  </label>

                  <label className="flex items-center mt-2">
                    <input
                      type="radio"
                      name="industry"
                      value="fb"
                      checked={selectedIndustry === 'fb'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Not implemented</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-9 w-[575px] ">
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
            className={`bg-blue-500 mr-auto text-white w-[94px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${
              !isOptionSelected && 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => {
              handleNewSubmit();
              handleSubmit();
            }}
            disabled={!isOptionSelected}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageT;
