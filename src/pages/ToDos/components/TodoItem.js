import React from "react";
import { Checkbox, Tooltip, Tag, Icon, List, Button } from "antd";

import styles from "./styles.less";
import moment from "moment";

const TodoItem = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip title="Remove Todo">
          <Button type="danger" onClick={() => onTodoRemoval(todo.objectId)}>
            <Icon type="delete" />
          </Button>
        </Tooltip>
      ]}
      className={styles.listItem}
      key={todo.objectId}
    >
      <div className={styles.todoItem}>
        <Tooltip
          title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
        >
          <Checkbox
            defaultChecked={todo.completed}
            onChange={() => onTodoToggle(todo.objectId)}
          />
        </Tooltip>

        <Tag color={todo.completed ? "green" : "volcano"} className={styles.todoTag}>
          {todo.completed ? <Icon type="check" /> : "-"}
        </Tag>

        <div className={styles.todoName}>
          {todo.completed ? <del>{todo.name}</del> : todo.name}
        </div>

        <Tag className={styles.todoTag}>
          {todo.date ? moment(todo.date.iso).format("YYYY-MM-DD") : ""}
        </Tag>
      </div>
    </List.Item>
  );
};

export default TodoItem;
