'use client'

import Stepper from 'awesome-react-stepper'
import { FormForm } from '../formform/FormForm'

function StepperComponent() {
  return (
    <>
      <div className='border-neutral-500 h-full max-w-2xl p-3 border rounded-md'>
        <Stepper
          strokeColor='#17253975'
          fillStroke='#3f3f46'
          activeColor='#93c5fd'
          activeProgressBorder='2px solid #17253975'
          submitBtn={<button className='stepperBtn'>Submit</button>}
          continueBtn={<button className='stepperBtn'>Next</button>}
          backBtn={<button className='stepperBtn'>Back</button>}
          onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
        >
          <div className='stepperSubDiv my-12'>
            <h1>Welcome to Awesome React Stepper</h1>
            <FormForm />
          </div>
          <div className='stepperSubDiv'>
            <h1>Add your content here!!!</h1>
          </div>
          <div className='stepperSubDiv'>
            <h1>Thank you for using Awesome React Stepper</h1>
          </div>
        </Stepper>
      </div>
    </>
  )
}
export default StepperComponent
