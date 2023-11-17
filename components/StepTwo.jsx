"use client"

import React from 'react'

export default function StepTwo({ data }) {
    if (!data) { return null }
    return (
        <div>
            <h1>Step Two</h1>
            {data
                ?.substring(data.indexOf("1"))
                .split("\n")
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