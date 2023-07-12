import React from "react";
import Link from "next/link"
import Image from "next/image";

import BlogPosts from "@/components/blogposts";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function BlogBox() {
    return <div className="flex">
        <div className="flex-col gap-5 mt-20">
            <h2 className="text-2xl underline ml-20">Latest from Blog</h2>
            <div className="flex flex-wrap gap-5 mt-20 ml-28">
                <BlogPosts 
                title="Leaving my paid subscriptions"
                subtitle="I had lot’s of subscription over different apps ..."
                />
                <BlogPosts 
                title="We already have Mastodon why we need Pixelfed?"
                subtitle="My journey with Fediverse has began when DistroTube created his own public Mastodon ..."
                />
                <BlogPosts
                title="asdasdasdasdasdasdasdasdasdasdasdasdasd"
                subtitle=""
                />
            </div>
            <div className="flex gap-5 ml-28 mt-5">
                <BlogPosts 
                title="BlogPost 4"
                subtitle=""
                />
                <BlogPosts 
                title="BlogPost5"
                subtitle=""
                />
                <BlogPosts 
                title="BlogPost6"
                subtitle=""
                />
            </div>
        </div>
        <p className="ml-20 mt-60 mr-20 text-3xl hover:underline">
            Read more over at my blog!
            <BsFillArrowRightCircleFill className="w-full mt-3"/>
            </p>
    </div>
}

export default BlogBox;
