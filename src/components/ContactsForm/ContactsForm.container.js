import { connect } from 'react-redux';
import { addItem } from '../../redux/contacts/contacts-action';
import ContactsForm from './ContactsForm';

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddContact: (name, number) => dispatch(addItem(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
