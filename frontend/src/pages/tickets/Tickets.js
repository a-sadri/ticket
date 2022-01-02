import { useGetTicketsQuery } from '../../redux/apiServices';
import { dateFormat } from '../../utils/helpers';
import InitialAll from '../../components/InitialAll';

const Tickets = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetTicketsQuery();

  const setData = () => {
    let result = data.map((item) => ({
      id: item._id,
      title: item.title,
      user: item.user.name,
      date: dateFormat(item.createdAt),
      status: item.status,
    }));
    return result;
  };

  return (
    console.log(),
    (
      <>
        <InitialAll
          actionline={['All Tickets', 'Add New Ticket', '/Tickets/add']}
          rowHeadungs={['Title', 'Author', 'Date', 'Status']}
          data={data}
          error={error}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          showURL='tickets'
          setData={setData}
        ></InitialAll>
      </>
    )
  );
};

export default Tickets;
