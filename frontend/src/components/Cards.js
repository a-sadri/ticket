import { TiTicket } from 'react-icons/ti';
import { MdSettings } from 'react-icons/md';
import Card from './Card';

const Cards = () => {
  return (
    <div
      className='grid grid-cols-1 gap-4 mx-3 my-7 
      md:grid-cols-2 md:mx-6
      lg:grid-cols-3 lg:mx-[15rem] lg:gap-4'
    >
      <Card Icon={TiTicket} title='Tickets' slug='' />
      <Card Icon={TiTicket} title='Categories' slug='' />
      <Card Icon={TiTicket} title='Tags' slug='' />
      <Card Icon={TiTicket} title='Departments' slug='' />
      <Card Icon={TiTicket} title='F&Q' slug='' />
      <Card Icon={MdSettings} title='Settings' slug='' />
    </div>
  );
};

export default Cards;
