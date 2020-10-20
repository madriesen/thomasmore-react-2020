import React from "react";
import PropTypes from "prop-types";

import Monster from "./monster";
import MonsterEdit from "./monster_edit";

// TODO: aanvullen
const MonstersList = ({ monsters }) => {
  // TODO: volgende lijn wegdoen en iterator uit commentaar plaatsen
  // const output = '';

  const output = monsters.map((monster, i) => {
    // TODO: aanvullen in de JSX-code
    // TODO: bekijk ook aandachting de inline if-then-else, dus: { voorwaarde ? then-gedeelte : else-gedeelte }
    return (
      <div key={i}>
        {monster.isEditing ? <MonsterEdit /> : <Monster monster={monster} />}
      </div>
    );
  });

  return (
    <div>
      <h1 className="post_heading">All Monsters</h1>
      {output}
    </div>
  );
};

MonstersList.propTypes = {
  // TODO: aanvullen
};

export default MonstersList;
