import ExpensesList from "components/ExpensesList/index";

const listOfExpenses = [
  {
    id: 0,
    type: "Food",
    description: "Kruh, mlijeko, ...",
    value: 20,
    date: "November",
  },
  {
    id: 1,
    type: "Food",
    description: "Voda, struja, ...",
    value: 150,
    date: "November",
  },
];

const App = () => {
  return (
    <>
      <header>Header with title</header>
      <main>
        <h1>Heading</h1>
        <ExpensesList expensesData={listOfExpenses} />
      </main>
    </>
  );
};

console.log(listOfExpenses);

export default App;
