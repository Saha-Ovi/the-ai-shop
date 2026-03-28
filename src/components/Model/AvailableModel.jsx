import React, { use, useState } from 'react';
import SelectedModel from './SelectedModel';
import CardData from '../Card/CardData';

const AvailableModel = ({ modelPromiseData }) => {

    const modelData = use(modelPromiseData);
    // console.log(modelData);
     const [activeTab,setActiveTab]=useState("model");
    return (
        <div className='container mx-auto space-y-5'>
                <div class="tabs tabs-box bg-transparent gap-10 justify-center">
                    <input onClick={()=>setActiveTab("model")} type="radio" name="my_tabs_1" class={`tab w-40 rounded-full ${activeTab==="model"? "bg-linear-to-r from-pink-500 to-red-500 text-white":"bg-base-200 text-black"}`} aria-label="Models" checked="checked" />
                    <input onClick={()=>setActiveTab("cart")} type="radio" name="my_tabs_1" class={`tab w-40 rounded-full ${activeTab==="cart"? "bg-linear-to-r from-pink-500 to-red-500 text-white":"bg-base-200 text-black"}`}  aria-label="Cart"  />
                </div>
            <div>
                {
                    activeTab==="model"?
                    <SelectedModel modelData={modelData}></SelectedModel>
                    :
                    <CardData></CardData>
                }
            </div>
        </div>
    );
};

export default AvailableModel;