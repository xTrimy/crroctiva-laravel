import { useMotionValue, motion, animate } from "motion/react"
import React, { useEffect } from 'react'

function AnimatedInsightElement({ number }: { number: number }) {
    const count = useMotionValue(0);
    const [countContent, setCountContent] = React.useState(0)
    useEffect(() => {
        const controls = animate(count, number, { duration: 5 });
        count.on("change", (latest) => {
            setCountContent(Math.floor
                (latest))
        })
        return () => controls.stop()
    }, [])
  return (
      <motion.div 
          className='text-3xl font-bold mt-2'>
          {countContent}+
      </motion.div>
  )
}

export default AnimatedInsightElement