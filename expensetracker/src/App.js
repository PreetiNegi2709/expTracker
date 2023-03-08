import "./App.css";
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
//inital state (will pass in useState)
const dummyData = [
  {
  id: "e1",
  title: "Toilet Paper",
  amount: 94.12,
  date: new Date(2020, 7, 14),
},
{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
{
  id: "e3",
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  id: "e4",
  title: "New Desk (Wooden)",
  amount: 450,
  date: new Date(2021, 5, 12),
}
]
// function App() {
const App = () => {
  const [expenses,setExpenses] = useState(dummyData);

  const addExpenseHandler = (exp) =>{ //what we get from the child is expense
    console.log(exp)
    setExpenses((prevState)=>{ // previous(initial) state is expenses (name can be anything) 
      return [...prevState,exp]
    })
    // setExpenses([...expenses,exp])
  }
  console.log(expenses)

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
