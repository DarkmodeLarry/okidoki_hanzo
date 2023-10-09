import { RoughNotation } from 'react-rough-notation'

type NavProps = {
  currentStepIndex: number
  goTo: (index: number) => void
}

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className='absolute -top-20 left-0 w-full md:w-[25%] md:relative md:top-0 md:left-0'>
      <nav className='text-slate-200 bg-neutral-900 border-neutral-700 md:p-5 h-full py-5 border rounded-md'>
        <ul className='md:flex-col flex justify-center gap-2'>
          <li className='flex flex-col items-start font-medium'>
            <span className='text-neutral-500 md:flex hidden text-sm uppercase'>step 1</span>
            <button
              tabIndex={0}
              onClick={() => goTo(0)}
              className={`text-sm ${
                currentStepIndex === 0 ? 'text-[#c3c6e1]' : 'text-white'
              } md:text-base`}
            >
              <RoughNotation type='underline' show={currentStepIndex === 0} color='#ffe666'>
                Your info
              </RoughNotation>
            </button>
          </li>
          <li className='flex flex-col items-start font-medium'>
            <span className='text-neutral-500 md:flex hidden text-sm uppercase'>step 2</span>
            <button
              tabIndex={0}
              onClick={() => goTo(1)}
              className={`text-sm ${
                currentStepIndex === 1 ? 'text-[#bd284d]' : 'text-white'
              } md:text-base`}
            >
              <RoughNotation type='underline' show={currentStepIndex === 1} color='#bd284d'>
                Select plan
              </RoughNotation>
            </button>
          </li>
          <li className='flex flex-col items-start font-medium'>
            <span className='text-neutral-500 md:flex hidden text-sm uppercase'>step 3</span>
            <button
              tabIndex={0}
              onClick={() => goTo(2)}
              className={`text-sm ${
                currentStepIndex === 2 ? "text-[#E7B8FF]'s" : 'text-white'
              } md:text-base`}
            >
              <RoughNotation type='underline' show={currentStepIndex === 2} color='#E7B8FF'>
                Add-ons
              </RoughNotation>
            </button>
          </li>
          <li className='flex flex-col items-start font-medium'>
            <span className='text-neutral-500 md:flex hidden text-sm uppercase'>step 4</span>
            <button
              tabIndex={0}
              onClick={() => goTo(3)}
              className={`text-sm ${
                currentStepIndex === 3 ? 'text-[#6fe79f]' : 'text-white'
              } md:text-base`}
            >
              <RoughNotation type='underline' show={currentStepIndex === 3} color='#6fe79f'>
                Summary
              </RoughNotation>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
