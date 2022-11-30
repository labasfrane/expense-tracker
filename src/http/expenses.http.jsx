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

  async getExpense(id) {
    const { data } = await axios.get(this.url(`/expenses/${id}`));

    return new Expense(data);
  }

  async createExpense(expense) {
    const { data } = await axios.post(this.url("/expenses"), expense);

    return new Expense(data);
  }

  async replaceExpense(id, ...expense) {
    const { data } = await axios.put(this.url(`/expenses/${id}`), expense);

    return new Expense(data);
  }

  async updateExpense(id, body) {
    const { data } = await axios.patch(this.url(`/expenses/${id}`), body);

    return new Expense(data);
  }

  async deleteExpense(id) {
    const { data } = await axios.delete(this.url(`/expenses/${id}`));

    return data;
  }
}

export default ExpensesHttp;
