import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query } from 'firebase/firestore/lite';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAboutShort() {
    const docAboutShort = doc(db, "About", "about-short");
    const docSnap = await getDoc(docAboutShort);

    if (docSnap.exists()) {
        const AboutShort = docSnap.data();
        return AboutShort;
    } else {
        console.log("Error fetching doc")
    }
}

export async function getAbout() {
    const docAbout = doc(db, "About", "about");
    const docSnap = await getDoc(docAbout);

    if (docSnap.exists()) {
        const About = docSnap.data();
        return About
    } else {
        console.log("Error fetching about page")
    }
}

export async function getBlogShort() {
    const getBlogShort = query(collection(db, "Posts"));

    const querySnapshot = await getDocs(getBlogShort);
    const blogShorts = querySnapshot.docs.map((doc) =>{
        return { id: doc.id, ...doc.data() };
    })
    return blogShorts
}

export async function handleSubmit(event) {
    event.preventDefault();

    const data = {
        name: String(event.target.name.value),
        email: String(event.target.email.value),
        message: String(event.target.message.value),
    }

    console.log(data);
    try {
        const docRef = await addDoc(collection(db, "messages"), (data));
        console.log(data, "send successfully with the id of",  docRef.id);
    } catch (error) {
        console.log("There was an error", error);
    }
}