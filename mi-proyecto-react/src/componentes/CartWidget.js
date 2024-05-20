import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={25} />
      <Badge bg="secondary">3</Badge> {}
    </div>
  );
};

export default CartWidget;
