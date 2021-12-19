import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useGetUserQuery } from '../../redux/apiServices';

const User = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetUserQuery(id);

  let { name, email, status, createdAt, updatedAt } = !isLoading && data;

  return (
    <div>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden p-5 mt-4 bg-white border-b border-gray-200 sm:rounded-lg'>
              <div className='mb-4'>
                <h1 className='font-bold text-2xl'>{name}</h1>
              </div>
              <div>
                <p>{email}</p>
              </div>
              <div className='mt-4 '>
                <p>{moment(createdAt).format('YYYY-MM-DD hh:mm')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
