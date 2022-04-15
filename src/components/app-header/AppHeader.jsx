import React from 'react';
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';

const AppHeader = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin).userInfo;


  const submitLogout = () => {
    dispatch(logout())
  }


  return (
    < div className='flex space-between'>
      <div>AppHeader</div>

      {user && (
        <Link onClick={submitLogout} to={'/'}>
          X
        </Link>
      )}
    </div>
  )
}

export default AppHeader