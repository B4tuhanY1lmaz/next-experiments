import React from "react";
import Image from "next/image";

import { getBlogShort } from "@/libs/firebase"
import { getAboutShort } from "@/libs/firebase"

import { BsFillArrowDownCircleFill } from "react-icons/bs";


async function AboutBox() {

    const data = await getAboutShort();

    console.log(getBlogShort())

    return <div className="grid grid-cols-10 gap-5 grid-rows-6 place-items-center">
        <div className="items-center col-start-4 col-span-1 row-start-3">
            <Image 
            src={data.pp}
            alt="avatar" 
            width={100} 
            height={100} 
            className="rounded-full"
            />
        </div>
        <div className="col-start-5 col-span-3 row-start-3 row-end-5">
        <h2 className="text-3xl underline">{data.name}</h2>
        <div>
            <p>{data.bio}</p>
        </div>
        </div>
        <button className="justify-items-center col-start-1 col-span-10 row-start-6 w-full text-5xl mb-20">
            <BsFillArrowDownCircleFill className="justify-items-center w-full animate-bounce"/>
            </button>
    </div>
    
}

export default AboutBox;