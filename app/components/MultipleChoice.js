import { useState } from "react";

const MultipleChoice = ({ question, options, handleAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);
    handleAnswer(option);
  };

  return (
    <div className="flex flex-col pt-24">
      <p>{question}</p>
      <div className="grid grid-cols-2 gap-2 px-12">
        {options.map((option, index) => (
          <button
            key={index}
            className={`${
              selected === option.value ? "selected" : ""
            } border-white border-2 lg:h-[250px] lg:text-xl font-semibold`}
            onClick={() => handleClick(option)}
          >
            {option.type === "text" ? (
              option.value
            ) : option.type === "image" ? (
              <img
                src={option.src}
                alt={option.alt}
                className="h-full object-cover w-full"
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
