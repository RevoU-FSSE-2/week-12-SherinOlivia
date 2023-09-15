import React from 'react';
import { InputNumber } from 'antd';

interface Props {
  placeholder: string;
  autoComplete: string;
  value: string;
  onChange: (e: string | React.ChangeEvent) => void
  status: "" | "error" | "warning" | undefined
}

const ZipCode: React.FC<Props> = ({ placeholder, autoComplete }) => <InputNumber min={5} max={5} 
name="zipcode" placeholder={placeholder} autoComplete={autoComplete} />;

export default ZipCode;