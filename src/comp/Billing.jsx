import React from 'react'
import { card } from '../assets'
import styles from '../styles'
import Button from './Button'

const Billing = () => {
  return (
    <section id="product" className={`${styles.paddingY}  gap-y-6 flex sm:flex-row flex-col items-center justify-center   `}>
      <div className="flex flex-1  flex-col gap-y-6 flex-start  ">
        <p className='md:text-[3.5rem] sm:text-[2.5rem] text-[2rem] leading-normal sm:leading-tight font-bold' >Find a better card deal in few easy steps.</p>
        <p className='sm:text-[1.4rem] w-full sm:w-[90%] text-start text-white/80'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button/>
      </div>
      <div className="flex flex-1 md:p-6 flex-col gap-y-6 flex-start  ">
        <img src={card} alt="card" />
      </div>
    </section>
  )
}

export default Billing