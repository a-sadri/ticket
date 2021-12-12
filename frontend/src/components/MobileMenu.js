const MobileMenu = () => {
  return (
    <div className='sm:hidden' id='mobile-menu'>
      <div className='px-2 pt-2 pb-3 space-y-1'>
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a
          href='#'
          className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
          aria-current='page'
        >
          Dashboard
        </a>

        <a
          href='#'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >
          Team
        </a>

        <a
          href='#'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >
          Projects
        </a>

        <a
          href='#'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >
          Calendar
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
