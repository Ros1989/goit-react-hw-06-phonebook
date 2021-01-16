import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-action';
import ContactsFilter from './ContactsFilter';

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnInputFilter: value => dispatch(changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
