import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDBContainer as Container, MDBTypography as Type } from 'mdbreact';

function Hello() {
  return (
    <Container className="text-center">
      <Type tag="h1" variant="h1-responsive">
        Hello, Electron-React!
      </Type>
    </Container>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
