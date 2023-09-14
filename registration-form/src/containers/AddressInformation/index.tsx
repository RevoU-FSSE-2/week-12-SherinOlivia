import React from 'react';
import { InputField, NewButton } from '../../components';
// import type { CascaderProps } from 'antd';
import {
//   DatePicker,
//   AutoComplete,
//   Button,
//   Col,
  Form,
//   Input,
//   Row,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';

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
            <Form.Item
            {...formItemLayout}
            name="streetAddress"
            label="Street Address"
            rules={[{ required: true, message: 'Please Input Your Name' }]}
            >
            <InputField placeholder="Please Input Your Name" />
            </Form.Item>
            
            <Form.Item
            {...formItemLayout}
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please Input Your Name' }]}>
            <InputField placeholder="Please Input Your Email.." />
            </Form.Item>

            <FormItem>
                <NewButton label="Previous" />
            </FormItem>
            <FormItem>
                <NewButton label="Next" />
            </FormItem>

        </Form>
    )
}

export default AddressInformation