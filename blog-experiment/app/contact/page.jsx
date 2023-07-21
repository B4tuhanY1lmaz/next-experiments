"use client"

import React from "react";
import { handleSubmit } from "@/libs/firebase";

function contactPage() {
    return <div>
    <div className="flex justify-center mt-40 mb-20">
        <h2 className="text-center text-4xl underline">Get in touch.</h2>
        </div>
        <div className="justify-center mx-auto max-w-2xl px-4 my-10">
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col">
                    <label htmlFor="name" >Name</label>
                    <input type="text" id="name" autoComplete="off" required/>
                </div>
                <div className="w-full flex flex-col">
                    <label htmlFor="email" >E-Mail</label>
                    <input type="email" id="email" autoComplete="off" required/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea 
                    rows={4} 
                    placeholder="Message comes there"
                    className="w-full" 
                    required
                    id="message"
                    />
                </div>
                <button 
                type="submit"
                className="">Submit message!</button>
            </form>
        </div>
    </div>
}

export default contactPage;