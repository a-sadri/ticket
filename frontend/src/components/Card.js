const Card = ({ Icon }) => {
  return (
    <div className='p-6 items-center bg-white rounded-lg shadow-md flex'>
      <div className='text-gray-500'>
        <Icon size='2rem' />
      </div>
      <div>
        <div className='text-xl font-medium text-black'>ChitChat</div>
        <p className='text-gray-500'>You have a new message!</p>
      </div>
    </div>
  );
};

export default Card;
