import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

// function Expenses(props) {
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((exp, key) => (
         <ExpenseItem key={key} date={exp.date} title={exp.title} amount={exp.amount} /> )
      )}
      {/* <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      /> */}
    </Card>
  );
};

export default Expenses;
