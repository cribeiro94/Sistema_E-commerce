import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode, country })
        );
        props.history.push('/payment');
        // TODO: dispatch save shipping address action
    }
  return ( 
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
          <div>
              <h1>Endereço de Entrega</h1>
          </div>
          <div>
              <label htmlFor="fullName">Nome Completo</label>
              <input 
              type="text" 
              id="fullName" 
              placeholder="Digite seu nome completo" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required
              ></input>
          </div>
          <div>
              <label htmlFor="address">Endereço</label>
              <input 
              type="text" 
              id="address" 
              placeholder="Digite seu endereço e o complemento" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required
              ></input>
          </div>
          <div>
              <label htmlFor="city">Cidade/Estado</label>
              <input 
              type="text" 
              id="city" 
              placeholder="Digite sua Cidade e o Estado" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              required
              ></input>
          </div>
          <div>
              <label htmlFor="postalCode">CEP</label>
              <input 
              type="text" 
              id="postalCode" 
              placeholder="Digite seu CEP" 
              value={postalCode} 
              onChange={(e) => setPostalCode(e.target.value)} 
              required
              ></input>
          </div>
          <div>
              <label htmlFor="country">País</label>
              <input 
              type="text" 
              id="country" 
              placeholder="Digite o País onde mora" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
              required
              ></input>
          </div>
          <div>
              <label />
              <button className="primary" type="submit">Continuar</button>
          </div>
      </form>
    </div>
  );
}