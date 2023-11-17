"use client"

function convertString(str) {
    return str.toLowerCase().replace(/\s/g, '-');
}

export default function displayListOptions(lists, type) {
    return (
        <>
            <option value="">{type}</option>
            {
                lists.map(item => {
                    return (<option key={convertString(item)} value={item} >{item}</option>
                    )
                })
            }
        </>
    )
}
