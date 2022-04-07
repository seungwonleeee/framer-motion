import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: { delay: 1.5 },
  },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1],
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
    >
      <motion.h2
        initial={{
          textShadow: '0px 0px 8px rgb(255,255,255)',
        }}
        // animate={{ fontSize: 50, color: '#ff2994' }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
