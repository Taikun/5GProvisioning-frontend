import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Outlet, useNavigate } from 'react-router-dom';
import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";

import CreateUDMSubscriber from "./components/create-udmsubscriber.component";
import EditUDMSubscriber from "./components/edit-udmsubscriber.component";
import UDMSubscriberList from "./components/udmsubscriber-list.component";

function App() {
  return (<BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-udmsubscriber"} className="nav-link">
                5G Provisioning/activation App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-udmsubscriber"} className="nav-link">
                  Create UDMSubscriber
                </Link>
              </Nav>

              <Nav>
                <Link to={"/edit-udmsubscriber/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav>

              <Nav>
                <Link to={"/udmsubscriber-list"} className="nav-link">
                  UDMSubscribers List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container id="Daniel">
        <Row>
          <Col md={12}>
            <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateUDMSubscriber />} />
                  <Route path="/create-udmsubscriber" element={<CreateUDMSubscriber />} />
                  <Route path="/edit-udmsubscriber/:id" element={<EditUDMSubscriber />} />
                  <Route path="/udmsubscriber-list" element={<UDMSubscriberList />} />
                </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </BrowserRouter>);
}

export default App;