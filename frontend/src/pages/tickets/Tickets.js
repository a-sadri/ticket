import moment from 'moment';
import { useGetTicketsQuery } from '../../redux/apiServices';

import InitialAll from '../../components/InitialAll';

const Tickets = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetTicketsQuery();

  const setData = () => {
    let result = data.map((item) => ({
      id: item._id,
      title: item.title,
      user: item.user.name,
      status: item.status,
    }));
    return result;
  };

  return (
    <>
      <InitialAll
        actionline={['All Tickets', 'Add New Ticket', '/Tickets/add']}
        rowHeadungs={['Title', 'Author', 'Date', 'Status']}
        data={data}
        error={error}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        rowData={['_id', 'title', 'status']}
        showURL='tickets'
        setData={setData}
      ></InitialAll>
    </>
  );
};

export default Tickets;
