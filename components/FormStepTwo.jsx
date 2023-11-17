"use client"
import React, { useState } from 'react'
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import LoadingDots from "./LoadingDots";
import DropdownField from "./DropdownField";
import TextArea from "./TextArea";

import displayListOptions from '../services/displayListOptions';
import { failure_list, industryList } from "../asset/list";

function FormStepTwo() {
    const [loading, setLoading] = useState(false);

    const initialValues = {
        coreFunctions: "",
        typeOfIndustry: "",
        typeOfFailure: "",
    }

    const validate = Yup.object({
        coreFunctions: Yup.string()
            .required('Required')
            .min(10, 'Must be 4 characters or 300')
            .max(300, 'Must be 300 characters or 10'),
        typeOfIndustry: Yup.string()
            .oneOf(
                industryList,
                'Invalid industry Type'
            ).required('Required'),
        typeOfFailure: Yup.string()
            .oneOf(
                failure_list,
                'Invalid failure Type'
            ).required('Required'),
    });

    async function onSubmit(values, onSubmitProps) {
        onSubmitProps.setSubmitting(false);
        generateStepOne();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <div className='w-full p-2 mx-auto md:p-5 md:w-10/12'>
                    <Form className='flex flex-col w-full rounded-lg '>
                        <h1 className="mx-auto text-xl font-bold text-black">الوظائف الاساسية</h1>
                        <TextArea
                            formik={formik}
                            name="coreFunctions"
                            className="col-span-full"
                            label="List Important Core Functions"
                        />
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default FormStepTwo