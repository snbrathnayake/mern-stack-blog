import React from 'react';

function LoadingBox() {
    return (
        <div className="loading">
            <i className="fa fa-spinner fa-spin"></i>
            <span style={{ marginLeft: '5px'}}>Loading...</span>
        </div>
    );
}

export default LoadingBox;