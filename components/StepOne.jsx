"use client"

import React from 'react'

function StepOne({ data }) {
    return (
        <div>
            <h1>Step One</h1>
            {data
                ?.substring(data.indexOf("1"))
                .split("Step")
                .map((generatedBio) => {
                    return (
                        <div
                            className="p-4 transition bg-white border shadow-md rounded-xl hover:bg-gray-100 cursor-copy"
                            onClick={() => {
                                navigator.clipboard.writeText(generatedBio);
                            }}
                            key={generatedBio}
                        >
                            <p>{generatedBio}</p>
                        </div>
                    );
                })}
        </div>
    )
}

export default StepOne