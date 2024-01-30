import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';

const PageQ = () => {
  const { updateProgress, progress } = useProgress();
  const navigate = useNavigate();
  const [selectedCountries, setSelectedCountries] = useState({});
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const handleCountryChange = (rowIndex, country) => {
    setSelectedCountries((prevSelected) => ({ ...prevSelected, [rowIndex]: country }));
  };

  useEffect(() => {
    const anyRowUnselected = Object.values(selectedCountries).some((country) => !country);
    setIsNextButtonDisabled(anyRowUnselected);
  }, [selectedCountries]);

  useEffect(() => {
    setSelectedCountries({});
  }, [progress]);

  const handlePrevious = async () => {
    await updateProgress((prevProgress) => prevProgress - 10);
    navigate('/PageP');
  };

  const handleSubmit = async () => {
    const allRowsSelected = Object.values(selectedCountries).length === data.length &&
      Object.values(selectedCountries).every(Boolean);

    if (!allRowsSelected) {
      alert('Please select an option for each row before proceeding.');
      return;
    }

    await updateProgress((prevProgress) => prevProgress + 10);
    navigate('/PageR');
  };

  const radialProgressStyle = {
    "--value": progress,
  };

  const data = [
    { company: 'Worker knowledge/skills of OT systems', contact: 'Maria Anders', country: 'Germany', country2: 'GermanyA', country3: 'Germany2' },
    { company: 'Lack of industry-specific or IT skills', contact: 'Francisco Chang', country: 'Mexico', country2: 'Mexico2',country3: 'Germany3'  },
    { company: 'Data availability', contact: 'Roland Mendel', country: 'Austria', country2: 'Austria2',country3: 'Germany4'  },
    { company: 'Integration and connectivity of OT systems with each other', contact: 'Helen Bennett', country: 'UK', country2: 'UK2',country3: 'Germany5'  },
    { company: 'Lack of budget (e.g., for capital or IT investments)', contact: 'Yoshi Tannamuri', country: 'Canada', country2: 'Canada2',country3: 'Germany6'  },
    { company: 'Ageing or insufficient technology infrastructure', contact: 'hgjkkjoohg', country: 'gvjryfyh', country2: 'Iyytutyut7g',country3: 'Germuyanuyt7y8'  },
    { company: 'Lack of staff or Building Advisor', contact: 'hgjerytuuytuhg', country: 'gvejh', country2: 'Iyttyge',country3: 'Germyiuany9'  },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-[900px] h-[1000px] shadow-md py-[0.1px] border-2 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 flex flex-col overflow-auto">
        <div className="flex flex-col w-full lg:flex-row"></div>
        <div className="flex justify-between w-[850px] mt-[0.5px] mb-0">
          <figure style={{ marginTop: '0.1rem' ,marginLeft:'3rem'}}>
            <img
              style={{ maxWidth: '200px', height: '100px' }}
              src="https://www.cognite.com/hs-fs/hubfs/Verdantix%20logo%202022%20400x143.png?width=375&height=135&name=Verdantix%20logo%202022%20400x143.png"
              alt="car!"
            />
          </figure>
          <div
            className="radial-progress mr-6 mt-1 text-blue-500 border-black"
            style={radialProgressStyle}
            role="progressbar"
          >
            {`${progress}%`}
          </div>
        </div>
        <div className="card w-[890px] mx-auto h-[400px] shadow-md p-4  from-gray-100 via-gray-50 to-gray-100 flex flex-col items-left mt-1 overflow-auto"style={{ maxWidth: '800px',fontSize: '18px', marginTop: '[0px]'}}>
          <p className="text-s mb-6 mt-1  font-semibold">What is your familiarity with the following solutions?</p>

          <div className="flex flex-col h-[800px] items-left overflow-auto">
            <table
              style={{
                fontFamily: 'arial, sans-serif',
                borderCollapse: 'collapse',
                width: '100%',
               
                marginTop: '[1px]',
                fontSize: '14px',
                position: 'relative',
              }}
            >
              <thead>
                <tr>
                  <th className="border border-gray-500 sticky top-0 bg-white">Kindly choose one option for each row</th>
                  <th className="border border-gray-500 sticky top-0 bg-white">Very Significant </th>
                  <th className="border border-gray-500 sticky top-0 bg-white">Significant </th>
                  <th className="border border-gray-500 sticky top-0 bg-white">Not Significant</th>
                  <th className="border border-gray-500 sticky top-0 bg-white">Don’t Know</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-500 p-2">{row.company}</td>
                    <td className="border border-gray-500 p-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`contactRadio${index}`}
                          value={row.contact}
                          checked={selectedCountries[index] === row.contact}
                          onChange={() => handleCountryChange(index, row.contact)}
                        />
                      </label>
                    </td>
                    <td className="border border-gray-500 p-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`countryRadio${index}`}
                          value={row.country}
                          checked={selectedCountries[index] === row.country}
                          onChange={() => handleCountryChange(index, row.country)}
                        />
                      </label>
                    </td>
                    <td className="border border-gray-500 p-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`countryRadio${index}`}
                          value={row.country3}
                          checked={selectedCountries[index] === row.country3}
                          onChange={() => handleCountryChange(index, row.country3)}
                        />
                      </label>
                    </td>
                    <td className="border border-gray-500 p-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`country2Radio${index}`}
                          value={row.country2}
                          checked={selectedCountries[index] === row.country2}
                          onChange={() => handleCountryChange(index, row.country2)}
                        />
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between  mt-4  w-[890px] ">
          <button
            type="button"
            className="bg-blue-500 ml-10 mx-auto text-white w-[94px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            type="button"
           
            className={`bg-blue-500 mx-auto mr-10 text-white w-[94px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleSubmit}
            disabled={isNextButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageQ;
