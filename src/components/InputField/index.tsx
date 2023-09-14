import React from 'react';
import { Input } from 'antd';

interface Props {
  placeholder: string;
}

const InputField: React.FC<Props> = ({ placeholder }) => (
  <Input placeholder={placeholder} />
);

export default InputField;
