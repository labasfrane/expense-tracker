import { useState } from "react";
import { useFormContext } from "react-hook-form";

import "./index.scss";

const DropDown = ({ data = [] }) => {
  const { register } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  console.log(selectedOption);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (item) => {
    setSelectedOption(item);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="dropdown" {...register("dropdown")}>
      <div onClick={toggle} className="dropdown__header">
        Select Expense
      </div>
      {isOpen && (
        <ul className="dropdown__list">
          {data.map((item) => (
            <li
              className="dropdown__list--item"
              onClick={() => onOptionClicked(item.value)}
              key={item.id}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
