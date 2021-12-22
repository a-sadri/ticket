import { NavLink as Link } from 'react-router-dom';
// Icons
import { FaEye } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ActionButtons = ({ showURL }) => {
  return (
    <div className='absolute flex gap-8 text-base justify-center group-hover:opacity-100 opacity-0 top-[20%] left-1/3 transition ease-in-out duration-500'>
      <Link to={showURL} className='badge-info group-hover:animate-left'>
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
  );
};

export default ActionButtons;
