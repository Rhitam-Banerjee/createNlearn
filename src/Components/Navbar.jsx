/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../assets";
import { resetAdmin } from "../reducers/adminSlice";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, admin } = useSelector((store) => store.admin);
  const { adminId, name, role } = admin;

  return (
    <section className="fixed top-0 h-[100px] w-full flex flex-row justify-between items-center gap-[20px] px-8 bg-white shadow-2xl z-50">
      <Link to="/">
        <img src={Logo} className="w-[50px]" alt="" />
      </Link>
      <span className="mr-auto text-blue-500 font-bold">Hello, {name}</span>
      <button
        className="bg-errorRed p-3 rounded-[5px] text-white font-bold"
        onClick={() => dispatch(resetAdmin())}
      >
        Logout
      </button>
    </section>
  );
};

export default Navbar;
