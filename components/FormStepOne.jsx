"use client"
import React, { useState } from 'react'
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import LoadingDots from "../components/LoadingDots";
import DropdownField from "../components/DropdownField";
import TextArea from "../components/TextArea";

import displayListOptions from '../services/displayListOptions';
import { failure_list, industryList } from "../asset/list";

function FormStepOne() {
    const [loading, setLoading] = useState(false);

    const initialValues = {
        coreFunctions: "",
        typeOfIndustry: "",
        typeOfFailure: "",
    }

    const validate = Yup.object({
        coreFunctions: Yup.string()
            .required('الزامي')
            .min(10, 'Must be 4 characters or 300')
            .max(300, 'Must be 300 characters or 10'),
        typeOfIndustry: Yup.string()
            .oneOf(
                industryList,
                'Invalid industry Type'
            ).required('الزامي'),
        typeOfFailure: Yup.string()
            .oneOf(
                failure_list,
                'Invalid failure Type'
            ).required('الزامي'),
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
                        <h1 className="mx-auto text-xl font-bold text-black">بيانات المنظمة</h1>
                        <DropdownField label="نوع المنظمة" name="typeOfFailure" className="">
                            {displayListOptions(industryList, "اختر المنظمة")}
                        </DropdownField>

                        <DropdownField label="نوع الحادثة" name="typeOfIndustry" className="">
                            {displayListOptions(failure_list, "اختر الحادثة")}
                        </DropdownField>

                        {/* <TextArea
                            formik={formik}
                            name="coreFunctions"
                            className="col-span-full"
                            label="List Important Core Functions"
                        /> */}


                        {/* <div className="w-full max-w-xl mx-auto">
                            {!loading && (
                                <button
                                    disabled={!formik.isValid || formik.isSubmitting || loading}
                                    className="w-full px-4 py-2 mt-8 font-medium text-white bg-black cursor-pointer rounded-xl sm:mt-10 hover:bg-black/80"
                                    type="submit"
                                >
                                    Generate BCMP &rarr;
                                </button>
                            )}

                            {loading && (
                                <button
                                    className="w-full px-4 py-2 mt-8 font-medium text-white bg-black rounded-xl sm:mt-10 hover:bg-black/80"
                                    disabled
                                >
                                    <LoadingDots color="white" style="large" />
                                </button>
                            )}
                        </div> */}
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default FormStepOne