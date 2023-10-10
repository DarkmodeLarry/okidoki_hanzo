'use client'
import { Portfolio } from '@prisma/client'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from './ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import { PortfolioColor, PortfolioColors } from '@/lib/constants'
import { useForm } from 'react-hook-form'
import { createFormRecordSchema, createFormRecordSchemaType } from '@/schema/createFormRecordSchema'
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
import { Textarea } from './ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar } from './ui/calendar'
import { Button } from './ui/button'
import { CalendarIcon, ReloadIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { createFormRecord } from '@/actions/formRecord'
import { toast } from './ui/use-toast'
import { useRouter } from 'next/navigation'

interface Props {
  open: boolean
  portfolio: Portfolio
  setOpen: (open: boolean) => void
}

function CreateFormRecordDialog({ open, portfolio, setOpen }: Props) {
  const form = useForm<createFormRecordSchemaType>({
    resolver: zodResolver(createFormRecordSchema),
    defaultValues: {
      portfolioId: portfolio.id
    }
  })

  const router = useRouter()

  const openChangeWrapper = (value: boolean) => {
    setOpen(value)
    form.reset()
  }

  const onSubmit = async (data: createFormRecordSchemaType) => {
    try {
      await createFormRecord(data)
      toast({
        title: 'Success',
        description: 'Task created successfully!!'
      })
      openChangeWrapper(false)
      router.refresh()
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Cannot create task',
        variant: 'destructive'
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={openChangeWrapper}>
      <DialogContent className='sm:max-w-[825px]'>
        <DialogHeader>
          <DialogTitle className='flex gap-2'>
            Add task to portfolio:
            <span
              className={cn(
                'p-[1px] bg-clip-text text-transparent',
                PortfolioColors[portfolio.color as PortfolioColor]
              )}
            >
              {portfolio.name}
            </span>
          </DialogTitle>
          <DialogDescription>
            Add records to your portfolio. You can add as many documents as you want.
          </DialogDescription>
        </DialogHeader>
        <div className='gap-4 py-4'>
          <Form {...form}>
            <form className='flex flex-col space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='formName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder='Task content here' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='expiresAt'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expires at</FormLabel>
                    <FormDescription>When should this task expire?</FormDescription>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'justify-start text-left font-normal w-full',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            <CalendarIcon className='w-4 h-4 mr-2' />
                            {field.value && format(field.value, 'PPP')}
                            {!field.value && <span>No expiration</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button
            disabled={form.formState.isSubmitting}
            className={cn(
              'w-full dark:text-white text-white',
              PortfolioColors[portfolio.color as PortfolioColor]
            )}
            onClick={form.handleSubmit(onSubmit)}
          >
            Confirm
            {form.formState.isSubmitting && <ReloadIcon className='animate-spin w-4 h-4 ml-2' />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateFormRecordDialog
