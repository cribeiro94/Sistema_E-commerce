import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search 
    ? props.location.search.split('=')[1]
    : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
  return (
  <div>
      <form className="form" onSubmit={submitHandler}>
          <div>
              <h1>Faça seu login</h1>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
              <label htmlFor="email">Endereço de E-mail</label>
              <input type="email" id="email" placeholder="Digite seu email" required
              onChange={(e) => setEmail(e.target.value)}>
              </input>
          </div>
          <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Digite sua senha" required
              onChange={(e) => setPassword(e.target.value)}>
              </input>
          </div>
          <div>
              <label />
              <button className="primary" type="submit">Continuar</button>
          </div>
          <div>
              <label />
              <div>
                  Cliente novo? {' '}
                  <Link to={`/register?redirect=${redirect}`}>Crie sua conta no MarketPlay</Link>
              </div>
          </div>
      </form>
  </div>
  )
}
