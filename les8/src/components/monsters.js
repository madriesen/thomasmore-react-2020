import React from "react";
import PropTypes from "prop-types";

import MonsterForm from './monster_form';
import MonstersList from './monsters_list';

// TODO: aanvullen
const Monsters = ( {  } ) => {
    // TODO: aanvullen in de JSX-code
    return (
        <div className="App">
            <div className="navbar">
                <h2 className="center">Monsters Inc.</h2>
            </div>
            <MonsterForm   />
            <MonstersList    />
        </div>
    );
};

Monsters.propTypes = {
    // TODO: aanvullen

};

export default Monsters;
