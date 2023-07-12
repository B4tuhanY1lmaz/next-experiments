import React from "react";

function aboutPage() {
    return <div>
    <div className="flex justify-center mt-40 mb-20">
        <h2 className="text-center text-4xl underline">About me.</h2>
        </div>
        <div className="grid grid-cols-8">
            <div className="justify-center col-start-3 col-span-5">
                <h3 className="text-2xl">Who Am I?</h3>
            </div>
            <div className="col-start-3 col-span-4 justify-center">
            My name is Batuhan Yılmaz and I’m an 18 year old high school student who interested in lot’s of things. I do live in Nevşehir, Turkey. I’m a 12th grade student and a computer nerd on my own. I’m also interested in designing stuff and when I get my school done I’m planning to hop into this colorfull world of the designers and web developing.

I love keeping things simple so this about page is gonna be an oversimplified page.

I love technology and generally I do write about my adventures with it or experiences with life with keeping myself a bit off topic.

I love self-hosting my stuff and the page you’re looking at right now is being served from my own server and there could be downtimes. I’m sorry about that.

If you’re searching for some links to follow me over at world wide web. You can check out the Links page.
            </div>
        </div>
    </div>
}

export default aboutPage;