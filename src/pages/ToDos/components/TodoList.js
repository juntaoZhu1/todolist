import React from 'react';

import { List } from "antd";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoRemoval, onTodoToggle }) => (
  <List
    locale={{
      emptyText: "There's nothing to do :("
    }}
    dataSource={todos}
    renderItem={todo => (
      <TodoItem
        todo={todo}
        onTodoToggle={onTodoToggle}
        onTodoRemoval={onTodoRemoval}
      />
    )}
    pagination={10}
  />
);

export default TodoList;
