import React from "react";
import Link from "next/link";

function Header() {
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
            </nav>
        </div>
    </div>
}

export default Header;