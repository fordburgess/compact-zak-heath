"use client"
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';


const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // useEffect(() => {
  //   gsap.to('.main-tag', {
  //     opacity: 1,
  //     duration: 2,
  //     ease: "power1.inOut"
  //   })
  // }, [])

  return (
    <AnimatePresence mode='wait'>
      <motion.main
        className='main-tag'
        key={pathname}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default TransitionWrapper
