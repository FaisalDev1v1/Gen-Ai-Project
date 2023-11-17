"use client"
import React from 'react'
import { useState } from 'react';
import FormStepOne from "../../components/FormStepOne"
import FormStepTwo from "../../components/FormStepTwo"
import Steps from "../../components/Steps"

function page() {
    const [step, setStep] = useState(1);

    const goToPreviousStep = () => {
        setStep(step - 1);
    };

    const goToNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 mx-auto">
            <h1 className="text-3xl font-bold text-gray-300">
                صمم خطتك
            </h1>
            <div className="flex flex-col w-1/2 p-4 bg-white rounded-lg">
                <Steps step={step} />
                <hr className="w-full mb-2 border-b-2" />
                {/* Form detail */}
                {step == 1 && <FormStepOne />}
                {step == 2 && <FormStepTwo />}
            </div>

            <div className='flex justify-between w-1/2 gap-x-4'>
                <button
                    disabled={step == 4}
                    onClick={() => goToNextStep()}
                    className={`px-10 py-2 text-white ${step == 4 ? "bg-white/25 " : "bg-blue-600"} rounded-xl`}>
                    التالي
                </button>
                <button
                    disabled={step == 1}
                    onClick={() => goToPreviousStep()}
                    className={`px-10 py-2 text-white ${step == 1 ? "bg-white/25 " : "bg-blue-600"} rounded-xl`}>
                    السابق
                </button>
            </div>
        </div>
    )
}

export default page