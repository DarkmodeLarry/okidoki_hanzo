'use client'
import { FormRecord } from '@prisma/client'
import React, { useTransition } from 'react'
import { Checkbox } from './ui/checkbox'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { setAddFormRecordToDone } from '@/actions/formRecord'
import { useRouter } from 'next/navigation'

function getExpirationColor(expiresAt: Date) {
  const days = Math.floor(expiresAt.getTime() - Date.now()) / 1000 / 60 / 60

  if (days < 0) return 'text-gray-300 dark:text-gray-400'

  if (days <= 3 * 24) return 'text-red-500 dark:text-red-400'
  if (days <= 7 * 24) return 'text-orange-500 dark:text-orange-400'
  return 'text-green-500 dark:text-green-400'
}

function FormRecordsCard({ formRecord }: { formRecord: FormRecord }) {
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()
  return (
    <div className='flex items-start gap-2'>
      <Checkbox
        id={formRecord.id.toString()}
        className='w-5 h-5'
        checked={formRecord.done}
        disabled={formRecord.done || isLoading}
        onCheckedChange={() => {
          startTransition(async () => {
            await setAddFormRecordToDone(formRecord.id)
            router.refresh()
          })
        }}
      />

      <label
        htmlFor={formRecord.id.toString()}
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 decoration-1 dark:decoration-white',
          formRecord.done && 'line-through'
        )}
      >
        {formRecord.formName}
        {formRecord.expiresAt && (
          <p
            className={cn(
              'text-xs text-neutral-500 dark:text-neutral-400',
              getExpirationColor(formRecord.expiresAt)
            )}
          >
            {format(formRecord.expiresAt, 'dd/MM/yyyy')}
          </p>
        )}
      </label>
    </div>
  )
}

export default FormRecordsCard
