import "./ExpenseItem.css";

function ExpenseItem() {
    // want dynamic data (from user) but here using dummmy data
    const expenseDate = new Date(2020,2,21);
    // now expenseData return date obj so to display
    // we have to first convert it to string use :-
    // .toISOString() : build in method conv date obj to string
    const expenseTitle = "Car Insurance";
    const expenseAmount = 260.67;
  return (
    <div className="expense-item">
      {/* <div>{expenseDate}</div> won't display the site will crash as the date is obj have ti conv it to string */}
      <div> {expenseDate.toISOString()} </div>
      <div className="expense-item__description">
        <h2> {expenseTitle} </h2>
        <div className="expense-item__price"> {expenseAmount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
