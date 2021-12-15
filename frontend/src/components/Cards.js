import { motion } from 'framer-motion';
import Card from './Card';
// Icons
import { TiTicket } from 'react-icons/ti';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineCategory } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiHashtag } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Cards = () => {
  return (
    <motion.div
      className='grid grid-cols-1 gap-4 mx-3 my-7 
      md:grid-cols-2 md:mx-6
      lg:grid-cols-3 lg:mx-[15rem] lg:gap-4'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <Card Icon={TiTicket} title='Tickets' slug='' link='/tickets' />
      <Card Icon={MdOutlineCategory} title='Categories' slug='' link='/' />
      <Card Icon={RiHashtag} title='Tags' slug='' link='/' />
      <Card Icon={TiTicket} title='Departments' slug='' link='/' />
      <Card Icon={AiOutlineQuestionCircle} title='F&Q' slug='' link='/' />
      <Card Icon={BiMessageDetail} title='Messages' slug='' link='/messages' />
      <Card Icon={FiSettings} title='Settings' slug='' link='/' />
    </motion.div>
  );
};

export default Cards;
