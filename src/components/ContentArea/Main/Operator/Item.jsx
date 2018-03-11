import React from 'react';

const OperatorItem = ({children, ...props}) => (
    <div className="list-container__item" onClick={props.onItemClick}>
        {children}
    </div>
);

export default OperatorItem;