import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{ title}</h2>

  <ul className="stat-list">
                {stats.map(({id, label, percentage}) => (
                   
                    <li className="item" key={id}>
                        <span class="label">{label}</span>
                        <span class="percentage">{percentage}%</span>
                    </li>
                ))}
    
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
        }),
    )
}