import React from 'react';
import { Input } from 'antd';


const Password: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
    <Input.Password
      placeholder="Input password" name="password"
      visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
    />
    </>
  )

};

export default Password;
