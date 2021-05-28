import React from 'react';

export default function CheckoutSteps(props) {
  return (
      <div className="row checkout-steps">
          <div className={props.step1 ? 'active': ''}>Fazer login</div>
          <div className={props.step2 ? 'active': ''}>Endereço para envio</div>
          <div className={props.step3 ? 'active': ''}>Forma de pagamento</div>
          <div className={props.step4 ? 'active': ''}>Finalizar Pedido</div>
      </div>
  );
}
