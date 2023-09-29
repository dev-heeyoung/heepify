import React from 'react';

export default function Button({text, className, onClick}) {
    return (
        <button className={`bg-point text-white font-semibold px-5 py-3 whitespace-nowrap shadow-md uppercase hover:bg-brand ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

