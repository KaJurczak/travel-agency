import React from 'react';
// import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({tripCost, options}) => {
  const price = calculateTotal(formatPrice(tripCost), options);
  console.log('tripCost', tripCost, 'options', options);

  return (
    <h2 className={styles.component}>
      Total:
      <strong>
        {console.log('Total price should be here')}
        ${price}
      </strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
