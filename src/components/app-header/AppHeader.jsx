import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { logout } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    background-color: chocolate;
    
    .wrapper {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
            background-color: white ;
            font-size: 16px ;
            padding:5px 15px ;
            color: chocolate ;
            border: none ;
        }
    };
`;



const AppHeader = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin).userInfo;

  const submitLogout = () => {
    dispatch(logout())
  }

  return (
    < HeaderStyled className='flex space-between'>
      <div className='wrapper'>

        <div>AppHeader</div>

        {user && (
          <Link onClick={submitLogout} to={'/'}>
            <button>X</button>
            
          </Link>
        )}
      </div>
    </HeaderStyled>
  );
};

export default AppHeader;