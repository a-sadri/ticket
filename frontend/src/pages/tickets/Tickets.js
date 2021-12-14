import { useGetTicketsQuery } from '../../redux/services/tickets';
import ActionLine from '../../components/ActionLine';

const Tickets = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetTicketsQuery();

  return (
    <>
      <ActionLine title='All Tickets' buttonText='Add New Ticket' />
      {isLoading && 'Loading...'}
      {isError && JSON.stringify(error.error)}
      {isSuccess &&
        data &&
        data.map((ticket) => <h1 key={ticket._id}>{ticket.title}</h1>)}
      <div>
        <div className='flex flex-col'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className=' shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className=' px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Title
                      </th>
                      <th
                        scope='col'
                        className=' px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Date
                      </th>
                      <th
                        scope='col'
                        className='px-6py-3text-left text-xsfont-mediumtext-gray-500uppercasetracking-wider'
                      >
                        Department
                      </th>
                      <th
                        scope='col'
                        className='px-6py-3text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Status
                      </th>
                      <th
                        scope='col'
                        className='px-6py-3text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Last reply
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              Warren Nixon
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                          Designer, UI/UX
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                          warren.nixon@example.com
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          Active
                        </span>
                      </td>
                      <td className=' px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
