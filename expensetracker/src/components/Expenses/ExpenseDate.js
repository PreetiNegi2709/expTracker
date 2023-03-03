import './ExpenseDate.css';

// function ExpenseDate(props) {
const ExpenseDate = (props) => {
  // props.date.toISOString() = will convert date object to string (2020-08-13T18:30:00.000Z)
  // .toLocaleString() method returns a string with a language-sensitive (eng) representation of date
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
}

export default ExpenseDate;
