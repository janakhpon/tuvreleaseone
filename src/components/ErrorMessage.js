import React from 'react';

const ErrorMessage = (props) => {

    return <p style={{ color: '#ff0000' }}>{props.errorsms}</p>;
}

export default ErrorMessage;