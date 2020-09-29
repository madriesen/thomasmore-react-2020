import React from "react";
import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";

import Home from "./components/home";
import Stuff from "./components/stuff";
import Contact from "./components/contact";
import Class from "./components/class";
import TodoList from "./components/todo_list";

const Header = () => (
  <div>
    <h1>Simple Single Page Application</h1>
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/" className="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/stuff" className="active">
          Stuff
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/class" className="active">
          Class
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact" className="active">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/todo" className="active">
          ToDo
        </NavLink>
      </li>
    </ul>
  </div>
);

const Main = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/stuff" component={Stuff} />
      <Route path="/contact" component={Contact} />
      <Route path="/class" component={Class} />
      <Route path="/todo" component={TodoList} />
    </Switch>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default App;
