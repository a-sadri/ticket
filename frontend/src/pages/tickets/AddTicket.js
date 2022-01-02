import ContainerLayout from '../../components/ContainerLayout';
import { useForm } from 'react-hook-form';
import { useAddNewTicketMutation } from '../../redux/apiServices';
import { useNavigate } from 'react-router-dom';

const AddTicket = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [addNewTicket, { isLoading }] = useAddNewTicketMutation();

  const navigate = useNavigate();

  const onSubmitClicked = async (data) => {
    const newTicket = await addNewTicket({
      title: data.title,
      description: data.description,
    });
    if (newTicket) {
      navigate(`/tickets/`);
    }
  };

  return (
    <div>
      <ContainerLayout>
        <form onSubmit={handleSubmit(onSubmitClicked)} className='p-5'>
          <div className='mb-6'>
            <label
              htmlFor=''
              className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              className={'input-normal ' + (errors.title ? 'input-error' : '')}
              placeholder='Ticket subject'
              {...register('title', { required: true })}
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='description'
              className='block mb-2 font-medium text-gray-900 dark:text-gray-400'
            >
              Description
            </label>
            <textarea
              id='description'
              rows='4'
              className={
                'input-normal ' + (errors.description ? 'input-error' : '')
              }
              placeholder='Description'
              {...register('description', { required: true })}
            ></textarea>
          </div>

          <div>
            <button
              type='submit'
              className='bg-gray-900 text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              Submit
            </button>
          </div>
        </form>
      </ContainerLayout>
    </div>
  );
};

export default AddTicket;
