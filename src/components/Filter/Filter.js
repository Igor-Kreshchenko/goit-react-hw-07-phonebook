import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value } }) => dispatch(actions.filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
