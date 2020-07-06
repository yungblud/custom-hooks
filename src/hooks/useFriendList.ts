import { useState, useEffect } from 'react';
import { User } from '../types/user';
import UserAPI from '../api/UserAPI';

const useFriendList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const listUsers = async () => {
      setUsers(await UserAPI.users());
    };
    listUsers();
  }, [setUsers]);
  return users;
};

export default useFriendList;
