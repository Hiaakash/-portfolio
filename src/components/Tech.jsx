import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { styles } from '../styles'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies, expertise } from '../constants/constants'

const Tech = () => {

  const [scale, setScale] = useState(1);

  const [selectedEvents, setSelectedEvents] = useState({
    trackOnMove: true,
    trackOnEnter: true,
    trackOnLeave: true,
  });

  const onMove = ({ eventType, ...restEventParams }) => {

  };

  const onEnter = (eventType) => {
    setScale(1.05)
  };

  const onLeave = (eventType) => {
    setScale(1)
  };
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Tech Stack expertise</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <p className={styles.sectionSubText}>Languages</p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {expertise.map((tech, index) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))
        }
      </div>

      <p className={`${styles.sectionSubText} mt-5 mb-5`}>Tools and Frameworks</p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((tech, index) => (
          <div className='w-28 h-28' key={tech.name}>
            {/* <img src={tech.icon} alt="" /> */}

            <Tilt className="w-28 h-28" reset={true} scale={scale} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" glareBorderRadius="20px" onMove={onMove}
              onEnter={onEnter}
              onLeave={onLeave}>
              <motion.div

                className="shadow-card bg-white p-5 rounded-2xl w-28 h-28 flex justify-center items-center"
              >
                <div
                  option={{
                    max: 45,
                    scale: 1,
                    speed: 450
                  }}
                  className="relative cursor-pointer flex justify-center items-center"
                >

                  <img src={tech.icon} alt={tech.name}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </Tilt >
          </div>
        ))
        }
      </div >
    </>
  )
}

export default SectionWrapper(Tech, '')
