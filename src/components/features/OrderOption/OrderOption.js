import React from 'react';
// import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOption= ({name}) => {
  // console.log('name in OrderOption', name);

  return (
    <div className={styles.component}>
      <h3 className={styles.title}>
        {name}
      </h3>
    </div>
  );
};

OrderOption.propTypes = {
  name: PropTypes.string,
};

export default OrderOption;