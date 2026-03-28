import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    // console.log(cart);
    const totalPrice = cart.reduce((sum, cartItem) => sum + cartItem.price, 0)
    const handledCheckout = () => {
        setCart([]);
        toast.success("Proceeded to the checkout ");
    }
    const handledRemove = (item) => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
        toast.success(`${item.title} remove from the card successfully`)
    }
    return (
        <div className='container mx-auto space-y-6'>
            <h2 className='text-5xl font-extrabold'>Your Cart</h2>
            <div className='space-y-6 hover:cursor-pointer'>


                {
                    cart.length === 0 ?
                        <div className='shadow-xl bg-zinc-400 rounded-2xl text-center p-4'>
                            <h2 className='text-2xl font-extrabold'>Cart is Empty</h2>
                            <p className='text-xl font-bold'>Please Add item to the cart</p>
                        </div>
                        :
                        cart.map(item => <CartCard key={item.id} item={item} setCart={setCart} totalPrice={totalPrice} handledRemove={handledRemove}></CartCard>)
                }
            </div>
            <div className='flex justify-between items-center bg-black text-white p-6 rounded-2xl '>
                <h2 className='text-2xl font-extrabold'>Total : </h2>
                <p className='text-2xl text-red-400 font-extrabold'>${totalPrice}</p>
            </div>

            <div>
                <button onClick={handledCheckout} className='btn bg-red-600 p-8 w-full text-3xl text-white mb-6 rounded-2xl'>Proceed To Checkout</button>
            </div>

        </div>
    );
};

export default Cart;