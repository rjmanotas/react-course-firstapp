import React, { Component } from 'react'; 
import swal from 'sweetalert';

export default class registerForm extends Component {

  
  constructor () {
    super();
    this.state = {
      nombrePersona: '',
      email: '',
      celular: '',
      edad: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dataStored = this.dataStored.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddPersona(this.state);
    this.setState({
      nombrePersona: '',
      email: '',
      celular: '',
      edad: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }
  
//Alerta con fadeout de 5 segundos
  dataStored() {
    // this.setState({nombrePersona})
    swal ({
      title: "¡Registro exitoso!",
      text: "Tu información fué enviada con éxito. Estaremos en contacto contigo.",
      type: "success",
      timer: 5000
      });
  }

  render() {

    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input required
              type="text"
              name="nombrePersona"
              className="form-control"
              value={this.state.nombrePersona}
              onChange={this.handleInputChange}
              placeholder="Nombre completo"
              />
          </div>
          <div className="form-group">
            <input required
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="e-mail"
              />
          </div>
          <div className="form-group">
            <input required
              type="text"
              name="celular"
              className="form-control"
              value={this.state.celular}
              onChange={this.handleInputChange}
              placeholder="Celular"
              />
          </div>
          <div className="form-group">
            <input
                required
                name="edad"
                type="number"
                min="18"
                max="100"
                className="form-control"
                value={this.state.edad}
                onChange={this.handleInputChange}
              > 
            </input>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.dataStored}>
            Guardar
          </button>
        </form>
      </div>
    )
  }

};
