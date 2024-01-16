import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./cursor.scss"

const Cursor = () => {

  const [postion, setPostion] = useState({x:0,y:0})

  useEffect(() => {
    const mouseMove = (e)=>{
      setPostion({x:e.clientX,y:e.clientY})
    }

    window.addEventListener("mousemove",mouseMove)
    
    return () => {
      window.removeEventListener("mousemove",mouseMove)
    }
  }, [])
  

  return (
    <motion.div animate={{x:postion.x+10,y:postion.y+10}} className="cursor"></motion.div>
  )
}

export default Cursor