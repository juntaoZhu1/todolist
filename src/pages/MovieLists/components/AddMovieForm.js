import React from "react";
import { Form, Icon, Row, Col, Button, Input, DatePicker } from "antd";

import styles from "./styles.less";

const AddMovieForm = ({ form, onFormSubmit }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, movie) => {
      if (!err) {
        form.resetFields();
        const payload = {
          name: movie.name,
        }
        console.log("Payload:", payload);
        onFormSubmit(payload);
      }
    });
  };

  return (
    <Form
      onSubmit={e => handleSubmit(e)}
      layout="horizontal"
      className={styles.todoForm}
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please, type in movie name"
                }
              ]
            })(
              <Input
                prefix={<Icon type="tags" className="icon" />}
                placeholder="What needs to be done?"
                spellCheck={false}
              />
            )}
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <Icon type="plus-circle" />
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Form.create({ name: "AddMovieForm" })(AddMovieForm);
