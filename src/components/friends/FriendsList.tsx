import React from "react";
import useFriendList from "../../hooks/useFriendList";

const FriendsList = () => {
  const users = useFriendList();
  const userList = users.map((user) => {
    return <div key={user.id}>{user.name}</div>;
  });
  if (userList.length === 0) {
    return <div>...loading Friends</div>;
  }
  return <div>{userList}</div>;
};

export default FriendsList;
