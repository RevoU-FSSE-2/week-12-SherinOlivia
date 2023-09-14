import React from 'react';
import { Form, Input } from 'antd';

interface Props {
  placeholder: string;
}
const {TextArea} = Input
const Address: React.FC<Props> = ({ placeholder }) => (
  <Form.Item label="Address">
    <TextArea rows={4} placeholder={placeholder} />
  </Form.Item>

);

export default Address;
