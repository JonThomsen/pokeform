import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchForm } from "../actions/formActions";

class App extends Component {
  fetchForm() {
    this.props.dispatch(fetchForm());
    console.log(this.props);
  }

  render() {
    console.log(this.props.form);
    const { form } = this.props;
    const mappedInputs = form.map(input => <label>{input.label}</label>);

    // if (!form.length) {
    //   return  }
    return (
      <div>
        <h1>Cadastro de Pokémon</h1>
        <button onClick={this.fetchForm.bind(this)}>Load Form</button>
        <form>{mappedInputs}</form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    form: store.form
  };
};

export default connect(mapStateToProps)(App);
