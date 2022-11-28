import Button from "components/Button/index";
import InputField from "components/InputField/index";
import Form from "components/Form/index";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ExpensesHttp from "http/expenses.http";
import "./index.scss";
import { validators } from "utils/generic.utils";

const ExpensesForm = () => {
  const expensesHttp = new ExpensesHttp();

  const submitHandler = async (data) => {
    console.log(data);
    await expensesHttp.createExpense(data);
  };

  return (
    <Form onSubmit={submitHandler}>
      <select>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Clothing">Clothing</option>
        <option value="Other">Other</option>
      </select>
      <InputField
        label="Description"
        icon={faComment}
        formControl={[
          "description",
          validators({
            required: true,
            maxLength: 40,
          }),
        ]}
      >
        <input type="textarea" placeholder="Description" />
      </InputField>
      <input type="date" />
      <Button>Submit</Button>
    </Form>
  );
};

export default ExpensesForm;
