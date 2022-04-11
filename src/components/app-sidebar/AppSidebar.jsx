import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const SidebarStyled = styled.nav`
  width:25% ;
  height: 100vh;
  border: 2px solid chocolate ;
`;

const AppSidebar = () => {
  return (

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
    </SidebarStyled>
  )
}

export default AppSidebar