import { z } from 'zod'

export const revocableLivingTrustSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Client name must be at least 2 character'
  }),
  middleName: z.string().optional(),
  lastName: z.string().min(2, {
    message: 'Client last name must be at least 2 character'
  }),
  driversLicense: z.string().min(6, {
    message: 'Drivers License must be at least 6 characters'
  }),
  dob: z.date().optional(),
  sex: z.string().optional(),
  phone: z.string().min(10, {
    message: 'Phone must be at least 10 characters'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address'
  }),
  streetAddress: z.string().min(8, {
    message: 'Address must be at least 8 characters'
  }),
  city: z.string().min(2, {
    message: 'City must be at least 2 characters'
  }),
  state: z.string().min(2, {
    message: 'State must be at least 2 characters'
  }),
  zip: z.string().min(5, {
    message: 'Zip must be at least 5 characters'
  })
})
