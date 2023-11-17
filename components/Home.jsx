"use client"

import Head from "next/head";
import { useRef, useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// import Greeting from "../components/Greeting";
import LoadingDots from "../components/LoadingDots";
import DropdownField from "../components/DropdownField";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";

import displayListOptions from '../services/displayListOptions';
import { failure_list, industryList } from "../asset/list";

import StepOne from "../components/StepOne";
// import StepTwo from "../components/StepTwo";
import Header from "./Header";


const Home = () => {
    const [loading, setLoading] = useState(false);

    const [stepOne, setStepOne] = useState("");
    const [stepTwo, setStepTwo] = useState("");

    const bioRef = useRef(null);

    const scrollToBios = () => {
        if (bioRef.current !== null) {
            bioRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    const generateStepOne = async () => {
        setStepOne("");
        setLoading(true);

        const prompt = "outputOne";

        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // This data is a ReadableStream
        const data = response.body;
        if (!data) {
            return;
        }

        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;

        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);
            setStepOne((prev) => prev + chunkValue);
        }
        scrollToBios();
        setLoading(false);

        // await generateStepTwo();
    };

    // const generateStepTwo = async () => {
    //     setStepTwo("");
    //     setLoading(true);

    //     const prompt = "outputTwo";

    //     const response = await fetch("/api/generate2", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ prompt }),
    //     });

    //     if (!response.ok) {
    //         throw new Error(response.statusText);
    //     }

    //     // This data is a ReadableStream
    //     const data = response.body;
    //     if (!data) {
    //         return;
    //     }

    //     const reader = data.getReader();
    //     const decoder = new TextDecoder();
    //     let done = false;

    //     while (!done) {
    //         const { value, done: doneReading } = await reader.read();
    //         done = doneReading;
    //         const chunkValue = decoder.decode(value);
    //         setStepTwo((prev) => prev + chunkValue);
    //     }
    //     scrollToBios();
    //     setLoading(false);
    // };

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
        // platform: Yup.string()
        //     .oneOf(
        //         platformList,
        //         'Invalid Platform Type'
        //     ).required('Required'),
        // actorNumbers: Yup.string()
        //     .oneOf(
        //         actorNumberList,
        //         'Invalid Actor numbers'
        //     ).required('Required'),
    });

    async function onSubmit(values, onSubmitProps) {
        onSubmitProps.setSubmitting(false);
        generateStepOne();
    }

    return (
        <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen py-2 mx-auto">
            <Head>
                <title>BCMP Generator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 text-center sm:mt-6">
                {/* <Greeting /> */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={onSubmit}
                >
                    {(formik) => (
                        <div className='w-full p-2 mx-auto md:p-5 md:w-10/12'>
                            <Form className='w-full p-6 bg-[#eeeeee] rounded-lg '>
                                <div className='flex flex-col justify-around w-full grid-cols-2 md:gap-2 md:grid'>
                                    <DropdownField label="Industry Type" name="typeOfFailure" className="">
                                        {displayListOptions(industryList, "Industry")}
                                    </DropdownField>
                                    <DropdownField label="Failure Type" name="typeOfIndustry" className="">
                                        {displayListOptions(failure_list, "Failure")}
                                    </DropdownField>

                                    <TextArea
                                        formik={formik}
                                        name="coreFunctions"
                                        className="col-span-full"
                                        label="List Important Core Functions"
                                    />
                                </div>


                                <div className="w-full max-w-xl mx-auto">
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
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>

                <div className="my-10 space-y-10">
                    {stepOne && (
                        <>
                            <div>
                                <h2
                                    className="mx-auto text-3xl font-bold sm:text-4xl text-slate-900"
                                    ref={bioRef}
                                >
                                    Result
                                </h2>
                            </div>
                            <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-8">
                                <StepOne data={stepOne} />
                                {/* <StepTwo data={stepTwo} /> */}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Home;
