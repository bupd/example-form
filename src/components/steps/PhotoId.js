import React, { useState } from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import land from '../../components/landing1.jpeg';

export const PhotoId = () => {
  const { userData, setUserData } = useStepperContext();
  const [frontCardFile, setFrontCardFile] = useState(null);
  const [scannedImagesFile, setScannedImagesFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFrontCardFileChange = (e) => {
    const file = e.target.files[0];
    setFrontCardFile(file);
  };

  const handleScannedImagesFileChange = (e) => {
    const file = e.target.files[0];
    setScannedImagesFile(file);
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div >
        {/* Image */}
        <img src={land} alt="Landing image" className="mr-32 ml-10 pr-24" />
      </div>
      <div className="w-full mx-auto divide-y">
        <div>
          <h1 className="text-4xl text-center font-medium mb-2">Doctor's Photo ID Card</h1>
        </div>

        <div className="m-3 p-3 text-center font-normal">
          <p>Capture the <strong>Front </strong>of the Card as shown</p>
          <input
            type="file"
            onChange={handleFrontCardFileChange}
            className="mt-8 text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-teal-500 file:text-white
              hover:file:bg-teal-700 "
          />
          <p className='font-bold mt-5 mb-0 '>OR</p>
        </div>
        <div className="items-center m-3 p-3 text-center">
          <p><strong>Upload </strong>the scanned Images </p>
          <input
            type="file"
            onChange={handleScannedImagesFileChange}
            className="mt-8 text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-teal-500 file:text-white
              hover:file:bg-teal-700 "
          />
          <p className="font-light text-xs">(e.g. .jpg, .png)</p>
        </div>
      </div>
    </div>
  );
};
