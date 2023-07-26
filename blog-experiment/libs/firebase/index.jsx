import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, query } from 'firebase/firestore/lite';
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDGFUjVTRx52F1guko6_ogkVIcHIrc6DpM",
    authDomain: "next-experiments-batu.firebaseapp.com",
    projectId: "next-experiments-batu",
    storageBucket: "next-experiments-batu.appspot.com",
    messagingSenderId: "13218623125",
    appId: "1:13218623125:web:5a4760af4798f9c023759c",
    measurementId: "G-DFEQWCXL10"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

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
