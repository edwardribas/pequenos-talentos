import React from 'react';

export default function Title(prop){
    return (
        <div className="title">
            <h2>{prop.section.toUpperCase()}</h2>
        </div>
    )
}