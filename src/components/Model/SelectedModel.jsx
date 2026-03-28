import React from 'react';
import ModelCard from './ModelCard';

const SelectedModel = ({modelData,cart,setCart}) => {
    return (
        <div >
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center '>
                {
                    modelData.map(model=><ModelCard key={model.id} model={model} cart={cart} setCart={setCart}></ModelCard>)
                }
            </div>
         
        </div>
    );
};

export default SelectedModel;