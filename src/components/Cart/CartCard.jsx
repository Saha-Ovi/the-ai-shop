import React from 'react';

const CartCard = ({item,handledRemove}) => {
   
    return (
        <div className='space-y-8'>
           
           {/* cart card */}
            <div className='flex justify-between items-center  p-6 rounded-2xl shadow-2xl bg-gray-200 hover:border border-red-500'>
                {/* left */}
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <img className='w-20' src={item.image} alt="" />
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>{item.title} </h2>
                        <p className='text-sm font-semibold'>{item.description}</p>
                    </div>
                </div>
                {/* right */}
                <div className='flex items-center gap-4'>
                    <h2 >
                        <span  className='text-2xl font-bold'>${item.price}</span>
                        <span className='text-lg text-zinc-500'>/month</span>
                     </h2>
                    <button onClick={()=>handledRemove(item)} className='btn text-red-500'>X</button>
                </div>
            </div>
          
        </div>
    );
};

export default CartCard;