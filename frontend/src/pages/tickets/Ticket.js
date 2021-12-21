import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useGetTicketQuery } from '../../redux/apiServices';
import ContainerLayout from '../../components/ContainerLayout';

const Ticket = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetTicketQuery(id);

  let { title, description, user, status, createdAt, updatedAt } =
    !isLoading && data;

  let user_name;
  if (user) {
    user_name = user.name;
  }

  return (
    <ContainerLayout>
      <div className='p-5'>
        <div className='mb-4'>
          <h1 className='font-bold text-2xl'>{title}</h1>
        </div>
        <div>
          <p>{user_name}</p>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className='mt-4 '>
          <p>{moment(createdAt).format('YYYY-MM-DD hh:mm')}</p>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Ticket;
