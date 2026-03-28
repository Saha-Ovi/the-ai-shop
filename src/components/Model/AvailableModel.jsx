import React, { use, useState } from 'react';
import SelectedModel from './SelectedModel';
import Cart from '../Cart/Cart';


const AvailableModel = ({ modelPromiseData }) => {

    const modelData = use(modelPromiseData);
    // console.log(modelData);
     const [activeTab,setActiveTab]=useState("model");
     const [cart,setCart]=useState([]);
    //  console.log(cart);

    return (
        <div className='container mx-auto space-y-5'>
                <div className="tabs tabs-box bg-transparent gap-10 justify-center">
                    <input onClick={()=>setActiveTab("model")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab==="model"? "bg-linear-to-r from-pink-500 to-red-500 text-white":"bg-base-200 text-black"}`} aria-label="Models" defaultChecked />
                    <input onClick={()=>setActiveTab("cart")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab==="cart"? "bg-linear-to-r from-pink-500 to-red-500 text-white":"bg-base-200 text-black"}`}  aria-label="Cart"  />
                </div>
            <div>
                {
                    activeTab==="model"?
                    <SelectedModel modelData={modelData} cart={cart} setCart={setCart}></SelectedModel>
                    :
                   <Cart cart={cart} setCart={setCart}></Cart>
                }
            </div>
        </div>
    );
};

export default AvailableModel;