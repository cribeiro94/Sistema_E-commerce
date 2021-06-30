import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {
    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;         
    const dispatch = useDispatch();   
    useEffect(() => {
       dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);
  return loading ? (
  <LoadingBox></LoadingBox>
  ) : error ? (
  <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
        <h1></h1>
        <div className="row top">
            <div className="col-2">
                <ul>
                    <li>
                        <div className="card card-body">
                            <h2>Endereço de Entrega</h2>
                            <p>
                                <strong>Nome Completo: </strong> {cart.shippingAddress.fullName} <br />
                                <strong>Endereço: </strong> {cart.shippingAddress.address},
                                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                                {cart.shippingAddress.country}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Pagamento</h2>
                            <p>
                                <strong>Forma de Pagamento: </strong> {cart.paymentMethod}                                
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Meus Pedidos</h2>
                            <ul>
            {cart.cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img 
                      src={item.image} 
                      alt={item.name} 
                      className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    
                    <div>{item.qty} x R$ {item.price} = R$ {item.qty * item.price}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
                </div>
             </li>
          </ul>
        </div>
         <div className="col-1">
             <div className="card card-body">
                 <ul>
                     <li>
                         <h2>Resumo do Pedido</h2>
                     </li>
                     <li>
                         <div className="row">
                             <div>Produtos</div>
                             <div>R$ {cart.itemsPrice.toFixed(2)}</div>
                         </div>
                     </li>
                     <li>
                         <div className="row">
                             <div>Valor do Frete</div>
                             <div>R$ {cart.shippingPrice.toFixed(2)}</div>
                         </div>
                     </li>
                     <li>
                         <div className="row">
                             <div>Taxa de importação</div>
                             <div>R$ {cart.taxPrice.toFixed(2)}</div>
                         </div>
                     </li>
                     <li>
                         <div className="row">
                             <div>
                                 <strong> Valor total </strong>
                             </div>
                             <div>
                                 <strong>R$ {cart.totalPrice.toFixed(2)}</strong>
                             </div>
                         </div>
                     </li>
                     <li>
                         <button 
                         type="button" 
                         onClick={placeOrderHandler} 
                         className="primary block"
                         disabled={cart.cartItems.length === 0}
                         >
                             Finalizar Pedido
                         </button>
                     </li>
                     {loading && <LoadingBox></LoadingBox>}
                     {error && <MessageBox variant="danger">{error}</MessageBox>}
                 </ul>
             </div>
         </div>
        </div>
    </div>
  )
}
