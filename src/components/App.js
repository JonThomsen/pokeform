import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchForm } from "../actions/formActions";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "./app.css";

class App extends Component {
  fetchForm() {
    this.props.dispatch(fetchForm());
    console.log(this.props);
  }

  render() {
    console.log(this.props.form);
    const { form } = this.props;
    const mappedInputs = form.map(item => (
      <FormGroup row key={item.componentId}>
        <Label className="align-right" sm={4}>
          {item.label}
        </Label>
        <Col sm={6}>
          {item.type === "textfield" && <Input type="text" name={item.label} />}
          {item.type === "datefield" && <Input type="date" name={item.label} />}
          {item.type === "ratingfield" && (
            <Input type="text" name={item.label} />
          )}
          {item.type === "urlfield" && (
            <Input type="url" pattern="https://.*" name={item.label} />
          )}
          {item.helpBlock !== null && (
            <FormText color="muted">{item.helpBlock}</FormText>
          )}
        </Col>
      </FormGroup>
    ));

    return (
      <div>
        <Container className="form-pokemon">
          <h1>Cadastro de Pokémon</h1>
          <Button size="sm" color="primary" onClick={this.fetchForm.bind(this)}>
            Load Form
          </Button>
          <Form>{mappedInputs}</Form>
        </Container>
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
