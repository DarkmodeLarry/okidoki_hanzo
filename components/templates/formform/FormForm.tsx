import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
// import { AiFillCreditCard, AiOutlineApple } from 'react-icons/ai'

export function FormForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Enter information from government issued id.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        <div className='flex items-center'>
          <Label className='w-[160px]' htmlFor='name'>
            First Name
          </Label>
          <Input id='firstName' placeholder='First Name' />
        </div>
        <div className='flex items-center'>
          <Label htmlFor='number' className='w-[160px]'>
            Last Name
          </Label>
          <Input id='number' placeholder='Last Name' />
        </div>
        <div className='flex items-center'>
          <Label className='w-[160px]' htmlFor='documentType'>
            Document Type
          </Label>
          <Select>
            <SelectTrigger id='documentType'>
              <SelectValue placeholder='Document Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>Deed of Trust</SelectItem>
              <SelectItem value='2'>Irrevocable Living Trust</SelectItem>
              <SelectItem value='3'>Transfer Deed</SelectItem>
              <SelectItem value='4'>Power of Attorney</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=' flex w-full'>
          <Label className='w-[160px] flex items-center' htmlFor='cvc'>
            Drivers License
          </Label>
          <Input id='cvc' className='w-full' placeholder='Drivers License' />
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div className='grid gap-2'>
            <Label className='flex items-center w-full' htmlFor='dob'>
              Date of Birth
            </Label>
          </div>
          <div className='grid gap-2'>
            <Select>
              <SelectTrigger id='dob.month'>
                <SelectValue placeholder='Month' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>January</SelectItem>
                <SelectItem value='2'>February</SelectItem>
                <SelectItem value='3'>March</SelectItem>
                <SelectItem value='4'>April</SelectItem>
                <SelectItem value='5'>May</SelectItem>
                <SelectItem value='6'>June</SelectItem>
                <SelectItem value='7'>July</SelectItem>
                <SelectItem value='8'>August</SelectItem>
                <SelectItem value='9'>September</SelectItem>
                <SelectItem value='10'>October</SelectItem>
                <SelectItem value='11'>November</SelectItem>
                <SelectItem value='12'>December</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            {/* <Label htmlFor='day'></Label> */}
            <Select>
              <SelectTrigger id='dob.day'>
                <SelectValue placeholder='Day' />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 31 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getDay() + i}`}>
                    {new Date().getDay() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            {/* <Label htmlFor='year'>Year</Label> */}
            <Select>
              <SelectTrigger id='year'>
                <SelectValue placeholder='Year' />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 100 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() - i}`}>
                    {new Date().getFullYear() - i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Continue</Button>
      </CardFooter>
    </Card>
  )
}
