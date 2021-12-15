const ErrorAlert = ({ title }) => {
  return (
    <div
      className={`p-4 mb-4 mx-10 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800`}
      role='alert'
    >
      <span className='font-bold mr-3'>Error!</span>
      <span>{title}</span>
    </div>
  );
};

export default ErrorAlert;
