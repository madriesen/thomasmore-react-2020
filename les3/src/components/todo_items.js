import React from "react";

const TodoItems = (props) => {
  const output = props.entries.map((item) => {
    return (
      <li key={item.key} onClick={() => props.onClickItemHandler(item)}>
        {item.text}
        <br />
        <div className="smallerText">{item.date}</div>
      </li>
    );
  });

  return <ul className="theList">{output}</ul>;
};

export default TodoItems;
