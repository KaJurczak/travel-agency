import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import { formatTime } from '../../../utils/formatTime';
// import {Row, Col} from 'react-flexbox-grid';

class HappyHourAd extends React.Component {
  constructor(){
    super();
  
    /* run this.forceUpdate() every second */
    setInterval((() => this.forceUpdate()),1000);
    // console.log('this.forceUpdate()', (() => this.forceUpdate()));
  }
  
  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    // console.log('nextNoon', nextNoon);
    // console.log(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
    // console.log(new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0)));
    // console.log('currentTime.getUTCHours()', currentTime.getUTCHours());
    // console.log('nextNoon.setUTCDate(currentTime.getUTCDate()+1)', nextNoon.setUTCDate(currentTime.getUTCDate()+1));
    // console.log('nextNoon.getTime()', nextNoon.getTime());
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  
  render(){
    const {title, promoDescription} = this.props;
    const CountdownTime = this.getCountdownTime();
    // console.log('this.getCountdownTime()', this.getCountdownTime());
    
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
          {CountdownTime > 23 * 60 * 60 
            ? promoDescription 
            : formatTime(CountdownTime)}
        </div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;