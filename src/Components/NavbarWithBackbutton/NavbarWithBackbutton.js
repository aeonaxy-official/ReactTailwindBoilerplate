import logo from '../../images/company-logo.png';
const NavbarWithBackbutton = () => {
  
  return <>
        <div className='flex flex-start gap-2 items-center px-2'>
          <div >
              <img src={logo}/>
          </div>
          <div>
            <button className='font-bold bg-gray-200 px-4 py-2 rounded-lg'>
                {'<'}
            </button>
          </div>
        </div>  
  </>;
};

export default NavbarWithBackbutton;
