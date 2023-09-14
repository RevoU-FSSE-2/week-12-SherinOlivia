import React from 'react';
import { InputNumber } from 'antd';

interface Props {
  placeholder: string;
}

const ZipCode: React.FC<Props> = ({ placeholder }) => <InputNumber min={5} max={5} placeholder={placeholder} />;

export default ZipCode;