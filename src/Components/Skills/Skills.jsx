import "./skills.scss"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration:0.5,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {

  const ref = useRef()
  const isInview = useInView(ref,{margin:"-100px"})

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      // whileInView={"animate"}
      animate={isInview && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Skills
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <p>
            <b>These are the technologies I have worked with</b>
          </p>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box" whileHover={{scale:1.1,transition:{duration:0.3}}} variants={variants}
        >
          <div>
            <img src="/html.png" alt="html" />
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1,transition:{duration:0.3}}}
          className="box" variants={variants}
        >
          <div>
            <img src="/css.png" alt="html" />
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1,transition:{duration:0.3}}}
          className="box" variants={variants}
        >
          <div>
            <img src="/javascript.png" alt="html" />
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1,transition:{duration:0.3}}}
          className="box" variants={variants}
        >
          <div>
            <img src="/react.png" alt="html" />
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1,transition:{duration:0.3}}}
          className="box" variants={variants}
        >
          <div>
            <img src="/tailwind.png" alt="html" />
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1,transition:{duration:0.3}}}
          className="box" variants={variants}
        >
          <div>
            <img src="/redux.png" alt="html" />
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1,transition:{duration:0.3}}}
          className="box" variants={variants}
        >
          <div>
            <img src="/github.png" alt="html" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills