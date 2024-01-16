import "./navbar.scss";
import { motion } from "framer-motion";
import GitHub from "../../assets/GithubLogo.png";
import LinkedIn from "../../assets/LinkedInLogo.png";
import Mail from "../../assets/MailLogo.png";
import Sidebar from "../Sidebar/Sidebar";

const varients = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
  hidden: { opacity: 0 },
};

const Navbar = () => {
  const logos = [
    { [GitHub]: "https://github.com/MohammedRafii" },
    { [LinkedIn]: "https://in.linkedin.com/in/mohammed-rafi-t-s-59ba88216" },
    { [Mail]: "mailto:mohammedrafits6@gmail.com" },
  ];
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Mohammed Rafi
        </motion.span>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={varients}
          className="social"
        >
          {logos.map((logo) =>
            Object.entries(logo).map((a) => (
              <motion.a variants={varients} href={a[1]} key={logo}>
                <img src={a[0]} alt="SocialMediaLogo" />
              </motion.a>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
