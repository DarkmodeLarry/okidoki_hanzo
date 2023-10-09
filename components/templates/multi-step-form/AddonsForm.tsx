import { Checkbox } from '@/components/ui/checkbox'
import FormWrapper from './FormWrapper'

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void
}

interface AddOn {
  id: number
  checked: boolean
  title: string
  subtitle: string
  price: number
}

type FormItems = {
  name: string
  email: string
  phone: string
  plan: 'arcade' | 'advanced' | 'pro'
  yearly: boolean
  addOns: AddOn[]
}

const initialValues: FormItems = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  yearly: false,
  addOns: [
    {
      id: 1,
      checked: true,
      title: 'Online Service',
      subtitle: 'Access to multiple games',
      price: 1
    },
    {
      id: 2,
      checked: false,
      title: 'Large storage',
      subtitle: 'Extra 1TB of cloud save',
      price: 2
    },
    {
      id: 3,
      checked: false,
      title: 'Customizable Profile',
      subtitle: 'Custom theme on your profile',
      price: 2
    }
  ]
}

const AddonsForm = ({ addOns, yearly, updateForm }: stepProps) => {
  function handleCheckboxChange(addOnId: number, checked: boolean) {
    const updatedAddOns = addOns.map((addOn) => {
      if (addOn.id === addOnId) {
        return {
          ...addOn,
          checked
        }
      } else {
        return addOn
      }
    })
    updateForm({ addOns: updatedAddOns })
  }

  return (
    <FormWrapper title='Pick add-ons' description='Add-ons help enhance your gaming experience'>
      <div className='flex flex-col gap-3'>
        {addOns.map((addOn) => (
          <div
            className={`border border-neutral-600 flex items-center gap-3 p-3 rounded-md ${
              addOn.checked ? 'border-[#77f6aa] bg-neutral-900' : ''
            } focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:gap-5 md:p-5`}
            key={addOn.id}
          >
            <Checkbox
              id='online-service'
              checked={addOn.checked}
              onCheckedChange={(checked) => handleCheckboxChange(addOn.id, checked as boolean)}
            />
            <div className='flex items-center justify-between w-full'>
              <div className='flex flex-col'>
                <label htmlFor='online-service' className='font-semibold text-white'>
                  {addOn.title}
                </label>
                <p className='text-sm'>{addOn.subtitle}</p>
              </div>
              <p className='text-[#77f6aa]'>
                {`+$${yearly ? addOn.price * 10 : addOn.price}${yearly ? '/yr' : '/mo'}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </FormWrapper>
  )
}

export default AddonsForm
