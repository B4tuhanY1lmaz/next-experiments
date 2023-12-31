import React from "react";
import Image from "next/image";

function Photos({ title }) {
    return <div
    class="block rounded-lg bg-neutral-700">
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat"
      data-te-ripple-init
      data-te-ripple-color="light">
      <Image
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"/>
      <a href="#!">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </a>
    </div>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </div>
  </div>
}

export default Photos;