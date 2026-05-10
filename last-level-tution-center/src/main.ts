import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main class= bg-gray-950/60  min-h-screen  min-w-screen flex flex-col"> 
<nav >
<div class="flex flex-wrap justify-center items-center gap-9 "> 
    <div class="bg-amber-500">
          <a href=""> 
          <img src="./assets/vite.svg" alt="this is the logo">
          
          </a>
          </div>

 <div class="flex flex-wrap justify-center gap-4 sm:gap-30 text-center">
     
            <a
              href="#"
              class="rounded-md bg-gray-950/60 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-white"
            >
              contact
            </a>

            <a
              href="#"
              class="rounded-md px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              services
            </a>

            <a
              href="#"
              class="rounded-md px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              booking
            </a>

            <a
              href="#"
              class="rounded-md px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              location
            </a>
          </div>
        
</div>
</nav>
<main >
THIS IS THE MAIN CONTENT
</main>
<footer class="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
  <div class="container p-6">
    <div class="grid md:grid-cols-2 lg:grid-cols-4">
      <!--First links section-->
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          About Us
        </h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Our Story</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Team</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Careers</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Partners</a
            >
          </li>
        </ul>
      </div>

      <!--Second links section-->
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Services
        </h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Web Dev</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Design</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Marketing</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Consulting</a
            >
          </li>
        </ul>
      </div>

      <!--Third links section-->
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Resources
        </h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Blog</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Tutorials</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Case Studies</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >FAQs</a
            >
          </li>
        </ul>
      </div>

      <!--Fourth links section-->
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
          Contact
        </h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Contact Us</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Support</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Feedback</a
            >
          </li>
          <li>
            <a href="#!" class="text-neutral-800 dark:text-neutral-200"
              >Find Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!--Copyright section-->
  <div
    class="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tw-elements.com/"
      >TW Elements</a
    >
  </div>
</footer>
</main>

`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
