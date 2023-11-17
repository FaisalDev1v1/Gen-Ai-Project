import Link from 'next/link'
import React from 'react'
import Home from "../components/Home"

function page() {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-row-reverse w-full p-10 mt-16'>
                <div className='flex flex-col text-white'>
                    <h1 className='mb-5 font-bold text-right text-7xl'>دَؤوب</h1>
                    <p className='text-base text-[#A1A1A1] text-right'>ومعناه المستمر والجاد<br /> هو مشروع لتصميم خطط استمرارية الاعمال لضمان سير اعمال المنشآت في حال وقوع مخاطر او كوارث غير متوقعة</p>
                    <Link href="/multiform" className='px-6 py-2 mt-2 ml-auto text-lg text-center cursor-pointer rounded-xl bg-white/30 hover:bg-white/60'>
                        صمم خطتك الان
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page