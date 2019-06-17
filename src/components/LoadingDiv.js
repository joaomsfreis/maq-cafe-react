import React from 'react';
import Spinner from 'react-spinner-material';

const LoadingDiv = (props) => (
    <div style={{position: 'relative', left: '47%'}}>
        <Spinner size={80} spinnerColor={"rgba(30, 30, 30, 1)"} spinnerWidth={5} visible={true} />
    </div>
);

export default LoadingDiv;