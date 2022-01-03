import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { setCredentials } from '../../redux/authSlice';
import { useLoginMutation } from '../../redux/apiServices';

import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmitClicked = async (data) => {
    try {
      const result = await login(data);
      if (result.data) {
        console.log(result.data);
        dispatch(setCredentials(result.data));
        navigate(`/`);
      }
    } catch (err) {
      console.log(err);
    }

    // const newTicket = await login({
    //   title: data.title,
    //   description: data.description,
    // });
    // if (newTicket) {
    //   navigate(`/tickets/`);
    // }
  };

  return (
    <div class='flex items-center justify-center min-h-screen bg-gray-100'>
      <div class='px-8 py-6 mt-4 text-left bg-white shadow-lg'>
        <div class='flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='w-20 h-20 text-blue-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M12 14l9-5-9-5-9 5 9 5z' />
            <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
            />
          </svg>
        </div>
        <h3 class='text-2xl font-bold text-center'>Login to your account</h3>
        <form onSubmit={handleSubmit(onSubmitClicked)}>
          <div class='mt-4'>
            <div>
              <label class='block' for='email'>
                Email
              </label>
              <input
                type='text'
                placeholder='Email'
                class='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                {...register('email', { required: true })}
              />
              <span class='text-xs tracking-wide text-red-600'>
                Email field is required{' '}
              </span>
            </div>
            <div class='mt-4'>
              <label class='block'>Password</label>
              <input
                type='password'
                placeholder='Password'
                class='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                {...register('password', { required: true })}
              />
            </div>
            <div class='flex items-baseline justify-between'>
              <button class='px-6 py-2 mt-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700'>
                Login
              </button>
              <a href='#' class='text-sm text-blue-600 hover:underline'>
                Forgot password?
              </a>
            </div>
          </div>
        </form>
        <h3 className='text-center my-6 border-b-2 leading-[.01rem]'>
          <Link to='/register' className='px-3 bg-white'>
            Create an account
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
