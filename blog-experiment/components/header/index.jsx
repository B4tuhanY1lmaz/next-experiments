import React, { useEffect, useState } from "react";
import Link from "next/link";

import { UserAuth } from "@/libs/authContext"

const Header = () => {
    const { user, GoogleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        console.log("You clicked on me")
        try {
            await GoogleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return <div class="sticky top-0 bg-black">
        <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-8 text-24 tracking-700 text-white mt-10 ml-20">
                The Batuhan's Network
            </Link>
            <nav className="flex gap-5 text-18 font-medium tracking-normal mt-10 mr-20">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/blog" className="hover:underline">Blog</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>

                {!user ? null :(
                    <li className="cursor-pointer">
                        <Link href="/dash">Dashboard</Link>
                    </li>
                )}

                {loading ? null : !user ? (
                    <li className="cursor-pointer" onClick={handleSignIn}>Login/Register</li>
                ) : (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <p className="cursor-pointer" onClick={handleSignOut}>Sign out</p>
                    </div>
                )}
            </nav>
        </div>
    </div>
}

export default Header;