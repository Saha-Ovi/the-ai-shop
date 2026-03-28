import React from 'react';
import ModelCard from './ModelCard';

const SelectedModel = ({modelData}) => {
    return (
        <div >
              <div className='grid grid-cols-3 gap-4 justify-between items-center '>
                {
                    modelData.map(model=><ModelCard key={model.id} model={model}></ModelCard>)
                }
            </div>
         
        </div>
    );
};

export default SelectedModel;