import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useGetUserQuery } from '../../redux/apiServices';

import ContainerLayout from '../../components/ContainerLayout';

const User = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetUserQuery(id);

  let { name, email, status, createdAt, updatedAt } = !isLoading && data;

  return (
    <ContainerLayout>
      <div className='p-5'>
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
    </ContainerLayout>
  );
};

export default User;
