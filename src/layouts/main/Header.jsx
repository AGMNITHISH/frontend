import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa";
import { resetLoginReduxState } from "../../redux/slice/login/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me, loggedInUserStatus } = useSelector((state) => state.loginSlice);
  const handleLogout = () => {
    console.log("called");
    dispatch(resetLoginReduxState());
    navigate("/");
  };
  return (
    <div className="flex h-16 bg-gray-900 justify-between text-white items-center px-6">
      <div> Issue Dashboard</div>
      {loggedInUserStatus === "success" ? (
        <div className="flex flex-row mr-3">
          <div>
            <PiUserCirclePlusDuotone className="text-3xl my-3 mx-2" />
          </div>
          <div className="flex flex-col">
            <div className="text-lg">{me.email}</div>
            <div className="text-sm">{me.role}</div>
          </div>
          <div>
            <FaPowerOff
              className="text-2xl  cursor-pointer text-red-500 m-4"
              onClick={handleLogout}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
