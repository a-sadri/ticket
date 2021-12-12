import { useState } from 'react';

import Menu from './Menu';
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';
import avatar from '../assets/images/profiles/avatar.png';

const Header = () => {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <div className='mb-6'>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                <span className='sr-only'>Open main menu</span>

                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>

                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 flex items-center'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
                <img
                  className='hidden lg:block h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                  alt='Workflow'
                />
              </div>
              <Menu />
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <span className='sr-only'>View notifications</span>

                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>

              <div className='ml-3 relative'>
                <div>
                  <button
                    type='button'
                    className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={() => setIsOpenProfileMenu(!isOpenProfileMenu)}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img className='h-8 w-8 rounded-full' src={avatar} alt='' />
                  </button>
                </div>

                {isOpenProfileMenu && <ProfileMenu />}
              </div>
            </div>
          </div>
        </div>

        {isOpenMobileMenu && <MobileMenu />}
      </nav>
    </div>
  );
};

export default Header;
