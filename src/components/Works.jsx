import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { externalw, external, link } from '../assets'
import { projects } from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

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
    // variants={fadeIn("", "", 0.1, 1)}
    // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    // variants={fadeIn("up", "spring", 0.5 * index, 0.5)}
    // green-pink-gradienth
  };
  return (
    <motion.div>

      <Tilt className="w-full" reset={true} scale={scale} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" glareBorderRadius="20px" onMove={onMove}
        onEnter={onEnter}
        onLeave={onLeave}>
        <motion.div

          className="w-full shadow-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div
            option={{
              max: 45,
              scale: 1,
              speed: 450
            }}

            className="relative w-full h-[230px]"
          >

            <img src={image} alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover' >
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient rounded-full flex justify-center items-center cursor-pointer  w-10 h-10"
              >
                <img src={externalw} alt="external" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className="mt-5">

            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {
              tags.map((tag) => (
                <p className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))
            }
          </div>


        </motion.div>
      </Tilt >
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real world examples of my work. Each project is briefly described with links to code repositories and live demos in it. I reflectsmy ability to solve complex problems, work with different technologies, and manage projects effictively.
        </motion.p>

      </div>
      <div className="mt-20 flex flex-wrap gap-8">
        {
          projects.map((project, index) => (
            <ProjectCard key={`project-${project.name}`}
              index={index}
              {...project} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
