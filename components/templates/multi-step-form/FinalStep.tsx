'use client'

import { useState, useEffect } from 'react'
import FormWrapper from './FormWrapper'
import { Separator } from '@/components/ui/separator'
import { FormItems } from '@/app/forms/page'

type StepProps = FormItems & {
  goTo: (index: number) => void
}

const FinalStep = ({ yearly, plan, addOns, goTo }: StepProps) => {
  let planPrice = 0
  switch (plan) {
    case 'arcade':
      planPrice = 9
      break
    case 'advanced':
      planPrice = 12
      break
    case 'pro':
      planPrice = 15
      break
    default:
      planPrice = 0
      break
  }

  const filteredAddOns = addOns.filter((addOn) => addOn.checked === true)

  const totalAddOnsPrice = filteredAddOns?.reduce((acc, obj) => acc + obj.price, 0)
  console.log(totalAddOnsPrice)

  return (
    <FormWrapper
      title='Finishing Up'
      description='Double-check everything looks OK before confirming.'
    >
      <div className=''>
        <div className='bg-neutral-900 border-neutral-700 p-4 mt-2 border rounded-md'>
          <div className='flex items-center justify-between'>
            <div className=''>
              <h4 className='md:text-lg font-semibold text-white'>
                {`${plan.charAt(0).toUpperCase() + plan.slice(1)} (${
                  yearly ? 'Yearly' : 'Monthly'
                })`}
              </h4>
              <button onClick={() => goTo(1)} className='text-[#6fe79f] text-sm'>
                Change
              </button>
            </div>
            <p className='font-semibold text-white'>{`$${yearly ? planPrice * 10 : planPrice}${
              yearly ? '/yr' : '/mo'
            }`}</p>
          </div>
          {filteredAddOns.length > 0 && <Separator className='my-4' />}
          {filteredAddOns?.map((addOn) => (
            <div className='flex items-center justify-between my-2' key={addOn.id}>
              <p className='text-neutral-400'>{addOn.title}</p>
              <p className=''>{`$${yearly ? addOn.price * 10 : addOn.price}${
                yearly ? '/yr' : '/mo'
              }`}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-between px-4 my-4'>
          <p className='text-neutral-400'>Total (per {yearly ? 'year' : 'month'})</p>
          <p className='text-[#6fe79f] font-semibold md:text-lg'>
            +$
            {yearly ? planPrice * 10 + totalAddOnsPrice * 10 : planPrice + totalAddOnsPrice}/
            {yearly ? 'yr' : 'mo'}
          </p>
        </div>
      </div>
    </FormWrapper>
  )
}

export default FinalStep
