import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

interface DataTableLoadingProps {
  columnCount: number
  rowCount?: number
}

export function DataTableLoading({ columnCount, rowCount = 10 }: DataTableLoadingProps) {
  return (
    <div className='w-full space-y-3 overflow-auto'>
      <div className='flex items-center justify-between w-full p-1 space-x-2 overflow-auto'>
        <div className='flex items-center flex-1 space-x-2'>
          <Skeleton className='h-7 w-[150px] lg:w-[250px]' />
          <Skeleton className='h-7 w-[70px] border-dashed' />
        </div>
        <Skeleton className='ml-auto hidden h-7 w-[70px] lg:flex' />
      </div>
      <div className='border rounded-md'>
        <Table>
          <TableHeader>
            {Array.from({ length: 1 }).map((_, i) => (
              <TableRow key={i} className='hover:bg-transparent'>
                {Array.from({ length: columnCount }).map((_, i) => (
                  <TableHead key={i}>
                    <Skeleton className='w-full h-6' />
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {Array.from({ length: rowCount }).map((_, i) => (
              <TableRow key={i} className='hover:bg-transparent'>
                {Array.from({ length: columnCount }).map((_, i) => (
                  <TableCell key={i}>
                    <Skeleton className='w-full h-6' />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='sm:flex-row sm:gap-8 flex flex-col items-center justify-between w-full gap-4 px-2 py-1 overflow-auto'>
        <div className='flex-1'>
          <Skeleton className='w-40 h-8' />
        </div>
        <div className='sm:flex-row sm:gap-6 lg:gap-8 flex flex-col items-center gap-4'>
          <div className='flex items-center space-x-2'>
            <Skeleton className='w-24 h-8' />
            <Skeleton className='h-8 w-[70px]' />
          </div>
          <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
            <Skeleton className='w-20 h-8' />
          </div>
          <div className='flex items-center space-x-2'>
            <Skeleton className='lg:block hidden w-8 h-8' />
            <Skeleton className='w-8 h-8' />
            <Skeleton className='w-8 h-8' />
            <Skeleton className='lg:block hidden w-8 h-8' />
          </div>
        </div>
      </div>
    </div>
  )
}
