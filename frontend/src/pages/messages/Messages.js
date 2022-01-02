import { dateFormat } from '../../utils/helpers';
import { useGetMessagesQuery } from '../../redux/apiServices';

import InitialAll from '../../components/InitialAll';

const Messages = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetMessagesQuery();

  const setData = () => {
    let result = data.map((item) => ({
      id: item._id,
      title: item.title,
      description: item.description.substring(0, 75) + '...',
      date: dateFormat(item.createdAt),
      status: item.status,
    }));
    return result;
  };

  return (
    <>
      <InitialAll
        actionline={['All Messages', 'Add New Message', '/messages/add']}
        rowHeadungs={['Title', 'Description', 'Date', 'Status']}
        data={data}
        error={error}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        setData={setData}
        showURL='messages'
      ></InitialAll>
    </>
  );
};

export default Messages;
