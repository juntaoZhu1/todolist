import React, { PureComponent } from 'react';
import { Row, Col, Card, Radio, message } from "antd";
import { connect } from 'dva';

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";


@connect(({ todos }) => ({
  todolist: todos.todoList,
}))
class ToDos extends PureComponent {
  state = {
    filterState: null,
  }

  componentDidMount() {
    this.fetchTodoItems({completed: this.state.filterState});
  }

  fetchTodoItems = (filter = null) => {
    const { dispatch } = this.props;

    var payload = {};
    if (filter){
      console.log("filter");
      payload.completed = filter.completed;
    }
    dispatch({
      type: 'todos/fetchTodoItems',
      payload: payload,
    });
  };

  handleformSubmit = (params) => {
    const { dispatch } = this.props;
    
    console.log("Name:", name);
    // create the new item payload to be passed through dispatch action
    const payload = {
      // id: Math.round(Math.random() * 36 ** 12).toString(36),
      name: params.name,
      completed: false,
      date: params.date,
    };

    console.log("payload:", payload);

    // dispatch actions to todos model
    dispatch({
      type: 'todos/addToDoItem',
      payload,
      callback: (result) => {
        this.fetchTodoItems();
        console.log("addTodoItem result:", result);
        message.success(`New Todo Item added: ${name}`);
      },
    });
  };

  handleTodoToggle = (objectId) => {
    const { dispatch } = this.props;

    // we pass the item Id as payload, and don't need to do anything in callback
    dispatch({
      type: 'todos/toogleTodoItem',
      payload: {objectId: objectId},
      callback: () => {
        this.fetchTodoItems({completed: this.state.filterState});
        message.success(`Todo Item toggled `);
      },
    });
  };

  handleTodoRemoval = (objectId) => {
    const { dispatch } = this.props;

    // we pass the item Id as payload
    dispatch({
      type: 'todos/deleteToDoItem',
      payload: {objectId: objectId},
      callback: () => {
        this.fetchTodoItems({completed: this.state.filterState});
        message.success(`Todo Item deleted `);
      },
    });
  };

  onFilterChange = (e) => {
    var completed = null;

    if(e.target.value === 'completed'){
      completed = true;
    } else if (e.target.value === 'uncompleted') {
      completed = false;
    }
    this.setState({filterState: completed});
    this.fetchTodoItems({completed: completed});
  };

  render() {
    const { todolist } = this.props;

    const cardExtra = (
      <Radio.Group defaultValue="all" onChange={this.onFilterChange}>
        <Radio.Button value="all" key={1}>All</Radio.Button>
        <Radio.Button value="completed" key={2}>Completed</Radio.Button>
        <Radio.Button value="uncompleted" key={3}>Uncompleted</Radio.Button>
     </Radio.Group>);
    console.log("todoList", todolist);

    return (
      <Row type="flex" justify="center" align="middle">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <AddTodoForm onFormSubmit={this.handleformSubmit} />

          <Card title="Todo List" extra={ cardExtra }>
            <TodoList
              todos={todolist}
              onTodoToggle={this.handleTodoToggle}
              onTodoRemoval={this.handleTodoRemoval}
            />
          </Card>
        </Col>
      </Row>
    );
  }
};

export default ToDos;
