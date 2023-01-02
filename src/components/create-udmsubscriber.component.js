import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateUDMSubscriber extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeIdSubscriber = this.onChangeIdSubscriber.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeMeta = this.onChangeMeta.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      idSubscriber: "",
      body: "",
      meta: "",
    };
  }

  onChangeIdSubscriber(e) {
    console.log(e.target.value)
    this.setState({ idSubscriber: e.target.value });
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value });
  }

  onChangeMeta(e) {
    this.setState({ meta: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`UDMsubscriber successfully created!`);
    console.log(`Id Subscriber: ${this.state.idSubscriber}`);
    console.log(`Body: ${this.state.body}`);
    console.log(`Meta: ${this.state.meta}`);
    const udmSubscriberObject = {
      idSubscriber: this.state.idSubscriber,
      body: this.state.body,
      meta: this.state.meta,
    };
    axios
      .post(
        "http://localhost:4000/udmSubscribers/create-udm-subscriber",
        udmSubscriberObject
      )
      .then((res) => console.log(res.data));

    this.setState({ idSubscriber: "", body: "", meta: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="IdSubscriber">
            <Form.Label>IdSubscriber</Form.Label>
            <Form.Control
              type="text"
              value={this.state.idsubscriber}
              onChange={this.onChangeIdSubscriber}
            />
          </Form.Group>

          <Form.Group controlId="Body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              type="body"
              value={this.state.body}
              onChange={this.onChangeBody}
            />
          </Form.Group>

          <Form.Group controlId="Meta">
            <Form.Label>Meta</Form.Label>
            <Form.Control
              type="meta"
              value={this.state.meta}
              onChange={this.onChangeMeta}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create UDMSubscriber
          </Button>
        </Form>
      </div>
    );
  }
}
