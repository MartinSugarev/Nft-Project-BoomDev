import React from 'react';


export default function Logo({type}){
return <img src={ type === 'default' ? "/images/logo.svg" : "/images/logo-muted.svg"} alt="logo-image"/>  
}

Logo.defaultProps = {
    type: 'default'
}



