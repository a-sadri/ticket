import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  onHover: {
    scale: 1.05,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const IconVariants = {
  onHover: {
    x: 10,
    transition: {
      type: 'tween',
      duration: 0.8,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Card = ({ Icon, title, slug, link }) => {
  return (
    <Link to={link}>
      <motion.div variants={item}>
        <motion.div
          variants={item}
          whileHover='onHover'
          className='font-Nunito p-6 items-center bg-white rounded-lg shadow-md flex cursor-pointer justify-center'
        >
          <motion.div className='text-gray-500 pr-2' variants={IconVariants}>
            <Icon size='2rem' />
          </motion.div>
          <div>
            <div className='text-xl font-bold text-black'>{title}</div>
            <p className='text-gray-500'>{slug}</p>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Card;
