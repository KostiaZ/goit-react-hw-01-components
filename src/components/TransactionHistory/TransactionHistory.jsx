import PropTypes from "prop-types";
import t from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
  return (
  <table className={t.transaction}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td class={t.type}>{type}</td>
      <td>{ amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
  </tbody>


</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
    }),
  )
}