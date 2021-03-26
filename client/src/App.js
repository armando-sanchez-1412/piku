import React, { Component } from "react";
import logo from "./book.png";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  getUsers() {
    fetch("/users")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          users: result
        });
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo"></img>
          <h1 className="App-title">Welcome to Pikuuuu</h1>
          <button type="button" class="btn btn-info btn-lg">Inicio</button>
        </header>
        <div className="ds-loader-header">{this.state.users && this.state.users.map(user => {
          return (
            <div className="ds-mar-b-1 ds-pad-t-1 ds-panel ds-panel-rounded">
              Nombre: {user.name} Edad: {user.age}
            </div>
          );
        })}</div>
      </div>

    );
  }
}

export default App;
