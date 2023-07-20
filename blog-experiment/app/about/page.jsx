import React from "react";
import Image from "next/image";

import { getAbout } from "@/libs/firebase"
import { getAboutShort } from "@/libs/firebase"

async function aboutPage() {

    const pp = await getAboutShort();
    const data = await getAbout();
    const data_str = JSON.stringify(data);

    return <div>
    <div className="flex place-content-center text-center mt-40 mb-20">
        <div flex w-full max-h-200 justify-center mb-10>
            <Image
            className="rounded-full"
            width={200}
            height={200}
            src={pp.pp}
        />
        </div>
        <h2 className="text-center text-4xl underline mt-20 ml-20">About me.</h2>
        </div>
        <div className="flex-col mr-40 ml-40">
            <div className="justify-center">
                <h3 className="text-2xl mb-3">Who Am I?</h3>
            </div>
            <div className="flex justify-center">
                <p>{data.about}</p>
            </div>
        </div>
    </div>
}

export default aboutPage;