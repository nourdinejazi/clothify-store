"use client";

import { useEffect, useState } from 'react';

import useCart from '@/hooks/use-cart';

import Summary from './summary'
import CartItem from './cart-item';



const CartClient = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
    return ( 
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 relative lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7 ">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
              <ul className=''>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
     );
}
 
export default CartClient;