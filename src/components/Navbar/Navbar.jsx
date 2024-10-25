import img from '../../assets/img/logo.png'
import PropTypes from 'prop-types';
import { RiCoinFill } from "react-icons/ri";


const Navbar = () => {
    return (
           // logo 
   <div className='flex justify-between my-8 space-y-4'>
     <div>
     <img src={img} alt="" />
     </div>

      {/* menu  */}
     <div>
        <ul className='flex items-center gap-5 '>
            <li>Home</li>
            <li>Fixture</li>
            <li>Team</li>
            <li>Schedules</li>
            <button className='p-2 flex items-center text-center text-xl bg-stone-200 rounded-xl'>0 Coin <RiCoinFill></RiCoinFill></button>
        </ul>

     </div>
   </div>



    );
};

export default Navbar;