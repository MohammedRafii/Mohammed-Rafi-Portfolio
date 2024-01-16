import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
  scrollBtn:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
}
const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-200%",
    opacity:1,
    transition:{
      duration:10,
      repeat:Infinity,
      repeatType:"mirror",
    }
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="wrapper" variants={textVariants}>
        <motion.div className="textContainer" initial="initial" animate="animate" variants={textVariants}>
          <motion.h2 variants={textVariants}>MOHAMMED RAFI</motion.h2>
          <motion.h1 variants={textVariants}>Front End Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}><a href="#Projects"> See the Projects</a></motion.button>
            <motion.button variants={textVariants}><a href="#Contact"> Contact Me</a></motion.button>
          </motion.div>
          <motion.div>
            <a href="#About">
              <motion.img variants={textVariants} animate="scrollBtn" src="/scroll.png" alt="scrollBtn" />
            </a> 
          </motion.div>
        </motion.div>
      <div className="imageContainer">
        <img src="/MyLogo.svg" alt="mylogo" />
      </div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="sliderText">
        Front End Developer
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero