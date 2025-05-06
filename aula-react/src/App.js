import './App.css';
import { useState } from 'react';
import senailogo from './senailogo.png';


function App() {
  
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'José']);

  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe na lista.')
      return;
    }
  }

  return (
    <div className='App'>
      <img src={senailogo} alt="Logo do SENAI" className="logo" />
      <div className='container'>
      </div>

    <div className='square'></div>
    <h2>Adicionar usuário</h2>
      <input
      type='text'
      placeholder='Digite o nome do usuário'
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}      
    />
    <button onClick = {adicionarUsuario}>Adicionar</button>
    <hr/>
    <h2>Lista de usuarios</h2>
    <ol> 
      {usuarios.map((usuario,index) => (
      <li key={index}>{usuario}</li>
      ))}
      </ol>
    </div>
  );
}

export default App;
