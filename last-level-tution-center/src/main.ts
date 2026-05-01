import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main class= bg-gray-950/60  min-h-screen  min-w-screen flex flex-col"> 
<nav >
<div class="flex flex-wrap justify-center items-center"> 
 <div class="flex flex-wrap justify-center gap-1 sm:gap-30 text-center">
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
<main>
THIS IS THE MAIN CONTENT
</main>
<footer>
THIS IS A FOOTER 
</footer>


</main>

`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
