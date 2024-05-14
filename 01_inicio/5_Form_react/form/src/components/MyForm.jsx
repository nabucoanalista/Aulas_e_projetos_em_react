import './MyForm.css';

import { useState } from 'react';

import PropTypes from 'prop-types';

const MyForm = ({ userName, userEmail }) => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState('');

  const [role, setRole] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  // 5 - envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, bio, role);
    // 7 - limpar formulário
    setName('');
    setEmail('');
    setBio('');
    setRole('');
  };


  console.log(name, email);

  return ( 
    <div>
      {/* 1 - Criação do formulário */}
      {/* 5 - envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input 
            type="text" 
            name="name" 
            placeholder="Digite o seu nome"
            onChange={handleName}
            // 6 - controlled input
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail: </span>
          <input 
            type="email" 
            name="email" 
            placeholder="Digite o seu e-mail"
            // 4 - simplificando manipulação de dados
            onChange={(e) => setEmail(e.target.value)}
            // 6 - controlled input
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio: </span>
          <textarea 
            name="bio" 
            placeholder="Digite uma descrição" 
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select 
            name="role" 
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

MyForm.propTypes = {
  userName: PropTypes.string,
  userEmail: PropTypes.string,
}

export default MyForm;