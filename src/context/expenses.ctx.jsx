import { useState, createContext } from "react";

const ExpensesContext = createContext({
  data: [],
  setData: (data) => {},
});

const ExpensesContextProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <ExpensesContext.Provider value={{ data, setData }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContext, ExpensesContextProvider };
