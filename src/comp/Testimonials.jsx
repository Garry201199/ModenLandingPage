import React from 'react'
import styles from '../styles'
import { feedback } from '../utils/data'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} gap-y-6 flex flex-col relative items-center  justify-center `}>
      <div className={`flex w-full gap-x-3  flex-col sm:flex-row justify-between  items-center gap-y-6 flex-start `}>
        <p  className='md:text-[3.5rem] sm:text-[2.5rem] sm:w-[60%] text-[2.2rem]  leading-tight flex-1 flex font-bold' >What people are saying about us</p>
        <p className='sm:text-[1.2rem] sm:w-[60%] text-start flex flex-1 text-white/80'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        
      </div>
      <div className="flex  justify-evenly gap-y-6 flex-col sm:flex-wrap sm:flex-row w-full items-center  ">
        {
          feedback && feedback.map((item)=>(
            <FeedbackCard  key={item.id}  item={item}/>
          ))
        }
      </div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-0 bottom-20 blue__gradient" />
      
    </section>
  )
}

export default Testimonials