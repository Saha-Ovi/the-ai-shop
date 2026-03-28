import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model,cart,setCart }) => {
    // console.log(model);
    const [isSubscribed,setIsSubscribed]=useState(false);
    const handledSubscribe=()=>
    {
        // setIsSubscribed(true);
        // setIsSubscribed(!isSubscribed);
        const exist=cart.find(item=> item.id===model.id)
      
        if(!exist)
        {
            
            setCart([...cart,model]);
            setIsSubscribed(true);
            toast.success(`${model.title} added to cart`);
        }
        else
        {
          const newCart=cart.filter(item=> item.id!==model.id);
          setCart(newCart);
          setIsSubscribed(false);
          toast.error(`${model.title} already added to cart`);
        }
        
    }
    return (
        // card div
            <div className='h-full'>
                
                <div className='flex flex-col h-full border border-base-200 shadow-2xl rounded-3xl overflow-hidden  space-y-6'>
                    {/* Image div */}
                        <div className=' flex justify-center py-14 bg-zinc-300 '>
                            <img className='w-40' src={model.image} alt="model image" />
                        </div>
                        {/* card description */}
                    <div className='flex flex-col flex-1 p-8 space-y-4'>
                        <div className='space-y-4'>
                            <h2 className='font-extrabold text-2xl'>{model.title}</h2>
                            <p> {model.description} </p>
                            <div>
                               {
                                 model.price>0 ?<p> <span className='font-extrabold text-2xl'>${model.price}</span>
                                <span className='text-zinc-400 text-lg'>/month</span></p>: <span className='text-3xl text-lime-500'>Free</span>

                               }
                            </div>
                        </div>
                        <button onClick={handledSubscribe} className='btn w-full bg-red-600 text-white font-bold text-2xl rounded-2xl py-8 mt-auto '>
                           {
                             (isSubscribed) ? "Subscribed":" Subscribe Now"
                           }
                            
                            
                            </button>
                    </div>
                </div>
        </div>
    );
};

export default ModelCard;