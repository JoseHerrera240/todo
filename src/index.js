import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );
  
  
  //hoc
  function app(props) {
    return (
      <h1>{props.saludo}, {props.nombre} </h1>
    );
  }
  
  function withSaludo(saludo) {
    return function wrappedComponentWithSaludo(WrappedComponent) {
      return function ComponenteDeVerdad(props) {
        return (
          <>
            <WrappedComponent {...props} saludo={saludo} />
            <p>Estamos acompañando al wrappedComponent</p>
          </>
  
        );
      }
    }
  }
  
  const AppwithSaludo = withSaludo("Wenitas")(app);
  
  
  // ReactDOM.render(
  //   <AppwithLoQueSea nombre="Juanita" />,
  //   // <App saludo="Buenas" nombre="Nath" />,
  //   document.getElementById('root')
  // );
  