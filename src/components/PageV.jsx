import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';

const PageV = () => {
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
    navigate('/PageU');
  };

  const handleNewSubmit = () => {
    if (selectedIndustry === 250000) {
      alert('Please select an option before proceeding.');
      return;
    }
    setIsOptionSelected(true);
  };

  const handleSubmit = async () => {
    await updateProgress((prevProgress) => prevProgress + 10);
    navigate('/NextPage'); // Change to the appropriate next page route
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
          <p className="text-lg font-semibold">How would you like to rate this survey made by a 19-year-old?</p>

          <div className="rating rating-lg rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked={progress < 50} onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" checked={progress >= 50} onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1"  onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2"  onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" onClick={() => handleNewSubmit()} />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" onClick={() => handleNewSubmit()} />
          </div>

          <p className="text-lg mt-8 font-semibold">How would you like to rate the service of our company?</p>

          <div className="rating rating-lg rating-half">
            <input type="radio" name="rating-11" className="rating-hidden" />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked={isOptionSelected} onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-2" checked={!isOptionSelected} onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-1"  onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-2" onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-1"  onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-2"  onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-1"  onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-2"  onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-1"  onClick={() => setIsOptionSelected(true)} />
            <input type="radio" name="rating-11" className="bg-yellow-500 mask mask-star-2 mask-half-2"  onClick={() => setIsOptionSelected(true)} />
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
            onClick={handleSubmit}
            disabled={!isOptionSelected}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageV;
