import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';
import styles from '../ContactList.module.css';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.number}>{number}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => onClick(id)}
      >
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};
