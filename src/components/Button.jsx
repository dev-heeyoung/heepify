import React from 'react';

export default function Button({text, className}) {
    return (
        <button className={`bg-point text-white font-semibold w-36 px-3 py-2 ${className}`}>
            {text}
        </button>
    );
}

