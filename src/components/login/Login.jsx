import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { login } from '../../redux/actions/userActions';
import Error from '../Loaders/Error';
import Loader from '../Loaders/Loader/Loader';

const LoginStyled = styled.main`
  height:80vh ;
  width: 400px ;
  margin: 0 auto ;
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  form {
    display: flex ;
    flex-direction: column ;
    justify-content: center ;

    input {
      padding: 5px ;
      border: 1px solid chocolate ;
    }

    button {
      background-color: chocolate ;
      font-size: 16px ;
      padding: 5px ;
      color: white ;
      border: none ;
    }
  }
  button {
    margin-bottom: 20px ;
  }

  button:first-child{
    margin-top: 20px ;
    padding:  5px;
    border: 3px double chocolate ;
    background-color: transparent ;
    border-radius: 5px ;
  }

`;

const Login = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = user;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) navigate(`/homepage`)
  }, [userInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
    <LoginStyled>
      <a href={'http://localhost:3000/'}>
        <button>🏠</button>
      </a>

      {error && <Error message={error}/>}
      {loading && <Loader />}
      {userInfo && !userInfo?.isAdmin && <Error message='You are not admin!'/>}

      <form onSubmit={handleSubmit} >
        <input type="email" placeholder='Email' name="email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" name="password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button>LOGIN</button>
      </form>
    </LoginStyled>
  );
};

export default Login;