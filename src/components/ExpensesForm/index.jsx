import Button from "components/Button/index";
import Form from "components/Form/index";
import InputField from "components/InputField/index";
import ExpensesHttp from "http/expenses.http";
import Select from "components/Select/index";
import { validators } from "utils/generic.utils";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/index";

import "./index.scss";

const ExpensesForm = () => {
  const expensesHttp = new ExpensesHttp();

  const submitHandler = async (data) => {
    console.log(data);
    await expensesHttp.createExpense(data);
  };

  const items = [
    { id: 0, value: "food", label: "Food" },
    { id: 1, value: "transport", label: "Transport" },
    { id: 2, value: "utilities", label: "Utilities" },
    { id: 3, value: "clothing", label: "Clothing" },
    { id: 4, value: "other", label: "Other" },
  ];

  return (
    <Form onSubmit={submitHandler}>
      <Select options={items} name="select" />

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
        <textarea
          type="textarea"
          rows="5"
          cols="20"
          placeholder="Description"
        />
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
