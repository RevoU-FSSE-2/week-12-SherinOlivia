import React from 'react';
import { Address, ZipCode, Province, InputField, NewButton } from '../../components';
import { Form, Space } from 'antd';

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

  
const AddressInformation: React.FC = () => {
    const [form] = Form.useForm();

    return (
        <Form form={form} name="dynamic_rule" style={{ maxWidth: 600 }}>
                        
            <Address placeholder="Please Input Your Address" />
        
            <Province />

            <Form.Item
            {...formItemLayout}
            name="city"
            label="City"
            rules={[{ required: true, message: 'Please Input Your City' }]}
            >
            <InputField placeholder="Please Input Your City" />
            </Form.Item>

            <Form.Item>
                <ZipCode placeholder="Zip Code.." />
            </Form.Item>

            <Space direction="vertical">
                <Space wrap>
                <NewButton label="Previous" />
                <NewButton label="Next" />
                </Space>
            </Space>
        </Form>
    )
}

export default AddressInformation