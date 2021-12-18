import { useParams } from 'react-router-dom';
import { useGetMessageQuery } from '../../redux/services/messages';

const Message = () => {
  const { id } = useParams();

  const { data } = useGetMessageQuery(id);

  const post = JSON.stringify(data);

  console.log(typeof post);
  console.log(JSON.parse(post));
  console.log(typeof post);

  return <div>{JSON.parse(post.title)}</div>;
};

export default Message;
