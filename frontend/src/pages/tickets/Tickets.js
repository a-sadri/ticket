import { useGetTicketsQuery } from '../../redux/apiServices';
import ActionLine from '../../components/ActionLine';
import Spinner from '../../components/shared/Spinner';
import Alerts from '../../components/shared/Alerts';

const Tickets = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetTicketsQuery();

  return (
    <>
      <ActionLine title='All Tickets' buttonText='Add New Ticket' />
      <div>
        <div className='flex flex-col'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className=' shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr className='rowspan'>
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
                    {isLoading && (
                      <tr>
                        <td colSpan={5} className='py-10'>
                          <Spinner />
                        </td>
                      </tr>
                    )}

                    {isError && (
                      <tr>
                        <td colSpan={5} className='py-10'>
                          <Alerts
                            alert='error'
                            title={JSON.stringify(error.error)}
                          />
                        </td>
                      </tr>
                    )}
                    {isSuccess &&
                      data &&
                      data.map((ticket) => (
                        <tr key={ticket._id}>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='flex items-center'>
                              <div className='ml-4'>
                                <div className='text-sm font-medium text-gray-900'>
                                  {ticket.title}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                              {ticket.date}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                              {ticket.department}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                              {ticket.status}
                            </span>
                          </td>
                          <td className=' px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            <a
                              href='#'
                              className='text-indigo-600 hover:text-indigo-900'
                            >
                              {ticket.lastReply}
                            </a>
                          </td>
                        </tr>
                      ))}
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
