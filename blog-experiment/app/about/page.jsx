import React from "react";

const getText = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments/1")
    return res.json();
}

async function aboutPage() {

    const data = await getText();

    return <div>
    <div className="flex justify-center mt-40 mb-20">
        <h2 className="text-center text-4xl underline">About me.</h2>
        </div>
        <div className="flex-col mr-40 ml-40">
            <div className="justify-center">
                <h3 className="text-2xl mb-3">Who Am I?</h3>
            </div>
            <div className="flex justify-center">
                <p>{data.body}</p>
            </div>
        </div>
    </div>
}

export default aboutPage;