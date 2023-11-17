"use client"
import React from 'react'
import { ErrorMessage, useField } from 'formik';

function DropdownField({ className, label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className={`flex flex-col mb-2 ${className}`} >
            <div className='flex flex-row-reverse items-center gap-x-2'>
                <label className='mb-1 font-semibold text-slate-700 tex-right' htmlFor={field.name}>{label}</label>
                <ErrorMessage component="div" name={field.name} className="text-sm font-semibold text-red-500" />
            </div>

            <select
                className={`text-right w-full h-10 bg-[#F3F8FF] rounded border border-[#a8cbfc] focus:border-[#a8cbfc] focus:ring-2 focus:ring-[#a8cbfc] text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                 ${meta.touched && meta.error && 'border-red-500 border-2'}`}
                {...field} {...props} />
        </div>
    );
};


export default DropdownField