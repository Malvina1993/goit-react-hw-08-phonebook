import { Puff } from 'react-loader-spinner';
import React from 'react';
import css from './Loader.module.css'


export const Loader = () => {
    return (
        <div className={css.loader}>
            <Puff
            
            height="80"
            width="80"
            radius={1}
            color="#afca5a"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    )
};
