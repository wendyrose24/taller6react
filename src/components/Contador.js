import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar } from '../redux/contadorSlice';

const Contador = () => {
  const valor = useSelector((state) => state.contador.valor);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{valor}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(decrementar())}>Decrementar</button>
    </div>
  );
};

export default Contador;
