import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <div className='flex items-center mt-4'>
        <motion.div
          className='relative w-32 h-32 rounded-full overflow-hidden border-4 border-secondary flex-shrink-0'
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src='/path-to-profile-picture.jpg'
            alt='Jalal Mansour'
            className='absolute w-full h-full object-cover'
          />
          <motion.img
            src='/path-to-qr-code.jpg'
            alt='QR Code'
            className='absolute w-full h-full object-cover'
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 7,
              opacity: { duration: 1, ease: "easeInOut" },
            }}
          />
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='ml-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Hello! I'm Jalal Mansour, a passionate software developer with a knack for crafting innovative solutions. With a strong foundation in TypeScript and JavaScript, I specialize in modern frameworks such as React, Node.js, and Three.js. My expertise extends to building dynamic, interactive, and scalable applications that address complex challenges. Known for my collaborative spirit and quick adaptability, I'm committed to turning ideas into impactful digital experiences. Let's create something extraordinary together!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
