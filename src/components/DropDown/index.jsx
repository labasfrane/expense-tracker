import { useState } from "react";

import "./index.scss";

const DropDown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);

  const toggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="dropdown">
      <div onClick={toggle} className="dropdown__header">
        Select Expense
      </div>
      {isOpen && (
        <ul className="dropdown__list">
          {data.map((option) => (
            <li
              className="dropdown__list--item"
              onClick={() => onOptionClicked(option)}
              key={Math.random()}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
