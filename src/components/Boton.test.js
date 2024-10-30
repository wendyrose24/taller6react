import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from './Boton';

test('muestra el texto correcto y cambia al hacer clic', () => {
  const { getByText } = render(<Boton />);

  const boton = getByText('Hacer clic aquí');
  expect(boton).toBeInTheDocument();

  fireEvent.click(boton);
  expect(getByText('¡Gracias por hacer clic!')).toBeInTheDocument();
});
