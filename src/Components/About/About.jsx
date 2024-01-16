import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration:0.8,
      staggerChildren: 0.3,
    },
  },
};

const About = () => {

  const ref = useRef()
  const isInview = useInView(ref,{margin:"-100px"})

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      animate={isInview && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          About
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <p>
            <motion.b whileHover={{color:"#3ef6e6"}}>Unique</motion.b> Ideas
          </p>
        </div>
        <div className="title">
          <p>
            <motion.b whileHover={{color:"#3ef6e6"}}>For Your</motion.b> Business.
          </p>
          <button><a href="#Projects">WHAT I DID</a></button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div
          className="box"
        >
          <h3>👋 Hi there!</h3>
          <p>
            I'm Mohammed Rafi, a passionate front-end web developer. With a creating visually and user-friendly websites, I strive to bring ideas to life through the art of coding, I bring creativity and precision to every project.
          </p>
        </div>
        <div
          className="box"
        >
          <h3>🚀 Tech Enthusiast</h3>
          <p>
          As a tech enthusiast from Vellore, I leverage my skills in HTML, CSS, and JavaScript to build responsive and user-friendly websites. My goal is to create not just websites, but immersive online experiences that leave a lasting impression.
          </p>
        </div>
        <div
          className="box"
        >
          <h3>🎓 Graduated</h3>
          <p>
          Graduated with a degree in BCA, I constantly seek to expand my knowledge and stay up-to-date with the latest trends in web development. I believe in the power of clean code and thoughtful design to make the web a better place.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
