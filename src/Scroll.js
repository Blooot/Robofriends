import React from 'react';

const Scroll = (props) => {
return (
    <div style={{ overflowY: 'scroll', border: '5px solid #5B75F7', height: '800px'}}>
        {props.children}
    </div>
);
};

export default Scroll;