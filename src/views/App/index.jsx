import ExpenseDashboard from "./ExpenseDashboard/index";
import { ExpensesContextProvider } from "context/expenses.ctx";
import NavigationBar from "components/NavigationBar/index";

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
      <header>Header with title</header>
      <main>
        <h1>Heading</h1>
        <NavigationBar items={NavigationItems} />
        <ExpenseDashboard />
      </main>
    </ExpensesContextProvider>
  );
};

export default App;
