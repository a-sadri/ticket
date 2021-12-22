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
  rowHeadungs,
  data,
  error,
  isLoading,
  isSuccess,
  isError,
  children,
  rowData,
}) => {
  const dataCreator = () => {
    const filtered = data.map((item) =>
      Object.keys(item)
        .filter((key) => rowData.includes(key))
        .reduce((obj, key) => {
          obj[key] = item[key];
          return obj;
        }, {})
    );
    return filtered;
  };

  const dataRowCreator = () => {
    const data = dataCreator();

    const result = data.map((item) => {
      return Object.values(item);
    });

    return result;
  };

  return (
    <>
      <ActionLine
        title='All Messages'
        buttonText='Add New Message'
        url='/messages/add'
      />

      <ContainerLayout>
        <div className='grid grid-cols-4 text-center font-bold border divide-x p-3 m-2 rounded-lg col-start-1 col-end-5'>
          {rowHeadungs.map((heading) => (
            <div key={heading}>
              <h2>{heading}</h2>
            </div>
          ))}
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
          dataRowCreator().map((row, index) => (
            <div
              key={index}
              className='relative group border p-3 m-2 rounded-lg col-start-1 col-end-5'
            >
              <div className='grid grid-cols-4 group-hover:blur-sm transition ease-in-out delay-75'>
                {row.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>

              <div className='absolute flex gap-8 text-base justify-center group-hover:opacity-100 opacity-0 top-[20%] left-1/3 transition ease-in-out duration-500'>
                <Link
                  to={'row._id'}
                  className='badge-info group-hover:animate-left'
                >
                  <FaEye className='text-sm mr-2' />
                  Show result
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
