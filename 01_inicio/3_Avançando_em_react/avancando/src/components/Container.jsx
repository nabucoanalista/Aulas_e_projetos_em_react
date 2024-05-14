import PropTypes from 'prop-types'; // Esse import deve ser mantido pois sem ele o código não funciona. o motivo é que o componente Container usa o PropTypes. PropType é uma biblioteca que ajuda a validar as propriedades que são passadas para um componente.

const Container = ({ children }) => {
  return (
    <div>
        <h1>Conteúdo do componente pai: </h1>
        {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;