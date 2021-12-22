import { NavLink as Link } from 'react-router-dom';
import moment from 'moment';
import { useGetTicketsQuery } from '../../redux/apiServices';

import ActionLine from '../../components/ActionLine';
import ContainerLayout from '../../components/ContainerLayout';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import Alerts from '../../components/shared/Alerts';
import Spinner from '../../components/shared/Spinner';

const Tickets = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetTicketsQuery();

  return (
    <>
      <ActionLine
        title='All Tickets'
        buttonText='Add New Ticket'
        url='/tickets/add'
      />
      <div>
        <ContainerLayout>
          <div className='grid grid-cols-4 text-center font-bold border divide-x p-3 m-2 rounded-lg col-start-1 col-end-5'>
            <div>
              <h2>Title</h2>
            </div>
            <div>
              <h2>User</h2>
            </div>
            <div>
              <h2>Date</h2>
            </div>
            <div>
              <h2>Status</h2>
            </div>
          </div>

          {isLoading && (
            <div>
              <div colSpan={5} className='py-10'>
                <Spinner />
              </div>
            </div>
          )}

          {isError && (
            <div>
              <div colSpan={5} className='py-10'>
                <Alerts alert='error' title={JSON.stringify(error.error)} />
              </div>
            </div>
          )}

          {isSuccess &&
            data &&
            data.map((ticket) => (
              <div
                key={ticket._id}
                className='relative group border p-3 m-2 rounded-lg col-start-1 col-end-5'
              >
                <div className='grid grid-cols-4 group-hover:blur-sm transition ease-in-out delay-75'>
                  <div>{ticket.title}</div>
                  <div className='text-center'>{ticket.user.name}</div>
                  <div className='text-center'>
                    {moment(ticket.createdAt).format('YYYY-MM-DD hh:mm')}
                  </div>
                  <div className='text-center'>
                    {ticket.status === 'answered' ? (
                      <span className='badge-success'>Answerd</span>
                    ) : ticket.status === 'pending' ? (
                      <span className='badge-warning'>Pending</span>
                    ) : (
                      <span className='badge-info'>Completed</span>
                    )}
                    {/* Check if its array */}
                  </div>
                </div>
                <div className='absolute flex gap-8 text-base justify-center group-hover:opacity-100 opacity-0 top-[20%] left-1/3 transition ease-in-out duration-500'>
                  <Link
                    to={ticket._id}
                    className='badge-info group-hover:animate-left'
                  >
                    <FaEye className='text-sm mr-2' />
                    Show ticket
                  </Link>

                  <div className='badge-warning '>
                    <FaEdit className='text-sm mr-2' />
                    Edit
                  </div>

                  <div className='badge-error group-hover:animate-right'>
                    <FaTrash className='text-sm mr-2' />
                    Delete
                  </div>
                </div>
              </div>
            ))}
        </ContainerLayout>
      </div>
    </>
  );
};

export default Tickets;
