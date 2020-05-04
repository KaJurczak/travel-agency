import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input 
      type='text' 
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}>
    </input>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
};
export default OrderOptionText;