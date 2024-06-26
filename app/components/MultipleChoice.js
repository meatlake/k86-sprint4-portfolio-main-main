import { useState } from "react";

const MultipleChoice = ({ question, options, handleAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);
    handleAnswer(option);
  };

  return (
    <div className="flex flex-col pt-24 bg-bg-quiz h-[100vh] pb-12">
      <p className="lg:text-2xl px-4 lg:px-0 font-semibold mb-12">{question}</p>
      <div className="lg:grid grid-cols-2 lg:gap-2 flex flex-col gap-4 px-4 lg:px-12">
        {options.map((option, index) => (
          <button
            key={index}
            className={`${
              selected === option.value ? "selected" : ""
            } border-2 border-white lg:h-[250px] min-h-[100px] lg:text-xl font-semibold`}
            onClick={() => handleClick(option)}
          >
            {option.type === "text" ? (
              option.value
            ) : option.type === "image" ? (
              <img
                src={option.src}
                alt={option.alt}
                className="border-none object-cover max-h-[150px] lg:max-h-[250px] h-full w-full"
              />
            ) : (
              <span>Invalid option type</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
