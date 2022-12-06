import { useState, useRef } from "react";
import useOutSideClick from "hooks/useOutSideClick";

import "./index.scss";

const Select = ({ options, value, name, selectProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const selectRef = useRef(null);
  useOutSideClick(selectRef, () => {
    setIsOpen(false);
  });

  const openDropDown = () => {
    setIsOpen(!isOpen);
  };

  const optionContent = options.map(({ id, value, label }) => (
    <option key={id} value={value}>
      {value}
    </option>
  ));

  const customOptionContent = options.map(({ id, value, label }) => (
    <div
      className="option-container"
      key={id}
      onClick={() => {
        setSelected(value);
      }}
    >
      <span
        className={`custom-option ${selected === value && "selected"} `}
        //   data-value={value}
      >
        {label}
      </span>
    </div>
  ));

  return (
    <div>
      <select {...selectProps} id={name} name={name} className="html-select">
        {optionContent}
      </select>

      <div
        onClick={openDropDown}
        ref={selectRef}
        className="custom-select-wrapper"
      >
        <div className={`custom-select ${isOpen && "open"}`}>
          <div className="custom-select__trigger">
            <span>
              {options.find((item) => item.value === selected)?.label ||
                "Select"}
            </span>
            <div className="arrow"></div>
          </div>

          <div className="custom-options">{customOptionContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Select;
