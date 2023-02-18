import PropTypes from "prop-types";
import t from './Statistics.module.css'

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];

export const Statistics = ({ title, stats }) => {
    return (
        <section className={t.statistics}>
            <h2 className={t.title}>{ title }</h2>

  <ul className={t.list}>
                {stats.map(({id, label, percentage}, index) => (
                   
                    <li className={t.item} key={id} style={{background: colors[index]}}>
                        <span class={t.label}>{label}</span>
                        <span class={t.percentage}>{percentage}%</span>
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