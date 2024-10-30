import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { TemaProvider } from './context/TemaContext';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Contador from './components/Contador';
import CambiarTema from './components/CambiarTema';

const App = () => {
  return (
    <Provider store={store}>
      <TemaProvider>
        <Router>
          <nav>
            <Link to="/inicio">Inicio</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contador">Contador</Link>
          </nav>
          <Route path="/inicio" component={Inicio} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contador" component={Contador} />
          <CambiarTema />
        </Router>
      </TemaProvider>
    </Provider>
  );
};

export default App;
