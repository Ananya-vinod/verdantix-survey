import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';

const PageO = () => {
  const { updateProgress, progress } = useProgress();
  const navigate = useNavigate();

  const [selectedIndustry, setSelectedIndustry] = useState(250000);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNewIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
    setIsOptionSelected(true);
  };

  useEffect(() => {
    setSelectedIndustry(progress);
  }, [progress]);

  const handlePrevious = async () => {
    await updateProgress((prevProgress) => prevProgress - 10);
    navigate('/PageN');
  };

  const handleSubmit = async () => {
    await updateProgress((prevProgress) => prevProgress + 10);
    navigate('/PageP');
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
          {isHovered && (
  <div
    className="card absolute mx-auto mt-10 ml-32 p-2 bg-white shadow-md"
    onMouseEnter={() => setIsHovered(true)}
    style={{ fontSize: '13px' }} // Adjust the font size as needed
  >
    <p>
      Operational Technology, or OT, is a technology of hardware or software,
      that is used to monitor and control devices, physical processes and
      infrastructure
    </p>
  </div>
)}
</div>
        <div className="card w-[560px] mx-auto h-[300px] shadow-md p-4 border-2 border-gray-500 bg-gray-200 flex flex-col items-left mt-1">
          <p
            className="text-lg font-semibold hover-trigger"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            In addition to the management of OT, which of the following building management capabilities would you like or expect to see in an OT management solution, unified or otherwise?
          </p>
          <p3
          className="text-s italic  text-blue-500">
          (Hover over the question above to know what 'OT' is)
          </p3>


          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              <form onSubmit={handleSubmit} className="text-left mt-4">
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="industry"
                      value="healthcare"
                      checked={selectedIndustry === 'healthcare'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Energy Management</span>
                  </label>

                  <label className="flex items-center mt-2">
                    <input
                      type="radio"
                      name="industry"
                      value="public-administration"
                      checked={selectedIndustry === 'public-administration'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Building Security</span>
                  </label>
                  <label className="flex items-center mt-2">
                    <input
                      type="radio"
                      name="industry"
                      value="Food and Beverages"
                      checked={selectedIndustry === 'Food and Beverages'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Occupant Health & Wellbeing</span>
                  </label>

                  <label className="flex items-center mt-8">
                    <input
                      type="radio"
                      name="industry"
                      value="fr"
                      checked={selectedIndustry === 'fr'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2 mb-1">Others</span>

                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-sm w-full max-w-xs ml-8"
                    />
                  </label>
                </div>
              </form>
            </div>

            <div
              className="divider lg:divider-horizontal mt-3"
              style={{ height: '100px', marginTop: '2rem' }}
            ></div>

            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              <form onSubmit={handleSubmit} className="text-left mt-4">
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="industry"
                      value="oi"
                      checked={selectedIndustry === 'oi'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Sustainability & Reporting</span>
                  </label>

                  <label className="flex items-center mt-2">
                    <input
                      type="radio"
                      name="industry"
                      value="av"
                      checked={selectedIndustry === 'av'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Space and Workplace Management</span>
                  </label>

                  <label className="flex items-center mt-2">
                    <input
                      type="radio"
                      name="industry"
                      value="who"
                      checked={selectedIndustry === 'who'}
                      onChange={handleNewIndustryChange}
                    />
                    <span className="ml-2">Facilities Services </span>
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
            type="submit"
            style={{ marginRight: '5px' }}
            className={`bg-blue-500 mr-auto text-white w-[94px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${
              !isOptionSelected && 'opacity-50 cursor-not-allowed'
            }`}
            onClick={handleSubmit}
            disabled={!isOptionSelected}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageO;
