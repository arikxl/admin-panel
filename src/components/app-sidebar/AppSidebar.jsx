import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarStyled = styled.nav`
  width:100% ;
  height: 100vh;
  border: 2px solid chocolate ;
`;

const AppSidebar = () => {
  return (
    <div>
      <SidebarStyled>
        <div>
          <Link to='/'>
            LOGO
          </Link>
          &nbsp;
          <button>🔘</button>
        </div>
        <hr />
        <Link to='/categories'>
          <h1>Categories</h1>
        </Link>
        <Link to='/orders'>
          <h1>Orders</h1>
        </Link>
        <Link to='/products'>
          <h1>Products</h1>
        </Link>
        <Link to='/users'>
          <h1>Users</h1>
        </Link>
        <Link to='/homepage'>
          <h1>Home</h1>
        </Link>
        <Link to='/login'>
          <h1>Login</h1>
        </Link>
      </SidebarStyled>
    </div>
  );
};

export default AppSidebar;