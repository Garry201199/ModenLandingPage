import React from 'react'
import styles from '../styles'
import { bill ,apple , google } from '../assets'


const CardDeal = () => {
  return (
    <section className={`${styles.paddingY}  gap-y-6 flex sm:flex-row flex-col-reverse items-center justify-center   `}>
      <div className="flex flex-1 md:p-6  gap-y-6 flex-start  ">
        <img src={bill} alt="bill" />
      </div>
      <div className="flex flex-1  flex-col gap-y-6 flex-start  ">
        <p  className='md:text-[3.5rem] sm:text-[2.5rem] text-[2rem] leading-normal sm:leading-tight font-bold' >Easily control your billing & invoicing.</p>
        <p className='sm:text-[1.4rem] w-full sm:w-[90%] text-start text-white/80'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex gap-x-4 items-center justify-start ">
          <img src={google} alt="google" />
          <img src={apple} alt="apple" />
        </div>
      </div>
    </section>
  )
}

export default CardDeal