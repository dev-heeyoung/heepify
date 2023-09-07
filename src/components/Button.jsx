import React from 'react';

export default function Button({text, className}) {
    return (
        <button className={`bg-point text-white font-semibold w-36 px-2 py-1 ${className}`}>
            {text}
        </button>
    );
}

