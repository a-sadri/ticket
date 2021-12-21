import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useGetMessageQuery } from '../../redux/apiServices';
import InitialSingle from '../../components/InitialSingle';

const Message = () => {
  const { id } = useParams();

  const { data, error, isLoading, isSuccess, isError } = useGetMessageQuery(id);

  let { title, description, status, createdAt, updatedAt } = !isLoading && data;

  return (
    <InitialSingle
      data={data}
      error={error}
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    >
      <div className='p-5'>
        <div className='mb-4'>
          <h1 className='font-bold text-2xl'>{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className='mt-4 '>
          <p>{moment(createdAt).format('YYYY-MM-DD hh:mm')}</p>
        </div>
      </div>
    </InitialSingle>
  );
};

export default Message;
