import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchForm } from "../actions/formActions";
import Rater from "react-rater";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Spinner
} from "reactstrap";
import "react-rater/lib/react-rater.css";
import "./app.css";

class App extends Component {
  fetchForm() {
    this.props.dispatch(fetchForm());
    console.log(this.props);
  }

  render() {
    console.log(this.props.form);
    const { form, fetching } = this.props;
    const mappedInputs = form.map(item => (
      <FormGroup className="form-pokemon" row key={item.componentId}>
        <Label className="align-right" sm={4}>
          {item.label}
        </Label>
        <Col sm={6}>
          {item.type === "textfield" && <Input type="text" name={item.label} />}
          {item.type === "datefield" && <Input type="date" name={item.label} />}
          {item.type === "ratingfield" && (
            //<Input type="text" name={item.label} />
            <Rater className="star-rating" total={5} rating={0} />
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
        <Container className="container-form">
          <h1>Cadastro de Pokémon</h1>
          <Button size="sm" color="primary" onClick={this.fetchForm.bind(this)}>
            Load Form
          </Button>
          {"  "}
          {fetching && <Spinner size="sm" color="primary" />}
          <Form>{mappedInputs}</Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    form: store.form,
    fetching: store.fetching
  };
};

export default connect(mapStateToProps)(App);
