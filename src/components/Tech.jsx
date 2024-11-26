import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/constants'

const Tech = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Tech Stack expertise</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((tech, index) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
