import { connect } from 'react-redux';
import { deleteItem } from '../../redux/contacts/contacts-action';
import ContactList from './ContactsList';

const mapStateToProps = state => {
  return {
    items: state.contacts.items.filter(item =>
      item.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
