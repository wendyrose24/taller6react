import React from 'react';
import { useTema } from '../context/TemaContext';

const CambiarTema = () => {
  const { tema, cambiarTema } = useTema();

  return (
    <div style={{ color: tema === 'claro' ? 'black' : 'white', backgroundColor: tema === 'claro' ? 'white' : 'black' }}>
      <h1>Tema actual: {tema}</h1>
      <button onClick={cambiarTema}>Cambiar Tema</button>
    </div>
  );
};

export default CambiarTema;
