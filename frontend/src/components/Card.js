import { TiTicket } from 'react-icons/ti';

const Card = () => {
  return (
    <div className='p-6 max-w-sm items-center bg-white rounded-xl shadow-md flex'>
      <div className=''>
        <TiTicket size='2rem' />
      </div>
      <div>
        <div className='text-xl font-medium text-black'>ChitChat</div>
        <p className='text-gray-500'>You have a new message!</p>
      </div>
    </div>
  );
};

export default Card;
