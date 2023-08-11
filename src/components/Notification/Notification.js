import PropTypes from 'prop-types';

const Notification = ({ message }) => <p style={{ color: 'red' }}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
