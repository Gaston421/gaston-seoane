import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import './Registro.css'; 

class RegistroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      confirmPassword: '',
      fechaNacimiento: '',
      nacionalidad: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    // Por ejemplo, puedes usar fetch() o axios para realizar una solicitud POST al servidor.
    console.log('Datos del formulario:', this.state);
  };

  render() {
    return (
      <div class="form-container">
        <NavBar />
        <h1>Formulario de Registro</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={this.state.apellido}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Repetir Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={this.state.fechaNacimiento}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="nacionalidad">Nacionalidad:</label>
            <input
              type="text"
              id="nacionalidad"
              name="nacionalidad"
              value={this.state.nacionalidad}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default RegistroForm;
