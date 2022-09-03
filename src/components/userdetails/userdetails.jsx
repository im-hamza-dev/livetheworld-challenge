import React, { useContext } from "react";
import "./userdetails.scss";
import UserProfile from "../../assets/svgs/profile.svg";
import AppContext from "../../context/context";

const UserDetails = () => {
  const { userData } = useContext(AppContext);
  console.log(userData);

  return (
    <div className="user-wrapper">
      {userData && (
        <>
          <div>{userData?.first_name + " " + userData?.last_name}</div>
          <img src={UserProfile} alt="user-profile" />
        </>
      )}
    </div>
  );
};

export default UserDetails;
