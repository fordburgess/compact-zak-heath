"use client"
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';


const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const images = Array.from(document.images);
    const unloaded = images.filter(img => !img.complete);

    if (unloaded.length == 0) {
      setReady(true);
    }
    else {
      let loadedCount = 0;
      unloaded.forEach(img => {
        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === unloaded.length) {
            setReady(true);
          }
        };
      });
    }

  }, [pathname])

  return (
    <AnimatePresence mode='wait'>
      {
        ready && (
          <motion.div
            className='main-tag'
            key={pathname}
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            exit={{ filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

export default TransitionWrapper
