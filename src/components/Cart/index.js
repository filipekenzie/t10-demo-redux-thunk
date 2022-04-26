import { useSelector } from "react-redux";
import Product from "../Product";

//Desafio: Calcular o valor total do carrinho
const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div>
      <h1>Meu carrinho de compras</h1>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable></Product>
      ))}
    </div>
  );
};

export default Cart;
