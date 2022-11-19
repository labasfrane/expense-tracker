import "./index.scss";

const ExpenseCard = ({ expense }) => {
  const { type, description, value, date } = expense;

  return (
    <article className="card">
      <h3>{type}</h3>
      <span>{value}</span>
      <span>{description}</span>
      <span>{date}</span>
    </article>
  );
};

export default ExpenseCard;
