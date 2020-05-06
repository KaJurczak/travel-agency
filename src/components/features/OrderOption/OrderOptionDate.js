import React from 'react';
import DatePicker from 'react-datepicker';
// import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    const {setOptionValue} = this.props;
    this.setState({
      startDate: date,
    });
    // console.log('date', date);
    setOptionValue(date);
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;