import React from 'react'
import {people01,people02,people03, quote } from '../assets'
import styles from '../styles'
import {motion} from 'framer-motion'
const FeedbackCard = ({item}) => {
  const {content,name,img,title} = item
  
  return (
    <motion.div
    whileHover={{scale:1.03}}
    className={`
    md:max-w-[370px]  md:h-[395px]
    sm:min-w-[320px] sm:h-[320px]
    w-[300px] h-[300px] py-6 sm:py-8 md:py-12 px-8
    flex flex-col justify-between z-[3] flex-wrap 
    border border-cyan-700/20  transition-all duration-300 ease-in-out
    bg-gradient-to-tr from-zinc-900/40 to-zinc-800/40
    hover:bg-gradient-to-br hover:from-zinc-900/80 hover:to-zinc-800/80 rounded-3xl `}>
        <img className='w-[50px] h-[30px]'   src={quote} alt="quote" />
        <p className='sm:text-[1.2rem]   text-center  text-white/80'>{content}</p>
        <div className={`max-w-[470px]   h-[55px] rounded-2xl sm:gap-x-4 gap-x-2 ${styles.flexCenter} sm:p-4 p-2`}>
             <div className="rounded-full h-[48px] w-[48px]   flex items-center justify-center  ">
               <img src={img} className='object-contain  ' alt={img} />
             </div>
             <div className="flex-1 gap-y-2 flex-col flex items-start pl-3 justify-center">
               <p className='sm:text-[1.1rem] text-xl font-semibold'>{name}</p>
               <p className='sm:text-[0.9rem] text-sm text-white/70'>{title}</p>
             </div>
         </div>
      </motion.div> 
  )
}

export default FeedbackCard