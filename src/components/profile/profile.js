import React from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {
  const userInfo = useSelector((state) => state.profile.userInfo);
  return (
    <div>
      <p>Name: {userInfo.name}</p>
      <p>Password: {userInfo.password}</p>
      <p>Email: {userInfo.email}</p>
      <p>Photo: {userInfo.photo}</p>
    </div>
  );
}
