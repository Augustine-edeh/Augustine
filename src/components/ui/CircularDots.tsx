import React from "react";

// Props type
interface CircularDotsPropsType {
  numberOfDots: number;
}

// Component definition
const CircularDots: React.FC<CircularDotsPropsType> = ({ numberOfDots }) => {
  const dotsArray = Array(numberOfDots).fill(0); // Create an array based on the numberOfDots prop passed in

  return (
    <ul className="flex justify-evenly mb-32">
      {dotsArray.map((_, index) => (
        <li
          key={index}
          className="bg-slate-800/10 dark:bg-slate-800/40 h-8 w-8 rounded-full"
        />
      ))}
    </ul>
  );
};

export default CircularDots;
