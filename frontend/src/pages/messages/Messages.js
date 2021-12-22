import { NavLink as Link } from 'react-router-dom';
import moment from 'moment';
import { useGetMessagesQuery } from '../../redux/apiServices';

import InitialAll from '../../components/InitialAll';

const Messages = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetMessagesQuery();

  return (
    <>
      <InitialAll
        rowHeadungs={['Title', 'Author', 'Date', 'Status']}
        data={data}
        error={error}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        rowData={['title', 'status']}
      ></InitialAll>
    </>
  );
};

export default Messages;
