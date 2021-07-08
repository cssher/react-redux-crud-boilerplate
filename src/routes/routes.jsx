import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Contact } from "../pages/contact/Contact";
import { CreateContact } from "../pages/create-contact/CreateContact";

export const routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/people/:id" exact render={() => <Contact />} />

        <Route path="/new" exact render={() => <CreateContact />} />
      </Switch>
    </div>
  );
};
