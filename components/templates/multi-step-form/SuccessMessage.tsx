import Image from 'next/image'
import { motion } from 'framer-motion'
import { RefreshCcw } from 'lucide-react'
import { Button } from '@/components/templates/multi-step-form/button'
import successIcon from '@/public/assets/success.png'

const successVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'backIn',
      duration: 0.6
    }
  }
}

const SuccessMessage = () => {
  const refresh = () => window.location.reload()
  return (
    <motion.section
      className='md:gap-2 flex flex-col items-center justify-center w-full h-full gap-4 text-center'
      variants={successVariants}
      initial='hidden'
      animate='visible'
    >
      <Image src={successIcon} width='150' height='150' alt='Success Icon' className='md:mb-4' />
      <h4 className='md:text-3xl text-2xl font-semibold text-white'>Thank you!</h4>
      <p className='text-neutral-300 md:text-base max-w-md text-sm'>
        Thanks for confirming your subscription! We hope you have fun using our plataform. If you
        ever need support, please feel free to email us at support@loremgaming.com
      </p>
      <div className='flex items-center mt-6'>
        <div className='relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition'>
          <Button
            onClick={refresh}
            className='text-neutral-200 bg-neutral-900 border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white relative border'
          >
            <RefreshCcw className='w-4 h-4 mr-2' /> Restart
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

export default SuccessMessage
