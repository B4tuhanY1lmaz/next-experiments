import React from "react";
import Image from "next/image";

import { BsFillArrowDownCircleFill } from "react-icons/bs";
import avatarImage from "@/assets/avatar.jpg";

const getName = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    return res.json();
}

async function AboutBox() {

    const name = await getName();

    return <div className="grid grid-cols-10 gap-5 grid-rows-6 place-content-center">
        <div className="items-center col-start-4 col-span-1 row-start-3">
            <Image 
            src={avatarImage}
            alt="avatar" 
            width={100} 
            height={100} 
            className="rounded-full"
            />
        </div>
        <div className="col-start-5 col-span-3 row-start-3 row-end-5">
        <h2 className="text-3xl underline">{name.name}</h2>
        <div>
            <p>{name.phone}</p>
        </div>
        </div>
        <button className="justify-items-center col-start-1 col-span-10 row-start-6 w-full text-5xl mb-20">
            <BsFillArrowDownCircleFill className="justify-items-center w-full"/>
            </button>
    </div>
    
}

export default AboutBox;