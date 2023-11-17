"use client"

import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, className, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`flex flex-col mb-2 ${className}`}>
            <div className='flex items-center justify-start w-full gap-x-2'>
                <label className='mb-1 font-semibold text-slate-700' htmlFor={field.name}>{label}</label>
                <ErrorMessage component="div" name={field.name} className="text-xs font-semibold text-red-500 md:text-sm" />
            </div>
            <input
                className={`form-control w-full bg-[#F3F8FF]rounded border border-[#a8cbfc] focus:border-[#a8cbfc] focus:ring-2 focus:ring-[#a8cbfc] text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                 ${meta.touched && meta.error && 'border-red-500 border-2'}`}
                {...field}
                {...props}
                autoComplete="off"
            />

        </div >
    )
}


export default TextField