import React from 'react';

export default function Button({text, className, onClick}) {
    return (
        <button className={`bg-point text-white font-basic font-semibold px-5 py-3 whitespace-nowrap shadow-md uppercase ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

