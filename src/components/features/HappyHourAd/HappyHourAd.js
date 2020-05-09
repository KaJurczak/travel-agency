import React from 'react';
import PropTypes from 'prop-types';
import styles from './TripListOptions.scss';
// import {Row, Col} from 'react-flexbox-grid';

class HappyHourAd extends React.Component {
  render(){

    const {title, promoDescription} = this.props;

    return(
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
      </div>
    );
  }

}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;