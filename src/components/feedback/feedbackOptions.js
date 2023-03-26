import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions =  ({options, onLeaveFeedback }) => {

    return (
        <div className={css.feedback__container}>
            <ul className={css.feedback__list}>
                {options.map((option, index) => (
                    <li className={css.feedback__item} key={index}>
                    <button 
                        className={css.btn}
                        onClick={() => onLeaveFeedback(option)}
                        >
                            {option}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
  };
    
