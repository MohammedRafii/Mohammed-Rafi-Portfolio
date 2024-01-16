import { motion } from "framer-motion";
const varients = {
  open: {
    transition:{
      staggerChildren:0.15
    }
  },
  closed: { 
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1
    }
   },
};
const ItemVarients = {
  open: {
    y:0,
    opacity:1    
  },
  closed: { 
    y:50,
    opacity:0
  },
};
const Links = ({setOpen}) => {
  const items = ["Homepage", "About", "Skills", "Projects", "Contact"];
  return (
    <motion.div
      variants={varients}
      className="links"
    >
      {items.map((item) => (
        <motion.a href={`#${item}`} onClick={() => setOpen(prev => !prev)} variants={ItemVarients} key={item}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
