import { cloneElement } from "react";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLOR_DANGER, COLOR_PRIMARY } from "constants/colors.constants";

import "./index.scss";

const InputField = ({ label, icon, children, formControl = null }) => {
  const { register, formState } = useFormContext();
  const [id, validators] = formControl || [];
  const content = cloneElement(children, { ...register(id, validators) });
  const errorMessage = formState.errors[id]?.message;
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <div className="input-field__input">
        {content}
        <FontAwesomeIcon
          icon={icon}
          color={errorMessage ? COLOR_DANGER : COLOR_PRIMARY}
        />
      </div>
      <span className="input-field__error">{errorMessage}</span>
    </div>
  );
};

export default InputField;
