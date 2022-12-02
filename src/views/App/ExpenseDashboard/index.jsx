import { useEffect, useMemo, useCallback, useContext } from "react";
import ExpensesForm from "components/ExpensesForm/index";
import ExpensesList from "components/ExpensesList/index";
import ExpensesHttp from "http/expenses.http";
import { ExpensesContext } from "context/expenses.ctx";

import "./index.scss";

const ExpenseDashboard = () => {
  const { data, setData } = useContext(ExpensesContext);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);

  const fetchExpenses = useCallback(async () => {
    const getExpenses = await expensesHttp.getExpenses();

    setData(getExpenses);
  }, [expensesHttp, setData]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);
  return (
    <>
      <div className="dashboard">
        <ExpensesForm className="dashboard__form" />
        <ExpensesList className="dashboard__list" expensesData={data} />
      </div>
    </>
  );
};

export default ExpenseDashboard;
