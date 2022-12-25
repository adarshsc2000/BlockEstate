import React,{ useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const AnimationForDescription = ({ text }) => {
    const [showTitle, setShowTitle] = useState(false);
        setTimeout(()=> {
            setShowTitle(true);
        }, 2000); 

    return (
        <motion.div
        style={{ overflow: "hidden", display: "flex", fontSize: "1.5rem" }}
        variants={container}
        initial="hidden"
        animate="visible"
        >
        <AnimatePresence>
            {showTitle && (
                <motion.p
                    exit={{ opacity: 0}}
                ><i>Make property finding and buying an easy process</i></motion.p>
            )}
        </AnimatePresence>
        
        </motion.div>
    );
};

export default AnimationForDescription;
