import React, { useState } from 'react';
import { Text, State, Address, ZipCode, Password, SubmitButton } from '../../components';
// import styles from './PersonalInformation.module.css'
import { Input, Space, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

// interface
interface RegistrationInfo {
  name: string;
  email: string;
  dateOfBirth: string;

  address: string,
  state: string,
  city: string,
  zipcode: number

  username: string;
  password: string;
}

const initialValues = {
  name: '',
  email: '',
  dateOfBirth: '',

  address: '',
  state: '',
  city: '',
  zipcode: 0,

  username: '',
  password: ''
}
// ========================yup==================================
const validationSchema = yup.object({
  name: yup.string().required('Please Enter Your Full Name'),
  email: yup.string().email('Invalid Email!').required('Please Enter Your Email'),
  dateOfBirth: yup.string().matches(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{2}$/,
      'Invalid date format! (dd-mm-yy)')
    .required('Please enter your Date of Birth (dd-mm-yy)'),

  address: yup.string().required('Please Enter Your Street Address'),
  state: yup.string().required('Please Select Your State'),
  city: yup.string().required('Please Select Your City'),
  zipcode: yup.number().required('Please Enter your Zip Code'),

  username: yup.string().required('Please Enter Your Username'),
  password: yup.string().required('Please Select Your Password'),

})

const RegistrationForm: React.FC = () => {
// ================================Formik=======================================
  const handleSubmit = (values: RegistrationInfo) => {
    console.log(values)
  }

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema
  })
// =====================================button-stepper===========================
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if(step === 1 || step === 2) {
        setStep((prevStep) => prevStep+1);
    }

    return
  }

  const handlePrev = () => {
    if(step === 2 || step === 3) {
        setStep((prevStep) => prevStep - 1);
    }

    return
  }

    return (
      <form onSubmit={formMik.handleSubmit} style={{ maxWidth: 600 }}>
        {/* ================= Personal Information =================== */}
        {step === 1 && (
          <div>        
            <div >
              <Text content="Full Name" />
              <Input name="name" placeholder="Please Input Your Name" autoComplete="name" 
              value={formMik.values.name} 
              onChange={formMik.handleChange('name')}
              status={formMik.errors.name && 'error'}/>
            
              {formMik.errors.name && (
                <>
                  <Text content='error:'/> {formMik.errors.name}
                </>
              )}

            </div>
            <div>
              <Text content="Email" />
              <Input name="email" placeholder="Please Input Your Email.." autoComplete="email" 
              value={formMik.values.email} 
              onChange={formMik.handleChange('email')}
              status={formMik.errors.email && 'error'} />

              {formMik.errors.email && (
                <>
                  <Text content='error:'/> {formMik.errors.email}
                </>
              )}
            </div>
            <div>
              <Text content="Date of Birth" />
              <Input name="dateOfBirth" placeholder="Please Input Your Birthdate.." 
              value={formMik.values.dateOfBirth} 
              onChange={formMik.handleChange('dateOfBirth')}
              status={formMik.errors.dateOfBirth && 'error'} />

              {formMik.errors.dateOfBirth && (
                <>
                  <Text content='error:'/> {formMik.errors.dateOfBirth}
                </>
              )}
            </div>
          
          </div>
        )}

        {/* ================= Address Information =================== */}
        {step === 2 && (
          <div>
            <div>  
              <Text content="Address" />
              <Address placeholder="Please Input Your Address" autoComplete='street-address'
              value={formMik.values.address} 
              onChange={formMik.handleChange('address')}
              status={formMik.errors.address && 'error'} />

              {formMik.errors.address && (
                <>
                  <Text content='error:'/> {formMik.errors.address}
                </>
              )}
            </div>

          <div>
            <Text content="State" />
            <State 
            value={formMik.values.state} 
            onChange={formMik.handleChange('state')}
            status={formMik.errors.state && 'error'} />

            {formMik.errors.state && (
              <>
                <Text content='error:'/> {formMik.errors.state}
              </>
            )}
          </div>

          <div>
            <Text content="City" />
            <Input name="city" placeholder="Please Input Your City" autoComplete='address-level2'
            value={formMik.values.city} 
            onChange={formMik.handleChange('city')}
            status={formMik.errors.city && 'error'}/>

            {formMik.errors.city && (
              <>
                <Text content='error:'/> {formMik.errors.city}
              </>
            )}
          </div>  
          <div>
            <Text content="Zip Code" />
            <ZipCode placeholder="Zip Code.." autoComplete='postal-code'
            value={formMik.values.zipcode}
            onChange={(value) => {
              formMik.handleChange('zipcode')(String(value));
            }}
            status={formMik.errors.zipcode && 'error'}/>

            {formMik.errors.zipcode && (
              <>
                <Text content='error:'/> {formMik.errors.zipcode}
              </>
            )}
          </div>
        </div>
        )}

        {/* ================= Account Information =================== */}
        {step === 3 && (
          <div>
            <div>
              <Text content="Username" />
              <Input name="username" placeholder="Username.." autoComplete='username'            
              value={formMik.values.username} 
              onChange={formMik.handleChange('username')}
              status={formMik.errors.username && 'error'}/>
                
              {formMik.errors.username && (
                <>
                  <Text content='error:'/>{formMik.errors.username}
                </>
              )}
            </div>

            <div>
              <Text content="password" />
              <Password 
              value={formMik.values.password} 
              onChange={formMik.handleChange('password')}
              status={formMik.errors.password && 'error'}/>

              {formMik.errors.password && (
                <>
                  <Text content='error:'/> {formMik.errors.password}
                </>
              )}
            </div>
          </div>
        )}
        {/* ================= Buttons =================== */}
        <Space direction="vertical">
          <Space wrap>

            {step === 2 && (
              <div>
                <Button onClick={handlePrev}>Previous</Button>
                <Button type="primary" 
                onClick={() => {
                if (!formMik.values.address || !formMik.values.state || !formMik.values.city || !formMik.values.zipcode ) {
                  return;
                } else {
                  handleNext();
                }
              }} >
              Next
              </Button>
              </div>
            )}

            {step === 1 && (
              <div>
                 <Button type="primary" 
                onClick={() => {
                if (!formMik.values.name || !formMik.values.email || !formMik.values.dateOfBirth ) {
                  return;
                } else {
                  handleNext();
                }
              }} >
                Next
                </Button>
              </div>
            )}

            {step === 3 && (
              <div>
                <Button onClick={handlePrev}>Previous</Button>
                <SubmitButton />
              </div>

            )}

          </Space>
        </Space>
      </form>
    )
}

export default RegistrationForm