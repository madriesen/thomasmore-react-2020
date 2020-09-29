import React from "react";
import { Switch, Route } from "react-router-dom";

import Students from "./students";
import Student from "./student";

const Class = (props) => {
  return (
    <Switch>
      <Route exact path={props.match.path} component={Students} />
      <Route path={`${props.match.path}/:studentId`} component={Student} />
    </Switch>
  );
};

export default Class;
