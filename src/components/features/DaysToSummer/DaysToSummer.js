import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCountdownTime(){
    const currentTime = new Date();
    //summer time 21.06. to 23.09
    const nextSummerBeginning = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21, 0, 0, 0, 0));
    
    if(currentTime.getUTCMonth() >= 7){
      nextSummerBeginning.setUTCFullYear(currentTime.getUTCFullYear()+1);
    }

    // console.log('nextSummerBeginning', nextSummerBeginning, 'nextSummerEnd', nextSummerEnd);

    return Math.round((nextSummerBeginning.getTime() - currentTime.getTime())/1000/24/60/60);
  }

  getRightDescription(){
    const daysToSummer = this.getCountdownTime();
    const currentTime = new Date();
    const daysInYear = (new Date(currentTime.getUTCFullYear(), 11, 31, 0, 0, 0, 0).getTime() - new Date(currentTime.getUTCFullYear(), 0, 1, 0, 0, 0, 0).getTime() )/24/60/60/1000 ;
    const summerDays = (10+31*2+23);
    // console.log('daysInYear', daysInYear, 'summerDays', summerDays);

    if(daysToSummer>0 && daysToSummer<=(daysInYear - summerDays)) {
      if(daysToSummer==1){
        return(`${daysToSummer} day to summer`);
      } else {
        return (`${daysToSummer} days to summer`);
      }
    } 
    else {
      null;
    }
  }

  render(){
    const description = this.getRightDescription();

    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{description}</h3>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;