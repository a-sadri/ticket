const ActionLine = () => {
  return (
    <div className='flex justify-between mt-1 mb-6'>
      <div className=''>
        <h1 className='text-2xl font-bold'>All Tickets</h1>
      </div>
      <div className=''>
        <button className='bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700'>
          Add New Ticket
        </button>
      </div>
    </div>
  );
};

export default ActionLine;
