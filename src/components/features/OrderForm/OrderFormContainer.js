import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';
// import {getAllFilters, changeSearchPhrase, changeDurationValue, addTags, removeTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

// const mapDispatchToProps = dispatch => ({
//   changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
//   // TODO - add more dispatchers for other filters
//   changeDurationValue: (type, value) => dispatch(changeDurationValue({type, value})),
//   addTags: tags => dispatch(addTags(tags)),
//   removeTags: tags => dispatch(removeTags(tags)),
// });

export default connect(mapStateToProps)(OrderForm);
