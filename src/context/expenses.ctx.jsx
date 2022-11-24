import { useState, createContext } from "react";

const ExpensesContext = createContext({});

const ExpensesContextProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <ExpensesContext.Provider value={{ data, setData }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContext, ExpensesContextProvider };
