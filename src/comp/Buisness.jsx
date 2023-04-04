import React from 'react'
import styles, { layout } from '../styles'
import { features } from '../utils/data' 
import Button from './Button'

const Buisness = () => {
  return (
    <section className={`${styles.paddingY} mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 gap-y-6 flex sm:flex-row flex-col items-center justify-center   `} >
      <div className="flex flex-1 flex-col gap-y-6 flex-start  ">
        <p  className='md:text-[3.5rem] sm:text-[2.5rem] text-[2rem] leading-normal sm:leading-tight font-bold' >You do the business, we’ll handle the money.</p>
        <p className='sm:text-[1.2rem] w-full sm:w-[80%] text-start text-white/80'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button/>
      </div>
      <div id="features" className={`${layout.sectionImg} flex-1 flex items-center flex-col  justify-center gap-y-6 `}>
        {features && features.map((feature) =>(
          <div key={feature.id} className={`max-w-[470px] border cursor-pointer
          hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-800 ${styles.trans} border-cyan-900/70 h-[115px]
           rounded-3xl sm:gap-x-4 gap-x-2 ${styles.flexCenter} sm:p-4 p-2`}>
             <div className="rounded-full h-[55px] w-[55px] sm:h-[64px] sm:w-[64px] flex items-center justify-center bg-cyan-800/20 ">
               <img src={feature.icon} className='object-contain  ' alt="star" />
             </div>
             <div className="flex-1 gap-y-2 flex-col flex items-start px-3 justify-center">
               <p className='sm:text-[1.1rem] text-xl font-bold '>{feature.title}</p>
               <p className='sm:text-[1rem] text-sm text-white/70'  >{feature.content}</p>
             </div>
         </div>
        ))}
      </div>
    </section>
  )
}

export default Buisness