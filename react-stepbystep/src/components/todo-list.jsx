import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todoList: [
        {
          id: 1,
          name: "test 1"
        },
        {
          id: 2,
          name: "test 2"
        }
      ]
    };
  }
  render() {
    const { todoList } = this.state;
    return (
      <div>
        <div>
          {todoList &&
            todoList.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
      </div>
    );
  }
}
