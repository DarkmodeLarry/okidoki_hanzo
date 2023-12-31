import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { useForm } from 'react-hook-form'
import { createPortfolioSchema, createPortfolioSchemaType } from '@/schema/createPortfolioSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { PortfolioColor, PortfolioColors } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { createPortfolio } from '@/actions/portfolio'
import { toast } from './ui/use-toast'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function CreatePortfolioSheet({ open, onOpenChange }: Props) {
  const form = useForm<createPortfolioSchemaType>({
    resolver: zodResolver(createPortfolioSchema),
    defaultValues: {}
  })

  const router = useRouter()

  const onSubmit = async (data: createPortfolioSchemaType) => {
    try {
      await createPortfolio(data)

      // Close the sheet
      openChangeWrapper(false)
      router.refresh()

      toast({
        title: 'Success',
        description: 'Portfolio created successfully!'
      })
    } catch (e: any) {
      // Show toast
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later',
        variant: 'destructive'
      })
      console.log('Error while creating portfolio', e)
    }
  }

  const openChangeWrapper = (open: boolean) => {
    form.reset()
    onOpenChange(open)
  }

  return (
    <Sheet open={open} onOpenChange={openChangeWrapper}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add new portfolio</SheetTitle>
          <SheetDescription>Portfolios are a way to group your records</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Personal' {...field} />
                  </FormControl>
                  <FormDescription>Portfolio name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='color'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Select onValueChange={(color) => field.onChange(color)}>
                      <SelectTrigger
                        className={cn(
                          'w-full h-8 text-white',
                          PortfolioColors[field.value as PortfolioColor]
                        )}
                      >
                        <SelectValue placeholder='Color' className='w-full h-8' />
                      </SelectTrigger>
                      <SelectContent className='w-full'>
                        {Object.keys(PortfolioColors).map((color) => (
                          <SelectItem
                            key={color}
                            value={color}
                            className={cn(
                              `w-full h-8 rounded-md my-1 text-white focus:text-white focus:font-bold focus:ring-2 ring-neutral-600 focus:ring-inset dark:focus:ring-white focus:px-8`,
                              PortfolioColors[color as PortfolioColor]
                            )}
                          >
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Select a color for your portfolio</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className='flex flex-col gap-3 mt-4'>
          <Separator />
          <Button
            disabled={form.formState.isSubmitting}
            variant={'outline'}
            className={cn(
              form.watch('color') && PortfolioColors[form.getValues('color') as PortfolioColor]
            )}
            onClick={form.handleSubmit(onSubmit)}
          >
            Confirm
            {form.formState.isSubmitting && <ReloadIcon className='animate-spin w-4 h-4 ml-2' />}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CreatePortfolioSheet
