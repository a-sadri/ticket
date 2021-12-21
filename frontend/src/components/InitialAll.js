import { NavLink as Link } from 'react-router-dom';
import moment from 'moment';
// custom component
import ActionLine from './ActionLine';
import ContainerLayout from './ContainerLayout';
import Spinner from './shared/Spinner';
import Alerts from './shared/Alerts';
// Icons
import { FaEye } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const InitialAll = ({
  data,
  error,
  isLoading,
  isSuccess,
  isError,
  children,
}) => {
  return (
    <>
      <ActionLine
        title='All Messages'
        buttonText='Add New Message'
        url='/messages/add'
      />

      <ContainerLayout>
        <div className='grid grid-cols-4 text-center font-bold border divide-x p-3 m-2 rounded-lg col-start-1 col-end-5'>
          <div>
            <h2>Title</h2>
          </div>
          <div>
            <h2>Author</h2>
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
            <div className='py-10'>
              <Spinner />
            </div>
          </div>
        )}

        {isError && (
          <div>
            <div className='py-10'>
              <Alerts alert='error' title={JSON.stringify(error.error)} />
            </div>
          </div>
        )}

        {isSuccess &&
          data &&
          data.map((message) => (
            <div
              key={message._id}
              className='relative group border p-3 m-2 rounded-lg col-start-1 col-end-5'
            >
              <div className='grid grid-cols-4 group-hover:blur-sm transition ease-in-out delay-75'>
                <div>{message.title}</div>
                <div className='text-center'>john doe</div>
                <div className='text-center'>
                  {moment(message.createdAt).format('YYYY-MM-DD hh:mm')}
                </div>
                <div className='text-center'>
                  {message.status ? (
                    <span className='badge-success'>Published</span>
                  ) : (
                    <span className='badge-error'>Draft</span>
                  )}
                </div>
              </div>
              <div className='absolute flex gap-8 text-base justify-center group-hover:opacity-100 opacity-0 top-[20%] left-1/3 transition ease-in-out duration-500'>
                <Link
                  to={message._id}
                  className='badge-info group-hover:animate-left'
                >
                  <FaEye className='text-sm mr-2' />
                  Show Message
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
    </>
  );
};

export default InitialAll;
