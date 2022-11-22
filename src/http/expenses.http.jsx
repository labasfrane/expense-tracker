import axios from "axios";
import { BASE_EXPENSES_API_URL } from "constants/api.constants";
import { Expense } from "models/expense.model";
import HttpClient from "./generic.http";

class ExpensesHttp extends HttpClient {
  constructor() {
    super(BASE_EXPENSES_API_URL);
  }

  async getExpenses() {
    const { data } = await axios.get(this.url("/expenses"));

    const expenses = data.map((expense) => {
      return new Expense(expense);
    });

    return expenses;
  }
}

export default ExpensesHttp;
