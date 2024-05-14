import PropTypes from 'prop-types';

const Message = ({ msg }) => {
  return (
    <div>
        <p>A mensagem é: {msg}</p>
    </div>
  )
}

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;