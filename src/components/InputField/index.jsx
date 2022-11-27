import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cloneElement } from "react";
import { useForm } from "react-hook-form";

import "./index.scss";

const InputField = ({ label, icon, children, id }) => {
  const { register } = useForm();
  const content = cloneElement(children, { ...register(id) });
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <div className="input-field__input">
        <FontAwesomeIcon icon={icon} />
        {content}
      </div>
      <span className="input-field__error">Error message</span>
    </div>
  );
};

export default InputField;
