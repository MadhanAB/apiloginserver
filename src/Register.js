

import axios from  "axios";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
//import { Axios } from 'axios';
import {useNavigate} from 'react-router-dom';
//import bcrypt from "bcryptjs"

const Register = ()=>{

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

const onFinish = async (values) => {

 // const hashedPassword = await bcrypt.hash(values.password, 10);
   
 const response = await axios.post("http://localhost:8220/api/v1/register", {
    username: values.username,
    email: values.email,
    password: values.password, 
    mobilenumber: values.mobilenumber,
    
    })
    .then((response) => {
      console.log(response);

      navigate ('/login');
    });
  console.log('Success:', values);
};


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


return(

  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="mobilenumber"
      name="mobilenumber"
      rules={[
        {
          required: true,
          message: 'Please input your mobilenumber!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)};
export default Register;