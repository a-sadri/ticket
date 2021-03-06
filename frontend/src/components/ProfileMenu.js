import React from 'react';

const ProfileMenu = () => {
  return (
    <div
      className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
      role='menu'
      aria-orientation='vertical'
      aria-labelledby='user-menu-button'
      tabindex='-1'
    >
      {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
      <a
        href='#'
        className='block px-4 py-2 text-sm text-gray-700'
        role='menuitem'
        tabindex='-1'
        id='user-menu-item-0'
      >
        Your Profile
      </a>
      <a
        href='#'
        className='block px-4 py-2 text-sm text-gray-700'
        role='menuitem'
        tabindex='-1'
        id='user-menu-item-1'
      >
        Settings
      </a>
      <a
        href='#'
        className='block px-4 py-2 text-sm text-gray-700'
        role='menuitem'
        tabindex='-1'
        id='user-menu-item-2'
      >
        Sign out
      </a>
    </div>
  );
};

export default ProfileMenu;
