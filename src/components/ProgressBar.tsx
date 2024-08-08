// src/components/ProgressBar.tsx
import React from 'react';

const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div className="w-full bg-gray-200 h-2.5 rounded">
            <div
                className="bg-blue-600 h-2.5 rounded"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
