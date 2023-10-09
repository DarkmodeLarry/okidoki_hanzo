import FormWrapper from './FormWrapper'
import { Input } from '@/components/templates/multi-step-form/input'
import { Label } from '@/components/templates/multi-step-form/label'
import { FormItems } from '@/app/forms/page'

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void
  errors: Partial<FormItems>
}

const UserInfoForm = ({ name, email, phone, errors, updateForm }: StepProps) => {
  return (
    <FormWrapper
      title='Personal info'
      description='Please provide your name, email address, and phone number.'
    >
      <div className='flex flex-col w-full gap-5'>
        <div className='flex items-center w-full gap-2'>
          <Input
            autoFocus
            type='text'
            name='firstName'
            id='firstName'
            placeholder='First Name'
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className='w-full'
            required
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
        </div>
        <div className='flex w-full gap-2'>
          <Input
            autoFocus
            type='text'
            name='middleName'
            id='middleName'
            placeholder='Middle Name'
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className='w-full'
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
        </div>
        <div className='flex w-full gap-2'>
          <Input
            autoFocus
            type='text'
            name='name'
            id='name'
            placeholder='Last Name'
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className='w-full'
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
        </div>

        <div className='flex w-full gap-2'>
          <Input
            autoFocus
            type='text'
            name='driversLicense'
            id='driversLicense'
            placeholder='Drivers License Number'
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className='w-full'
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
        </div>

        <div className='flex w-full gap-2'>
          <Input
            autoFocus
            type='text'
            name='dob'
            id='dob'
            placeholder='Date of Birth'
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className='w-full'
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
        </div>

        <div className='flex w-full gap-2'>
          <Input
            autoFocus
            type='text'
            name='sex'
            id='sex'
            placeholder='Sex'
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className='w-full'
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='text'
            name='email'
            id='email'
            placeholder='bruceLee@email.com'
            value={email}
            className='w-full'
            onChange={(e) => updateForm({ email: e.target.value })}
          />
          {errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='phone'>Phone Number</Label>
          <Input
            type='tel'
            name='phone'
            id='phone'
            placeholder='e.g. +1 234 567 890'
            value={phone}
            className='w-full'
            onChange={(e) => updateForm({ phone: e.target.value })}
          />
          {errors.phone && <p className='text-sm text-red-500'>{errors.phone}</p>}
        </div>
      </div>
    </FormWrapper>
  )
}

export default UserInfoForm
