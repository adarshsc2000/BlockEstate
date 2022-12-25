import React, {useState, useEffect, useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "../../public/images.js";

const AnimationForImages = () => {
console.log(images);
    return(
            <motion.div className="topproperties">
                <b>Our top Properties are</b><br/>
                <motion.div className="inner-topproperties">
                    {images.map(image => {
                        return(
                            <motion.div className="item">
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div> 
    );
};

export default AnimationForImages;