import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import PetShowPage from './components/PetShowPage';
import PetItems from './components/PetItems'

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <ProtectedRoute exact path="/findYourPet" component={findYourPet} /> */}
        <ProtectedRoute exact path="/organizations/:organization_id/pets/:id" component={PetShowPage} />
        <ProtectedRoute exact path="/pets/:pet_id/items/:item_id" component={PetItems} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>
)

export default App;