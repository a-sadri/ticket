const ActionLine = ({ title, buttonText }) => {
  return (
    <div className='flex justify-between mt-1 mb-6'>
      <div className=''>
        <h1 className='text-2xl font-bold'>{title}</h1>
      </div>
      <div className=''>
        <button className='bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700'>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ActionLine;
