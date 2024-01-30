import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleStart = () => {
    
    if (phoneNumber.length < 10) {
      // Display alert if phone number is not greater than 9 digits
      alert('Please enter a valid phone number.');
    } else {
      // Navigate to the next page if phone number is valid
      navigate('/Page1');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-[600px] h-[500px] glass shadow-md py-2 border-2 bg-gray-200 flex flex-col justify-center items-center">
        <figure>
          <img
            style={{ maxWidth: '200px', height: '100px', marginTop: '16px' }}
            src="https://www.cognite.com/hs-fs/hubfs/Verdantix%20logo%202022%20400x143.png?width=375&height=135&name=Verdantix%20logo%202022%20400x143.png"
            alt="car!"
          />
        </figure>

        <div className="card-body h-[420px] text-center">
          <h2 className="card-title mt-1">A Net Zero And Carbon Management Global Corporate Survey</h2>
          <h4 className="subheading mt--1" style={{ fontSize: '0.9rem', color: '#555' }}>
            Carbon management involves the tracking, reduction, and offsetting of carbon emissions from various sources within an organization.
          </h4>
          <div className="card shrink-0 mx-auto h-50 mt-6 w-90 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold" style={{ fontSize: '1rem'}} title="Kindly enter your phone number">
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel" 
                  placeholder="Phone Number"
                  className="input input-bordered"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={handleStart}
                >
                  Get Started!
                </button>
              </div>
            </form>
          </div>

          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default Top;
