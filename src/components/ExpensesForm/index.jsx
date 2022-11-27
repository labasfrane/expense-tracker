import Button from "components/Button/index";
import InputField from "components/InputField/index";
import { useForm } from "react-hook-form";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const ExpensesForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <select {...register("select")}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Clothing">Clothing</option>
        <option value="Other">Other</option>
      </select>

      <InputField icon={faComment} id="description">
        <input type="textarea" placeholder="Description" />
      </InputField>
      <input type="date" {...register("date")} />
      <Button>Submit</Button>
    </form>
  );
};

export default ExpensesForm;
