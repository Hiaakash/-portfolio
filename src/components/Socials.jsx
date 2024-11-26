import React, { useState } from 'react'
import { styles } from '../styles'
import { motion } from "framer-motion"
import { SectionWrapper } from '../hoc'
import { codingProfiles, socialProfiles } from '../constants/constants'
import Tilt from "react-parallax-tilt"





const ProfileCard = ({ name, link, icon }) => {
  const [scale, setScale] = useState(1);

  const [selectedEvents, setSelectedEvents] = useState({
    trackOnMove: true,
    trackOnEnter: true,
    trackOnLeave: true,
  });

  const onMove = ({ eventType, ...restEventParams }) => {

  };

  const onEnter = (eventType) => {
    setScale(1.15)

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

      <Tilt className="w-[250px]" reset={true} transitionSpeed={2500} gyroscope={true} glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" glareBorderRadius="20px" onMove={onMove}
        onEnter={onEnter}
        onLeave={onLeave}>
        <motion.div

          className="shadow-card bg-tertiary p-5 rounded-2xl"
        >
          <div
            option={{
              max: 45,
              scale: 1,
              speed: 450
            }}

            onClick={() => window.open(link, "_blank")}

            className="relative w-full h-[45px] cursor-pointer flex justify-center items-center"
          >

            <img src={icon} alt={name}
              className="w-[160px] h-[40px] object-contain"
            />

            {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover' >
              <div

                className="black-gradient rounded-full flex justify-center items-center cursor-pointer  w-10 h-10"
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div> */}
          </div>
          {/* <div className="mt-5"> */}
          {/* <h3 className='text-white font-bold text-[24px]'>{name}</h3> */}
          {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
          {/* </div> */}


        </motion.div>
      </Tilt >
    </motion.div>
  )
}


const Socials = () => {
  return (
    <>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`${styles.padding}`}>
          <motion.div>
            <p className={styles.sectionSubText}>What I do in my free time</p>
            <h2 className={styles.sectionHeadText}>Let's See</h2>
          </motion.div>

          <div>
            <motion.div>
              <p className={styles.sectionSubText}>Coding Sometime</p>
            </motion.div>

            <div className=' flex flex-row flex-wrap gap-8'>
              {
                codingProfiles.map((profile, index) => (
                  <ProfileCard key={`${profile.name}`} {...profile} />
                ))
              }

            </div>

          </div>

          <div className='mt-8'>
            <motion.div>
              <p className={styles.sectionSubText}>Posting Sometime</p>
            </motion.div>

            <div className=' flex flex-row flex-wrap gap-8'>
              {
                socialProfiles.map((profile, index) => (
                  <ProfileCard key={`${profile.name}`} {...profile} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Socials, '')
