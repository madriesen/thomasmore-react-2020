import React from 'react';

import Home from './components/home';
import Stuff from './components/stuff';
import Contact from './components/contact';
import Class from './components/class';
import TodoList from './components/todo_list';

const Header = () => (
    <div>
        <h1>Simple Single Page Application</h1>
        <ul className="header">

        </ul>
    </div>
)

const Main = () => (
    <div className="content">
        
    </div>
)

const App = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
};

export default App;