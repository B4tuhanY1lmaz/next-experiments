import React from "react";

const getText = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    return res.json();
}

async function contactPage() {

    const data = await getText();

    return <div>
    <div className="flex justify-center mt-40 mb-20">
        <h2 className="text-center text-4xl underline">Get in touch.</h2>
        </div>
        <div className="flex-col mr-40 ml-40">
            <div className="justify-center">
                <h3 className="text-2xl mb-3">Phone</h3>
                <p>{data.phone}</p>
                <h3 className="text-2xl mb-3">E Mail</h3>
                <p>{data.email}</p>
            </div>
        </div>
    </div>
}

export default contactPage;