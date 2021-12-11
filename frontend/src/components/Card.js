const Card = ({ Icon, title, slug }) => {
  return (
    <div className='font-Nunito p-6 items-center bg-white rounded-lg shadow-md flex cursor-pointer justify-center'>
      <div className='text-gray-500 pr-2'>
        <Icon size='2.1rem' />
      </div>
      <div>
        <div className='text-xl font-bold text-black'>{title}</div>
        <p className='text-gray-500'>{slug}</p>
      </div>
    </div>
  );
};

export default Card;
