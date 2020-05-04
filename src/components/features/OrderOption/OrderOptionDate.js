import React from 'react';
import DatePicker from 'react-datepicker';
// import styles from './OrderOption.scss';
 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };
 
  handleChange = date => {
    this.setState({
      startDate: date,
    });
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

export default OrderOptionDate;