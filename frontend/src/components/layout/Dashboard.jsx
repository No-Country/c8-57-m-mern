import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import { HiOutlineChat } from 'react-icons/hi';
import { FaBriefcaseMedical, FaRegAddressBook } from 'react-icons/fa';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
<<<<<<< HEAD
    <div className="relative z-10">
    {/* Caja con redireccionamiento, homr, chat, tienda, para ti, perfil */}
    <div
          className={`flex bg-[#597a97] w-full p-1 px-25  justify-around text-fourth sm:fixed sm:left-0  sm:duration-150 sm:flex-col  sm:h-screen sm:items-center  sm:gap-5 sm:justify-center ${
            showMenu ? 'sm:w-60' : 'sm:w-10 lg:w-16'
=======
    <div>
      {/* Caja con redireccionamiento, homr, chat, tienda, para ti, perfil */}
      <div
        className={`bg-secondary flex w-full p-1 px-25 z-10  justify-around text-fourth sm:fixed sm:left-0  sm:duration-150 sm:flex-col  sm:h-screen sm:items-center  sm:gap-5 sm:justify-center ${
          showMenu ? 'sm:w-60' : 'sm:w-10 lg:w-16'
        }`}
      >
        <button
          type="submit"
          className={`hidden sm:absolute sm:top-2  sm:text-2xl sm:block sm:duration-150 sm:cursor-pointer  ${
            showMenu && 'rotate-180 left-3/4'
>>>>>>> developer
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoIosArrowForward className="text-third" />
        </button>
        <Link to="/home">
          <div className="flex flex-col  items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <GoHome className="text-[#f4717f] text-2xl sm:text-4xl hover:scale-125 duration-200" />
            <h3 className={`${!showMenu && 'sm:hidden'}`}>Home</h3>
          </div>
        </Link>
        <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
          <HiOutlineChat className="text-[#f4717f] text-2xl lg:text-4xl hover:scale-125 duration-200" />
          <h3 className={`${!showMenu && 'sm:hidden'}`}>Chat</h3>
        </div>
        <Link to="/paid">
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <FaBriefcaseMedical className="text-[#f4717f] text-2xl sm:text-4xl hover:scale-125 duration-200" />
            <h3 className={`${!showMenu && 'sm:hidden'}`}>Terapia</h3>
          </div>
<<<<<<< HEAD
          <Link to='/emotionResume'>
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <RiLightbulbFlashLine className="text-[#f4717f] text-2xl sm:text-4xl hover:scale-125 duration-200" />
            <h3 className={`${!showMenu && 'sm:hidden'}`}>Para ti</h3>
          </div>
          </Link>
          <Link to="/perfil">
            <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
              <AiOutlineUser className="text-[#f4717f] text-2xl sm:text-4xl hover:scale-125 duration-200" />
              <h3 className={`${!showMenu && 'sm:hidden'}`}>Perfil</h3>
            </div>
          </Link>
=======
        </Link>
        <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
          <RiLightbulbFlashLine className="text-[#f4717f] text-2xl sm:text-4xl hover:scale-125 duration-200" />
          <h3 className={`${!showMenu && 'sm:hidden'}`}>Para ti</h3>
>>>>>>> developer
        </div>
        <Link to="/perfil">
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <AiOutlineUser className="text-[#f4717f] text-2xl sm:text-4xl hover:scale-125 duration-200" />
            <h3 className={`${!showMenu && 'sm:hidden'}`}>Perfil</h3>
          </div>
        </Link>
        <Link to="/controler">
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <FaRegAddressBook className="text-[#f4717f] text-2xl sm:text-4xl hover:scale-125 duration-200" />
            <h3 className={`${!showMenu && 'sm:hidden'}`}>Perfil</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
