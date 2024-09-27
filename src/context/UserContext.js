import React, { createContext, useState } from 'react';
import { users } from '../data/users';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({id:"user_1",name:"asd"})

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
