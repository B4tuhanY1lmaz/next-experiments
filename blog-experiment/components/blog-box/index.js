

import React from "react";
import Link from "next/link"
import Image from "next/image";

import BlogPosts from "@/components/blogposts";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    return res.json();
}

async function BlogBox() {
    
    const data = await getPosts();

    return <div className="flex">
        <div className="flex-col gap-5 mt-20">
            <h2 className="text-2xl underline ml-20">Latest from Blog</h2>
            <div className="flex flex-wrap gap-5 mt-20 ml-28">
                {data.map((data) => (
                    <BlogPosts 
                    title={data.title}
                    subtitle={data.body}
                    />
                )
                )}
            </div>
        </div>
        <p className="ml-20 mt-60 mr-20 text-3xl hover:underline">
            Read more over at my blog!
            <BsFillArrowRightCircleFill className="w-full mt-3"/>
            </p>
    </div>
}

export default BlogBox;
