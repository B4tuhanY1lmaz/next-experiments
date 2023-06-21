'use client'
import React from 'react'
import Link from "next/link";


function Error() {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <h1>There was an error on our server</h1>
            <Link 
            href="/"
            style={{ textDecoration: "underline", fontSize: 28, marginTop: 8}}
            >
                Go somewhere else on server
            </Link>
        </div>
    );
}

export default Error;