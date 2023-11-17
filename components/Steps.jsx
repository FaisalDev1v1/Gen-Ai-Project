"use client"
import React from 'react'

function Steps({ step }) {
    return (
        <div className='flex flex-row-reverse justify-around mb-4 gap-x-4'>
            <div className={`grid w-10 h-10 font-bold text-white ${step >= 1 ? "bg-blue-600" : "bg-gray-300"} rounded-full place-items-center`}>1</div>
            <div className={`grid w-10 h-10 font-bold text-white ${step >= 2 ? "bg-blue-600" : "bg-gray-300"} rounded-full place-items-center`}>2</div>
            <div className={`grid w-10 h-10 font-bold text-white ${step >= 3 ? "bg-blue-600" : "bg-gray-300"} rounded-full place-items-center`}>3</div>
            <div className={`grid w-10 h-10 font-bold text-white ${step >= 4 ? "bg-blue-600" : "bg-gray-300"} rounded-full place-items-center`}>4</div>
        </div>
    )
}

export default Steps