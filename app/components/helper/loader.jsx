"use client";

import React from 'react';
import Image from 'next/image';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <Image
                    src="/loading.gif" // Path to your loading GIF in the public folder
                    alt="Loading..."
                    width={150} // Adjust width as needed
                    height={150} // Adjust height as needed
                    unoptimized={true} // Use unoptimized for GIFs
                />
            </div>
        </div>
    );
};

export default Loader;
