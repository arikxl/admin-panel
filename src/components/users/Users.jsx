import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../redux/actions/userActions';
import Loader from '../Loaders/Loader/Loader';
import Error from '../Loaders/Error';

const UserItemStyled = styled.article`
    width: 200px;
    /* height: 70px; */
    border: 1px solid chocolate ;
    margin-bottom: 10px;
    display: flex ;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    img{
      width: 50px;
      display: block ;
    }


`;

const Users = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, []);


  return (
    <div>
      <h1>users:</h1>
      {loading ? <Loader /> : error ? <Error message={error} />
        : (
          <>
            <div className='flex column'>
              {users?.map((user) => (
                <UserItemStyled key={user._id}>
                  <img src={`https://avatars.dicebear.com/api/bottts/${user._id}.svg`}
                    alt="" />
                  <h3>{user.name}</h3>
                  <p>{user.isAdmin ? 'Admin' : 'User'}</p>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </UserItemStyled>
              ))}
            </div>
          </>
        )}
    </div>
  )
}

export default Users