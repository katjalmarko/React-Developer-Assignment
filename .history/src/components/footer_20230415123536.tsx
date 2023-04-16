import React from 'react'

const footer = () => {
  return (
    <div>
      <!-- component -->
<div class="jusitfy-center flex min-h-screen w-full items-center bg-gray-900">
  <section
    class="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform rounded-2xl bg-gray-400"
  ></section>

  <section
    class="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0"
  >
    <div class="flex justify-end">
      <div class="h-4 w-4 rounded-full bg-gray-900"></div>
    </div>

    <!-- year.month.day -->
    <header class="text-center text-xl font-extrabold text-gray-600">
      2021.09.01
    </header>

    <div>
      <p class="text-center text-5xl font-extrabold text-gray-900">
        Online Test <br />(Physics)
      </p>
      <p class="text-center text-4xl font-extrabold text-[#FE5401]">2 hours</p>
    </div>

    <footer class="mb-10 flex justify-center">
      <button
        class="flex items-center rounded-lg bg-[#FF7308] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#E56707]"
      >
        <p>Start</p>
        <svg
          class="h-9 w-9"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </footer>
  </section>
</div>
    </div>
  )
}

export default footer