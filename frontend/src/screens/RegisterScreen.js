import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search 
    ? props.location.search.split('=')[1]
    : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;
    
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Sua confirmação de senha não está correta.')
        } else {
        dispatch(register(name, email, password));
      }
    };
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
  return (
  <div>
      <form className="form" onSubmit={submitHandler}>
          <div>
              <h1>Cadastrar Conta</h1>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Digite seu nome" required
              onChange={(e) => setName(e.target.value)}>
              </input>
          </div>
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
              <label htmlFor="confirmPassword">Confirme a Senha</label>
              <input type="password" id="confirmPassword" placeholder="Confirmar sua senha" required
              onChange={(e) => setConfirmPassword(e.target.value)}>
              </input>
          </div>
          <div>
              <label />
              <button className="primary" type="submit">Cadastrar</button>
          </div>
          <div>
              <label />
              <div>
                  Já possui conta na MarketPlay?{' '}
                  <Link to={`/signin?redirect=${redirect}`}>Acessar sua conta.</Link>
              </div>
          </div>
      </form>
  </div>
  )
}

