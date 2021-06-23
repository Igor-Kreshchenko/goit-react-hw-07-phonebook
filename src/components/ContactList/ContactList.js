import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import Loader from '../Loader';
import styles from './ContactList.module.css';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts, getIsLoading, getError } from '../../redux/contacts/contacts-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, isLoadingContacts, error } = this.props;

    return (
      <>
        {isLoadingContacts && <Loader />}
        {error && <h2>404 Not Found</h2>}

        <ul className={styles.list}>
          {contacts.map(contact => {
            const { id, name, number } = contact;

            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
  isLoadingContacts: getIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
