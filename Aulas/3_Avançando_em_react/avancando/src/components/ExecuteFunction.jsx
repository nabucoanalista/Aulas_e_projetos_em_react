import PropTypes from 'prop-types';

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
        <button onClick={myFunction}>Executar função</button>
    </div>
  )
}

ExecuteFunction.propTypes = {
  myFunction: PropTypes.func.isRequired,
};

export default ExecuteFunction;