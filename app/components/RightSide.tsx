import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
      <a href="mailto:amiya1999dey@gmail.com">
        <p className='text-sm rotate-90 w-[21rem] tracking-wide text-textGreen hover:text-[15px] hover:w-[23rem] transition-all duration-300 ease-in-out'>Get in touch with me via mail</p>
      </a>
      <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide