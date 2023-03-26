import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
       <div className={css.statisctics__container}>
         <ul className={css.statisctics__list}>
        <li className={css.statisctics__item}>
            <span className={css.statisctics__itemText}>Good: {good}</span>
        </li>
        <li className={css.statisctics__item}>
            <span className={css.statisctics__itemText}>Neutral: {neutral}</span>
        </li>
        <li className={css.statisctics__item}>
            <span className={css.statisctics__itemText}>Bad: {bad}</span>
        </li>
        <li className={css.statisctics__item}>
            <span className={css.statisctics__itemText}>Total: {total}</span>
        </li>
        <li className={css.statisctics__item}>
            <span className={css.statisctics__itemText}>Positive Feedback: {positivePercentage} %</span>
        </li>
    </ul>
       </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };