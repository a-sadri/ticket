import ActionLine from '../../components/ActionLine';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

const Messages = () => {
  return (
    <>
      <ActionLine title='All Messages' buttonText='Add New Message' />
      <div>
        <div className='flex flex-col'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg'>
                <div className='grid grid-cols-4 text-center border divide-x p-3 m-2 rounded-lg col-start-1 col-end-5'>
                  <div>
                    <h2>Title</h2>
                  </div>
                  <div>
                    <h2>Author</h2>
                  </div>
                  <div>
                    <h2>Date</h2>
                  </div>
                  <div>
                    <h2>Status</h2>
                  </div>
                </div>

                <div className='relative group border p-3 m-2 rounded-lg col-start-1 col-end-5'>
                  <div className='grid grid-cols-4 group-hover:blur-sm transition ease-in-out delay-75'>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                  </div>
                  <div className='absolute flex gap-8 text-base justify-center group-hover:opacity-100 opacity-0 top-[20%] left-1/3 transition ease-in-out delay-75 duration-500'>
                    <div className='badge-info group-hover:animate-left'>
                      <FaEye className='text-sm mr-2' />
                      Show Message
                    </div>

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
                <div className='relative group border p-3 m-2 rounded-lg col-start-1 col-end-5'>
                  <div className='grid grid-cols-4 group-hover:blur-sm transition ease-in-out delay-75'>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                  </div>
                  <div className='absolute flex gap-8 text-base justify-center group-hover:opacity-100 opacity-0 top-[20%] left-1/3 transition ease-in-out duration-500'>
                    <div className='badge-info group-hover:animate-left'>
                      <FaEye className='text-sm mr-2' />
                      Show Message
                    </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
