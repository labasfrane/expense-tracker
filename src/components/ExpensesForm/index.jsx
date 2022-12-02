import Button from "components/Button/index";
import Form from "components/Form/index";
import InputField from "components/InputField/index";
import ExpensesHttp from "http/expenses.http";
import { validators } from "utils/generic.utils";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/index";

import "./index.scss";
import DropDown from "components/DropDown/index";

const ExpensesForm = () => {
  const expensesHttp = new ExpensesHttp();

  const submitHandler = async (data) => {
    console.log(data);
    await expensesHttp.createExpense(data);
  };

  const options = ["Food", "Transport", "Utilities", "Clothing", "Other"];

  return (
    <Form onSubmit={submitHandler}>
      <DropDown data={options} />
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
        <input type="text" placeholder="Description" />
      </InputField>
      <InputField
        label="Value"
        icon={faMoneyBill}
        formControl={[
          "value",
          validators({
            required: true,
            maxLength: 10,
          }),
        ]}
      >
        <input type="text" placeholder="Value" />
      </InputField>
      <input type="date" />
      <Button>Submit</Button>
    </Form>
  );
};

export default ExpensesForm;
