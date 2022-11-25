import React from "react";

const InputField = ({ label, register, required }) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, required)} />
    </>
  );
};

export default InputField;
