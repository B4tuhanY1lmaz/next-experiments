"use client"

import React from "react";

import { initializeApp } from "firebase/app";
import { enableNetwork, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";  
import { firebaseConfig } from "@/libs/firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function contactPage() {

    function handleSubmit(event) {
        event.preventDefault();
    
        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        }

        console.log(data);
        try {
            const docRef = addDoc(collection(db, "messages"), (data));
            console.log(docRef.id)
        } catch (error) {
            console.log(error.message)
        }
    }

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