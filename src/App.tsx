// import { useState } from 'react'
import React, { useState} from 'react'
import { PersonalInformation, AddressInformation } from './containers'
import './App.css'

function App() {
const { step, setStep } = useState<number>(1);

const handleNext  = () => {

}

  return (
    <>
      {step === 1 && (
        <PersonalInformation />
      )}
      {step === 2 && (
        <AddressInformation />
      )}
      </>

      )
}

export default App
