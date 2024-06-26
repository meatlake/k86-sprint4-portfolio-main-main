import { useState } from "react";

const Slider = ({ question, handleAnswer }) => {
  const min = 0;
  const max = 3;
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleSubmit = () => {
    handleAnswer(value);
  };

  return (
    <div className="bg-bg-slider bg-cover bg-right bg-no-repeat flex flex-col items-center gap-12 lg:gap-0s px-6 lg:px-0 justify-center h-[100vh] w-[100vw]">
      <p className="text-2xl mt-32 lg:mt-0 font-semibold">{question}</p>
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={handleChange}
        className="appearance-none forced-colors:appearance-auto w-full lg:w-[1000px] lg:mt-24 h-1 rounded-full"
      />
      <div className="mt-12 lg:mt-24 text-2xl font-semibold">
        {["Volledig mee eens", "Eens", "Oneens", "Volledig mee oneens"][value]}
      </div>
      <button
        className=" text-xl font-medium border-transparent rounded-full bg-gradient-to-r from-[#FF9701] to-[#FF15A3] via-[#FF3E31] text-white px-6 py-2  hover:text-black transition-all duration-200 ease-in-out lg:mt-12"
        onClick={handleSubmit}
      >
        Volgende
      </button>
    </div>
  );
};

export default Slider;
