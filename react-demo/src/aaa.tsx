import React from 'react';

export function AFunc(props): React.FC {
    const a = () => { }
    return <div><span>{props.text}</span></div>
}