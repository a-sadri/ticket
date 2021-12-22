import moment from 'moment';
import { useGetMessagesQuery } from '../../redux/apiServices';

import InitialAll from '../../components/InitialAll';

const Messages = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetMessagesQuery();

  return (
    <>
      <InitialAll
        actionline={['All Messages', 'Add New Message', '/messages/add']}
        rowHeadungs={['Title', 'Author', 'Date', 'Status']}
        data={data}
        error={error}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        rowData={['_id', 'title', 'status']}
        showURL='messages'
      ></InitialAll>
    </>
  );
};

export default Messages;
