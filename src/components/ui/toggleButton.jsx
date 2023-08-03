import React, { useState } from 'react';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex justify-center items-center cursor-pointer mt-1.5">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`w-8 h-4 transition duration-300 ease-in-out ${
            isChecked ? 'bg-indigo-600' : 'bg-gray-400'
          } rounded-full shadow-inner`}
        ></div>
        <div
          className={`absolute left-0 top-0 w-4 h-4 transition duration-300 ease-in-out transform ${
            isChecked ? 'translate-x-full bg-white' : 'bg-white'
          } rounded-full shadow`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleButton;
