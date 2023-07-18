import React from "react";

import BlogPosts from "@/components/blogposts"

const getAllPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/")
    return res.json();
}

async function blogPage() {
    const posts = await getAllPosts();
    return <div>
        <div className="flex justify-center mt-40 mb-20">
            <h2 className="text-center text-4xl underline">Blog.</h2>
        </div>
        <div className="flex-col gap-5 content-center mr-40 ml-40">
            {posts.map((post) => (
                <BlogPosts
                title={post.title}
                subtitle={post.body}
                />
            )
            )}
        </div>
    </div>
}

export default blogPage;