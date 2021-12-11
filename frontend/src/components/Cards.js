import { TiTicket } from 'react-icons/ti';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineCategory } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiHashtag } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import Card from './Card';

const Cards = () => {
  return (
    <div
      className='grid grid-cols-1 gap-4 mx-3 my-7 
      md:grid-cols-2 md:mx-6
      lg:grid-cols-3 lg:mx-[15rem] lg:gap-4'
    >
      <Card Icon={TiTicket} title='Tickets' slug='' link='/tickets' />
      <Card Icon={MdOutlineCategory} title='Categories' slug='' link='/' />
      <Card Icon={RiHashtag} title='Tags' slug='' link='/' />
      <Card Icon={TiTicket} title='Departments' slug='' link='/' />
      <Card Icon={AiOutlineQuestionCircle} title='F&Q' slug='' link='/' />
      <Card Icon={BiMessageDetail} title='Messages' slug='' link='/' />
      <Card Icon={FiSettings} title='Settings' slug='' link='/' />
    </div>
  );
};

export default Cards;
