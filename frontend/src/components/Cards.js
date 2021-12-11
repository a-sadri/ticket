import { TiTicket } from 'react-icons/ti';
import Card from './Card';

const Cards = () => {
  return (
    <div
      className='grid grid-cols-1 gap-4 mx-3 my-7 
      md:grid-cols-2 md:mx-6
      lg:grid-cols-3 lg:mx-[15rem] lg:gap-4'
    >
      <Card Icon={TiTicket} />
      <Card Icon={TiTicket} />
      <Card Icon={TiTicket} />
      <Card Icon={TiTicket} />
      <Card Icon={TiTicket} />
      <Card Icon={TiTicket} />
    </div>
  );
};

export default Cards;
