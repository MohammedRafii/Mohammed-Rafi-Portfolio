import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",

    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function clickOutSide(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.addEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
}

const Sidebar = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

      clickOutSide(ref, () => {
        setOpen(false);
      });

  return (
    <motion.div
      ref={ref}
      className="sidebar"
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButtons setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
