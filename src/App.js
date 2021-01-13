import React, { Component } from 'react';

import './App.css';
// data
import { personas } from './data/personas.json';
// subcomponentes
import PersonaForm from './components/PersonaForm';
import Menu from './components/Menu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas,
      name: ''
    }
    this.handleAddPersona = this.handleAddPersona.bind(this);
    this.handlerClick = this.handlerClick.bind(this);


  }
  //handler añadir persona
  handleAddPersona(persona) {
    this.setState({
      personas: [...this.state.personas, persona]
    })
  }
  //handler mensaje bienvenida
  handlerClick(name){
    this.setState({name})
    //console.log('“Hola, bienvenido, sabemos que quieres viajar en ', {name})

}


  render() {
    const personas = this.state.personas.map((persona, i) => {
      return (
        // <div className="container">
        //   <div className="col-md-12" key={i}>
        //   <div className="card mt-4 p-2">
        //     <div className="card-title">
        //       Nombre: {persona.nombrePersona}
        //     </div>
        //     <div>
        //         Edad: {persona.edad}
        //       </div>
        //     <div>
        //       Celular: {persona.celular}
        //     </div>
        //     <div>
        //       E-mail: {persona.email}
        //     </div>
        //     <div className="card-footer">
        //     </div>
        //   </div>
        // </div>
        // </div>
         console.log(persona)
         
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark text-light">
          <a className="navbar-brand" href="/">
          Front-End React Developer test.
          </a>
          <Menu handlerClick={ this.handlerClick }/>
        </nav>

        <div className="content text-center">
          {this.state.name && <div className="card card-body m-3">
           <h4>Hola, bienvenido. Sabemos que quieres viajar en {this.state.name}. Por favor, diligencia el siguiente formulario:</h4>
          </div>}
        </div>

        <div className="container">
          <div className="row mt-2">
            <div className="col-md-4 text-center">
              <PersonaForm onAddPersona={this.handleAddPersona}></PersonaForm>
            </div>

            <div className="col-md-4">
               {personas}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
