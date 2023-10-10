'use client'
import { Portfolio, FormRecord } from '@prisma/client'
import React, { useMemo, useState, useTransition } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { PortfolioColor, PortfolioColors } from '@/lib/constants'
import { CaretDownIcon, CaretUpIcon, TrashIcon } from '@radix-ui/react-icons'
import { Progress } from './ui/progress'
import { Separator } from './ui/separator'
import PlusIcon from './icons/PlusIcon'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger
} from './ui/alert-dialog'
import { deletePortfolio } from '@/actions/portfolio'
import { toast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import CreateTaskDialog from './CreateFormDialog'
import FormsCard from './FormsCard'
import FormRecordsCard from './FormsCard'
import CreateFormRecordDialog from './CreateFormDialog'

interface Props {
  portfolio: Portfolio & {
    formRecords: FormRecord[]
  }
}

function PortfolioCard({ portfolio }: Props) {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const [showCreateModal, setShowCreateModal] = useState(false)

  const formRecords = portfolio.formRecords

  const [isLoading, startTransition] = useTransition()

  const removePortfolio = async () => {
    try {
      await deletePortfolio(portfolio.id)
      toast({
        title: 'Success',
        description: 'Portfolio deleted successfully'
      })
      router.refresh()
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Cannot delete portfolio',
        variant: 'destructive'
      })
    }
  }

  const formRecordsDone = useMemo(() => {
    return portfolio.formRecords.filter((formRecord) => formRecord.done).length
  }, [portfolio.formRecords])

  const totalForms = portfolio.formRecords.length

  const progress = totalForms === 0 ? 0 : (formRecordsDone / totalForms) * 100

  return (
    <>
      <CreateFormRecordDialog
        open={showCreateModal}
        setOpen={setShowCreateModal}
        portfolio={portfolio}
      />

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className='w-96'>
        <CollapsibleTrigger asChild>
          <Button
            variant={'ghost'}
            className={cn(
              'flex w-full justify-between p-6',
              isOpen && 'rounded-b-none',
              PortfolioColors[portfolio.color as PortfolioColor]
            )}
          >
            <span className='font-bold text-white'>{portfolio.name}</span>
            {!isOpen && <CaretDownIcon className='w-6 h-6' />}
            {isOpen && <CaretUpIcon className='w-6 h-6' />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className='rounded-b-md dark:bg-neutral-900 flex flex-col shadow-lg'>
          {formRecords.length === 0 && (
            <Button
              variant={'ghost'}
              className='flex items-center justify-center gap-1 p-8 py-12 rounded-none'
              onClick={() => setShowCreateModal(true)}
            >
              <p>There are no records yet:</p>
              <span
                className={cn(
                  'text-sm bg-clip-text text-transparent',
                  PortfolioColors[portfolio.color as PortfolioColor]
                )}
              >
                Create one
              </span>
            </Button>
          )}
          {formRecords.length > 0 && (
            <>
              <Progress className='rounded-none' value={progress} />
              <div className='flex flex-col gap-3 p-4'>
                {formRecords.map((formRecord) => (
                  <FormRecordsCard key={formRecord.id} formRecord={formRecord} />
                ))}
              </div>
            </>
          )}
          <Separator />
          <footer className='h-[40px] px-4 p-[2px] text-xs text-neutral-500 flex justify-between items-center '>
            <p>Created at {portfolio.createdAt.toLocaleDateString('en-US')}</p>
            {isLoading && <div>Deleting...</div>}
            {!isLoading && (
              <div>
                <Button size={'icon'} variant={'ghost'} onClick={() => setShowCreateModal(true)}>
                  <PlusIcon />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size={'icon'} variant={'ghost'}>
                      <TrashIcon />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your portfolio and
                      all formRecords inside it.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          startTransition(removePortfolio)
                        }}
                      >
                        Proceed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </footer>
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}

export default PortfolioCard
