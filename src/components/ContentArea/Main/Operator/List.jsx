import React from 'react';
import OperatorItem from "./Item";
import './List.css';

const OperatorList = ({list, ...props}) => (
    <div className="list-container">
        {list.map((item, i) => (
            <OperatorItem {...{key: i, children: item, ...props}} />
        ))}
    </div>
);

export default OperatorList;