// import { useState } from 'react'
import React, { useState} from 'react'
import { SubmitButton } from './components';
import { PersonalInformation, AddressInformation, AccountInformation } from './containers'
import { Space, Button } from 'antd';
import './App.css'


function App() {
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
    <>
      {step === 1 && (
        <PersonalInformation />
      )}
      {step === 2 && (
        <AddressInformation />
      )}
      {step === 3 && (
        <AccountInformation />
      )}


      <Space direction="vertical">
        <Space wrap>

          {step === 2 && (
            <div>
              <Button onClick={handlePrev}>Previous</Button>
              <Button  onClick={handleNext} type={'primary'}>Next</Button>
            </div>
          )}

          {step === 1 && (
            <Button  onClick={handleNext} type={'primary'}>Next</Button>
          )}

          {step === 3 && (
            <div>
              <Button onClick={handlePrev}>Previous</Button>
              <SubmitButton />
            </div>

          )}

        </Space>
      </Space>
    </>
      )
}

export default App
