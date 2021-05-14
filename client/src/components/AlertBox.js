import React, { useEffect, useState } from 'react';

function AlertBox(props) {
    const [visibility, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 1000);
    }, []);


    return (
        visibility && 
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    );
}

export default AlertBox;