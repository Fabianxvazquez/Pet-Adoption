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
import FindYourPet from './components/FindYourPet';
import EditOrganizationForm from './components/EditOrganizationForm';
import CreateOrganizationForm from './components/CreateOrganizationForm';
import PetForm from './forms/PetForm';
import EditPetForm from "./components/EditPetForm"


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/findYourPet" component={FindYourPet} />
        <ProtectedRoute exact path="/organization/:organization_id/edit" component={EditOrganizationForm} />
        <ProtectedRoute exact path="/organization/create" component={CreateOrganizationForm} />
        <ProtectedRoute exact path="/pet/create" component={PetForm} />
        <ProtectedRoute exact path="/organizations/:organization_id/pets/:id" component={PetShowPage} />
        <ProtectedRoute exact path="/organizations/:organization_id/pets/:id/edit" component={EditPetForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>
)

export default App;