import ExpenseDashboard from "./ExpenseDashboard/index";
import NavigationBar from "components/NavigationBar/index";
import { ExpensesContextProvider } from "context/expenses.ctx";

import "./index.scss";

const App = () => {
  const NavigationItems = [
    { name: "home", path: "" },
    {
      name: "total",
      path: "total",
    },
  ];

  return (
    <ExpensesContextProvider>
      <header className="header">
        <h1 className="header__title">Expense Tracker</h1>
      </header>
      <main>
        <NavigationBar items={NavigationItems} />
        <ExpenseDashboard />
      </main>
    </ExpensesContextProvider>
  );
};

export default App;
