import React from 'react';

export default function Button({text, className, onClick}) {
    return (
        <button className={`bg-point text-white font-semibold w-36 px-3 py-2 ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

