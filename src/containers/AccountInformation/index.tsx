import React from 'react';
import { Password, Text } from '../../components'
import { Input } from 'antd';

// interface AccountInfo {
//   username: string;
//   password: string;
// };

const AccountInformation: React.FC = () => (
  <form style={{ maxWidth: 600 }}> 
    <Text content="Username" />
      <Input name="username" placeholder="Username.." autoComplete='username'/>

      <Text content="password" />
      <Password />
  </form>
);

export default AccountInformation;