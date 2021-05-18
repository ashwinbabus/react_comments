import React, { useRef, useState } from "react";
import "./user-dropdown.styles.scss";
import DropDown from "../../assets/dropdown.png";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../redux/action.types";
import { DropWrapper } from "../../util";

function UserDropDown() {
  const [showDrop, setShowDrop] = useState(false);

  const dispatch = useDispatch();

  const handleUserSelectChange = (user) => {
    dispatch({ type: Actions.SET_CURR_USER, user });
    setShowDrop(false);
  };

  const users = useSelector((state) => state.users);

  const currUser = useSelector((state) => state.current_user);

  const dropDownRef = useRef(null);

  return (
    <DropWrapper func={setShowDrop} dropref={dropDownRef} >
      <div className="select__user" ref={dropDownRef}>
        <div className="select" onClick={() => setShowDrop(!showDrop)}>
          <p>{currUser.name}</p>
          <img src={DropDown} alt="" />
        </div>
        {showDrop &&
          users.map((user) => (
            <div
              className="select__dropdown"
              onClick={() => handleUserSelectChange(user)}
              key={user.uid}
            >
              <img src={user.pic} alt="usricon" className="select__userimg" />
              <p>{user.name}</p>
            </div>
          ))}
      </div>
    </DropWrapper>
  );
}

export default UserDropDown;
