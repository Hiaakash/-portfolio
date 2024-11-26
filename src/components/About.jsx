import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'

import { styles } from '../styles'
import { services } from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServicesCard = ({ index, title, icon }) => {

  // const [evenDescription, setEvenDescription] = useState(null);
  const [scale, setScale] = useState(1);

  const [selectedEvents, setSelectedEvents] = useState({
    trackOnMove: true,
    trackOnEnter: true,
    trackOnLeave: true,
  });

  const onMove = ({ eventType, ...restEventParams }) => {

  };

  const onEnter = (eventType) => {
    setScale(1.10)

  };

  const onLeave = (eventType) => {
    setScale(1)
  };
  console.log('TITLE =>', title)


  // variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
  // variants={fadeIn("", "", 0.1, 1)}
  return (
    <Tilt className="xs:w-[250px] w-full" reset={true} scale={scale} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" glareBorderRadius="20px" onMove={onMove}
      onEnter={onEnter}
      onLeave={onLeave}>
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450
          }}

          className="bg-tertiary rounded-[20px] py-5 px-12 min-h[280px] flex justify-evenly items-center flex-col"
        >

          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt >
  )
}



const About = () => {
  console.log(services)
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {/* I'm a skilled Full Stack Engineer with experience in JavaScript & TypeScript, & I've expertise in frameworks & libraries like Vue.js, React.js, Node.js, PostgreSQL.
        I'm an avid learner and I collaborate closely with clients to create efficient, scalable & user-friendly solutions that solves real-world problems by using Data Structures & Algorithms. Lets work together to bring your ideas to life! */}

        I'm a skilled full-stack engineer with experience in JavaScript and TypeScript, and I've expertise in frameworks and libraries like Vue.js, React.js, Node.js, and PostgreSQL.
        I'm an avid learner, and I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems by using data structures and algorithms. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {
          services.map((service, index) => (
            <ServicesCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
