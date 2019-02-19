import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchForm } from "../actions/formActions";
import StarRating from "react-star-rating";

class App extends Component {
  fetchForm() {
    this.props.dispatch(fetchForm());
    console.log(this.props);
  }

  render() {
    console.log(this.props.form);
    const { form } = this.props;
    const mappedInputs = form.map(item => (
      <div key={item.componentId}>
        <label>{item.label}</label>
        {item.type === "textfield" && <input type="text" name={item.label} />}
        {item.type === "datefield" && <input type="date" name={item.label} />}
        {item.type === "ratingfield" && <input type="text" name={item.label} />}
        {item.type === "urlfield" && (
          <input type="url" pattern="https://.*" name={item.label} />
        )}
        {item.helpBlock !== null && <span>{item.helpBlock}</span>}
      </div>
    ));

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
