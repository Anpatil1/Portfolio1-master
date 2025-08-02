import React from "react";
import { motion } from "framer-motion";

function Pre(props) {
  return (
    <motion.div
      id={props.load ? "preloader" : "preloader-none"}
      initial={{ opacity: 1 }}
      animate={{ opacity: props.load ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="loader-container">
        <motion.div
          className="modern-loader"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
        </motion.div>
        <motion.h3
          className="loader-text"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Portfolio...
        </motion.h3>
      </div>
    </motion.div>
  );
}

export default Pre;
