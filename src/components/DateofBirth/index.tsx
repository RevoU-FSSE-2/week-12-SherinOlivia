import React from 'react';
import { DatePicker, Form } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};

interface FormValues {
  'date-picker': Date;
}

const onFinish = (fieldsValue: FormValues) => {
  // Should format date value before submit.
  const values = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].toISOString().slice(0, 10),
  };
  console.log('Received values of form: ', values);
};

const DateOfBirth = () => {
  return (
    <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item name="date-picker" label="Date of Birth" {...config}>
        <DatePicker />
      </Form.Item>
    </Form>
  );
};

export default DateOfBirth